import React from 'react';
import { render } from 'react-dom';
import { Form, FormControl, FormGroup, Col, Button, ControlLabel, Popover, Tooltip, Modal, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postListing, putListing } from '../actionCreators/listingActions';
import Geosuggest from 'react-geosuggest';
import { scrapeListing } from '../util/listingUtil.js'



// import css from '../styles/app.css';

class AddListingsModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.state.listingId = props.listing ? props.listing.id : null
    this.state.location = props.listing ? props.listing.location : '';
    this.state.rent = props.listing ? props.listing.rent : '';
    this.state.pets = props.listing ? props.listing.pets : '';
    this.state.lat = props.listing ? props.listing.lat : 0;
    this.state.lng = props.listing ? props.listing.lng : 0;
    this.state.showModal = false;

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGeoChange = this.handleGeoChange.bind(this);
    this.onModalSubmit = this.onModalSubmit.bind(this);
    this.onGeoSelect = this.onGeoSelect.bind(this);
    this.scrapeListingSubmit = this.scrapeListingSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    console.log("ding ding ding", newProps.scrapeData);
    if (newProps.scrapeData)
      this.setState({
        rent: newProps.scrapeData.rentInfo[0],
        pets: newProps.scrapeData.pets
      })
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleChange = (input) => {
    var stateObj = {};
    stateObj[input.target.name] = input.target.value;
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
    scrapeListing(event.target.value)
  }

  onModalSubmit (event) {
    event.preventDefault();
    let listings = {
      location: this.state.location,
      rent: this.state.rent,
      pets: this.state.pets,
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
     <div>

        {this.props.modalType === 'add' ?
          <Button
            bsStyle="primary"
            bsSize="small"
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
           <Modal.Title>Apartment Listings</Modal.Title>
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
                {/*
                  <FormControl name="location" value={this.state.location}
                onChange={this.handleChange}
                type="text" placeholder="123 BeaconHill" />
                */}
             </FormGroup>
             {' '}
             <FormGroup controlId="formPrice">
               <ControlLabel>Budget</ControlLabel>
               {' '}
               <FormControl name="rent" value={this.state.rent}
               onChange={this.handleChange}
               type="rent" placeholder="$2000" />
             </FormGroup>
             {' '}
             <FormGroup controlId="formPets">
               <ControlLabel>Pets</ControlLabel>
               <FormControl name="pets" value={this.state.pets}
               onChange={this.handleChange}
               type="text" placeholder="Cats, Dogs, Both, None" />
             </FormGroup>
             {' '}
             <Button type="submit">
               Send
             </Button>
           </Form>
         </div>
         </Modal.Body>
         <Modal.Footer>
           <Button onClick={this.close.bind(this)}>Close</Button>
         </Modal.Footer>
       </Modal>
     </div>
   );
 }
};

//this.props.user_id = store.reducername

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
