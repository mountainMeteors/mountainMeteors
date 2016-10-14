import React from 'react';
import { render } from 'react-dom';
import { Form, FormControl, FormGroup, Checkbox, Col, Button, ControlLabel, Popover, Tooltip, Modal, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postListing, putListing } from '../actionCreators/listingActions';
import Geosuggest from 'react-geosuggest';
import { scrapeListing } from '../util/listingUtil'
import { getDistance } from '../util/distUtil';




// import css from '../styles/app.css';

class AddListingsModal extends React.Component {

  constructor(props){
    console.log('modal receiving props', props);
    super(props);
    this.state = {
      modalTitle: props.modalType === 'add' ? 'Add Listing' : 'Edit Listing'
    };

    //Set defaults
    this.state.listingId = props.listing ? props.listing.id : null;
    let properties = [
      'location', 'rent', 'pets', 'lat', 'lng', 'neighborhood', 'squareFeet', 'bedrooms', 'bathrooms',
      'dishwasher', 'gym', 'laundry', 'doorman', 'noFee', 'roof', 'garage', 'pool',
      'outdoorSpace', 'url'
    ];
    properties.forEach(property => {
      if (props.listing && props.listing[property] !== null) {
        this.state[property] = props.listing[property];
      } else {
        this.state[property] = '';
      }
    });

    this.state.showModal = false;

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleBox = this.toggleBox.bind(this);
    this.handleGeoChange = this.handleGeoChange.bind(this);
    this.onModalSubmit = this.onModalSubmit.bind(this);
    this.onGeoSelect = this.onGeoSelect.bind(this);
    this.scrapeListingSubmit = this.scrapeListingSubmit.bind(this);
    this.getDistanceSubmit = this.getDistanceSubmit.bind(this);
  }


  componentWillReceiveProps(newProps) {
    console.log("ding ding ding", newProps.scrapeData);
    if (Object.keys(newProps.scrapeData).length)
      this.setState({
        rent: newProps.scrapeData.rentInfo[0],
        location: newProps.scrapeData.location[0],
        neighborhood: newProps.scrapeData.neighborhood[1],
        pets: newProps.scrapeData.catsAllowed,
        squareFeet: newProps.scrapeData.squareFeet[0],
        bedrooms: newProps.scrapeData.bedInfo[0].numberOfBedsLong,
        bathrooms: newProps.scrapeData.bathInfo[0].numberOfBathsLong,
        availability: newProps.scrapeData.availability[0],
        dishwasher: newProps.scrapeData.amenities[0].dishwasher,
        gym: newProps.scrapeData.amenities[0].gym,
        laundry: newProps.scrapeData.amenities[0].laundry,
        noFee: newProps.scrapeData.amenities[0].nofee
      })
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleChange = (input) => {
    console.log('changed input', input);
    console.log('changed at', input.target.name, input.target.value);
    var stateObj = {};
    stateObj[input.target.name] = input.target.value;
    console.log('setting state', stateObj);
    this.setState(stateObj);
    console.log('state.gym', this.state.gym);
  }

  //TODO: Need to allow edit modal to pick up on previous values
  toggleBox = (input) => {
    let amenity = input.target.name;
    console.log('toggled box from', amenity, this.state[amenity]);
    var stateObj = {};
    stateObj[amenity] = this.state[amenity] === 1 ? 0 : 1;
    console.log('setting state', stateObj);
    this.setState(stateObj);
  }

  handleGeoChange = (value) => {
    this.setState({
      'location': value
    });
  }

  onGeoSelect = (geoObj) => {
    console.log('geoObj', geoObj);
    this.setState({
      location: geoObj.label.split(',')[0], //TODO: Might need to adapt this if a comma can be in address
      lat: geoObj.location.lat,
      lng: geoObj.location.lng
    });
  }

  scrapeListingSubmit (event) {
    console.log("EVENT FOR SCRAPE LISTING", event.target.value)
    this.setState({url: event.target.value})
    scrapeListing(event.target.value)
  }

  getDistanceSubmit (event) {
    console.log('######DISTANCE#####', event.target)
    getDistance()
  }


  onModalSubmit (event) {
    event.preventDefault();
    let listings = {
      location: this.state.location,
      rent: this.state.rent,
      pets: this.state.pets,
      neighborhood: this.state.neighborhood,
      squareFeet: this.state.squareFeet,
      bedrooms: this.state.bedrooms,
      bathrooms: this.state.bathrooms,
      dishwasher: this.state.dishwasher,
      gym: this.state.gym,
      laundry: this.state.laundry,
      pool: this.state.pool,
      roof: this.state.roof,
      doorman: this.state.doorman,
      outdoorSpace: this.state.outdoorSpace,
      elevator: this.state.elevator,
      garage: this.state.garage,
      noFee: this.state.noFee,
      lat: this.state.lat,
      lng: this.state.lng,
      url: this.state.url
    }
    console.log('listing id', this.state.listingId);
    console.log('postListing is', this.props.postListing);
    console.log('submitting', listings);
    // console.log('user id', this.props.user_id)
    if (this.props.modalType === "add") this.props.postListing(listings);
    else this.props.putListing(this.state.listingId, listings);
    this.close()
  }

  render() {
    const popover = (
     <Popover id="modal-popover" title="popover">
     </Popover>
   );
   const tooltip = (
     <Tooltip id="modal-tooltip">
     </Tooltip>
   );



   return (
     <div className="add-modal">

        {this.props.modalType === 'add' ?
          <Button
            bsStyle="primary"
            onClick={this.open.bind(this)}
          >
            Add
          </Button>
        :
          <div onClick={this.open.bind(this)}>
            <Glyphicon glyph="pencil" />
          </div>
        }

       <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
         <Modal.Header closeButton>
           <Modal.Title>{this.state.modalTitle}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <div>
           <Form onSubmit={this.onModalSubmit}>
            <FormGroup controlId="formUrl">
            <ControlLabel>Url</ControlLabel>
            {' '}
            <FormControl name="url" value={this.state.url}
            onChange={this.scrapeListingSubmit}
            type="text" placeholder="www.apartments.com" />
            </FormGroup>
             <FormGroup controlId="formAddress">
               <ControlLabel>Address</ControlLabel>
               {' '}
               <Geosuggest
                 location={new google.maps.LatLng(40.7725833, -73.9736894)}
                 initialValue={this.state.location}
                 radius="20"
                 placeholder="1216 Broadway"
                 className="geosuggest__suggests-wrapper"
                 inputClassName="form-control"
                 types={['geocode']}
                 onChange={this.handleGeoChange}
                 onSuggestSelect={this.onGeoSelect}
                />
             </FormGroup>
             {' '}
             <FormGroup controlId="formNeighborhood">
               <ControlLabel>Neighborhood</ControlLabel>
               <FormControl name="neighborhood" value={this.state.neighborhood}
               onChange={this.handleChange}
               type="text" placeholder="East Village" />
             </FormGroup>
             {' '}
             <FormGroup controlId="formPrice">
               <ControlLabel>Rent</ControlLabel>
               <FormControl name="rent" value={this.state.rent}
               onChange={this.handleChange}
               type="text" placeholder="$2000" />
             </FormGroup>
             {' '}
             <FormGroup controlId="formBedrooms">
               <ControlLabel>Bedrooms</ControlLabel>
               <FormControl name="bedrooms" value={this.state.bedrooms}
               onChange={this.handleChange}
               type="text" placeholder="3 Bedrooms" />
             </FormGroup>
             {' '}
             <FormGroup controlId="formBathrooms">
               <ControlLabel>Bathrooms</ControlLabel>
               <FormControl name="bathrooms" value={this.state.bathrooms}
               onChange={this.handleChange}
               type="text" placeholder="2 Bathrooms" />
             </FormGroup>
             {' '}
             <FormGroup controlId="formSquareFeet">
               <ControlLabel>Square Feet</ControlLabel>
               <FormControl name="squareFeet" value={this.state.squareFeet}
               onChange={this.handleChange}
               type="text" placeholder="1200 sq ft" />
             </FormGroup>
             {' '}
             <FormGroup controlId="formAvailability">
               <ControlLabel>Availability</ControlLabel>
               <FormControl name="availability" value={this.state.availability}
               onChange={this.handleChange}
               type="text" placeholder="Now" />
             </FormGroup>
             {' '}
             <FormGroup controlId="formPets">
              <ControlLabel>Pets</ControlLabel>
              <FormControl name="pets" componentClass="select" value={this.state.pets}
              onChange={this.handleChange} placeholder="None">
                <option value="select">select</option>
                <option value="cats">Cats</option>
                <option value="dogs">Dogs</option>
                <option value="both">Both</option>
                <option value="none">None</option>
              </FormControl>
            </FormGroup>

            <FormGroup controlId="formFee">
             <Checkbox>
               <b>No Fee</b>
             </Checkbox>
             </FormGroup>
              <br></br>

             <FormGroup controlId="formAmenities">
             <ControlLabel>Amenities &nbsp; </ControlLabel>

               <Checkbox inline name="gym" value={this.state.gym}
               onChange={this.toggleBox}>
                 Gym
               </Checkbox>
               {' '}
               <Checkbox inline name="laundry" value={this.state.laundry}
               onChange={this.toggleBox}>
                 Laundry
               </Checkbox>
               {' '}
               <Checkbox inline name="roof" value={this.state.roof}
               onChange={this.toggleBox}>
                 Roof
               </Checkbox>
               {' '}
               <Checkbox inline name="dishwasher" value={this.state.dishwasher}
               onChange={this.toggleBox}>
                 Dishwasher
               </Checkbox>
               <Checkbox inline name="outdoorSpace" value={this.state.outdoorSpace}
               onChange={this.toggleBox}>
                 Outdoor Space
               </Checkbox>
               <Checkbox inline name="elevator" value={this.state.elevator}
               onChange={this.toggleBox}>
                 Elevator
               </Checkbox>
               <Checkbox inline name="doorman" value={this.state.doorman}
               onChange={this.toggleBox}>
                 Doorman
               </Checkbox >
               <Checkbox inline name="garage" value={this.state.garage}
               onChange={this.toggleBox}>
                 Garage
               </Checkbox>
               <Checkbox inline name="pool" value={this.state.pool}
               onChange={this.toggleBox}>
                 Pool
               </Checkbox>
             </FormGroup>
              {' '}
            <Button bsStyle="primary" type="submit">Send</Button>
           </Form>
         </div>
         <div>&nbsp;</div>
         </Modal.Body>
         <Modal.Footer>
           <Button onClick={this.close.bind(this)}>Close</Button>
         </Modal.Footer>
       </Modal>
     </div>
   );
 }
};

function mapStateToProps(state){
  return {
    user_id: state.auth.user_id,
    scrapeData: state.scraper
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({postListing, putListing}, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(AddListingsModal);
