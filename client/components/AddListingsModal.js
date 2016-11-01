import React from 'react';
import { render } from 'react-dom';
import { Form, FormControl, FormGroup, Checkbox, Col, Button, ControlLabel, Popover, Tooltip, Modal, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DemoUrl from './MainView/DemoUrl';
import { postListing, putListing } from '../actionCreators/listingActions';
import Geosuggest from 'react-geosuggest';
import { scrapeListing } from '../util/listingUtil'
import { getDistance } from '../util/distUtil';




// import css from '../styles/app.css';

class AddListingsModal extends React.Component {

  constructor(props){
    // console.log('modal receiving props', props);
    super(props);
    this.state = {
      modalTitle: props.modalType === 'add' ? 'Add Listing' : 'Edit Listing',
      addressSelect: !!props.listing,
      addressError: ''
    };

    //Set defaults
    this.state.listingId = props.listing ? props.listing.id : null;
    let properties = [
      'location', 'rent', 'pets', 'lat', 'lng', 'neighborhood', 'squareFeet', 'bedrooms', 'bathrooms',
      'dishwasher', 'gym', 'laundry', 'doorman', 'noFee', 'elevator', 'roof', 'garage', 'pool',
      'outdoorSpace', 'url'
    ];
    properties.forEach(property => {
      if (props.listing && props.listing[property] !== null) {
        this.state[property] = props.listing[property];
      } else {
        this.state[property] = '';
        if (property === 'pets') this.state[property] = 'none';
      }
      // if (property === 'pets') {
      //   console.log('PETS NOW', this.state[property]);
      // }
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
        rent: newProps.scrapeData.rent[0],
        location: newProps.scrapeData.location[0].split(/ ([Uu]nit|[Aa]pt|[Aa]partment)/)[0],
        neighborhood: newProps.scrapeData.neighborhood[1],
        squareFeet: newProps.scrapeData.squareFeet[0],
        bedrooms: newProps.scrapeData.bedrooms[0].numberOfBedsLong,
        bathrooms: newProps.scrapeData.bathrooms[0].numberOfBathsLong,
        availability: newProps.scrapeData.availability[0]
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
      lng: geoObj.location.lng,
      addressError: '',
      addressSelect: true
    });
  }

  scrapeListingSubmit (event) {
    console.log("EVENT FOR SCRAPE LISTING", event.target.value)
    this.setState({url: event.target.value, addressSelect: false})
    scrapeListing(event.target.value)
  }

  getDistanceSubmit (event) {
    console.log('######DISTANCE#####', event.target)
    getDistance()
  }

  getValidationState (field) {
    if (this.props.scrapeData[field] &&
        this.props.scrapeData[field].length !== 0) {
      console.log('RETURNED vstate');
      return 'success';
    }
  }


  onModalSubmit (event) {
    event.preventDefault();
    if (!this.state.addressSelect) {
      this.setState({addressError: "Please select an address from the dropdown."});
      return;
    }
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
    console.log('submitting', listings);
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
     <div className={this.props.modalType === "add" ? "add-modal" : ""}>

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
            <ControlLabel>URL</ControlLabel>
            <DemoUrl />
            {' '}
            <FormControl name="url" value={this.state.url}
            onChange={this.scrapeListingSubmit}
            type="text" placeholder="www.apartments.com" />
            </FormGroup>
             <FormGroup controlId="formAddress" validationState={this.getValidationState('location')}>
               <ControlLabel>Address</ControlLabel>
               <div className="form-error">{this.state.addressError}</div>
               {' '}
               <Geosuggest
                 location={new google.maps.LatLng(40.7725833, -73.9736894)}
                 initialValue={this.state.location}
                 radius="20"
                 placeholder="1216 Broadway"
                 className="geosuggest__suggests-wrapper"
                 inputClassName="form-control"
                 types={['geocode']}
                 autoActivateFirstSuggest={true}
                 onChange={this.handleGeoChange}
                 onSuggestSelect={this.onGeoSelect}
                />
             </FormGroup>
             {' '}
             <FormGroup controlId="formNeighborhood" validationState={this.getValidationState('neighborhood')}>
               <ControlLabel>Neighborhood</ControlLabel>
               <FormControl name="neighborhood" value={this.state.neighborhood}
               onChange={this.handleChange}
               type="text" placeholder="East Village" />
             </FormGroup>
             {' '}
             <FormGroup controlId="formPrice" validationState={this.getValidationState('rent')}>
               <ControlLabel>Rent</ControlLabel>
               <FormControl name="rent" value={this.state.rent}
               onChange={this.handleChange}
               type="text" placeholder="$2000" />
             </FormGroup>
             {' '}
             <FormGroup controlId="formBedrooms" validationState={this.getValidationState('bedrooms')}>
               <ControlLabel>Bedrooms</ControlLabel>
               <FormControl name="bedrooms" value={this.state.bedrooms}
               onChange={this.handleChange}
               type="text" placeholder="3 Bedrooms" />
             </FormGroup>
             {' '}
             <FormGroup controlId="formBathrooms" validationState={this.getValidationState('bathrooms')}>
               <ControlLabel>Bathrooms</ControlLabel>
               <FormControl name="bathrooms" value={this.state.bathrooms}
               onChange={this.handleChange}
               type="text" placeholder="2 Bathrooms" />
             </FormGroup>
             {' '}
             <FormGroup controlId="formSquareFeet" validationState={this.getValidationState('squareFeet')}>
               <ControlLabel>Square Feet</ControlLabel>
               <FormControl name="squareFeet" value={this.state.squareFeet}
               onChange={this.handleChange}
               type="text" placeholder="1200 sq ft" />
             </FormGroup>
             {' '}
             <FormGroup controlId="formAvailability" validationState={this.getValidationState('availability')}>
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
              <option value="none">None</option>
                <option value="cats">Cats</option>
                <option value="dogs">Dogs</option>
                <option value="both">Both</option>
              </FormControl>
            </FormGroup>

            <FormGroup controlId="formFee">
             <Checkbox name="noFee" value={this.state.noFee}
             onChange={this.toggleBox}>
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
            <Button bsStyle="primary" type="submit" style={{'float':'right'}}>Send</Button>
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
