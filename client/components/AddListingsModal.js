import React from 'react';
import { render } from 'react-dom';
import { Form, FormControl, FormGroup, Col, Button, ControlLabel, Popover, Tooltip, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getListings } from './actionCreators/listingsActions';

class AddListingsModal extends React.Component {
  constructor(){
    super();
    this.state = {

      showModal: false
    }
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    console.log('modal', this);
    this.setState({ showModal: true });
  }

  handleChange = (criteria, value) => {
    this.setState({
      [criteria]: value
    })
  }

  onModalSubmit (event) {
    event.preventDefault();
    let listings = {
      location: this.state.location,
      price: this.state.price,
      pets: this.state.pets
    }
    this.props.getListings(listings, this.props.user_id);
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

       <Button
         bsStyle="primary"
         bsSize="small"
         onClick={this.open.bind(this)}
       >
         Add
       </Button>

       <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
         <Modal.Header closeButton>
           <Modal.Title>Apartment Listings</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <div>
           <Form onSubmit={this.onModalSubmit}>
             <FormGroup controlId="formAddress">
               <ControlLabel>Address</ControlLabel>
               {' '}
                <FormControl value={this.state.location}
                onChange={(value) => this.handleChange("location",value)}
                type="text" placeholder="123 BeaconHill" />
             </FormGroup>
             {' '}
             <FormGroup controlId="formPrice">
               <ControlLabel>Budget</ControlLabel>
               {' '}
               <FormControl value={this.state.price}
               onChange={(value) => this.handleChange("price",value)}
               type="price" placeholder="$2000" />
             </FormGroup>
             {' '}
             <FormGroup controlId="formPets" validationState="success">
               <ControlLabel>Input with success</ControlLabel>
               <FormControl value={this.state.pets}
               onChange={(value) => this.handleChange("pets",value)}
               type="text" />
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

export default AddListingsModal;
