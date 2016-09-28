import React from 'react';
import { render } from 'react-dom';
import { Form, FormControl, FormGroup, Col, Button, ControlLabel, Popover, Tooltip, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { signUpUser } from './actionCreators/accountActions'

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

  render() {
    const popover = (
     <Popover id="modal-popover" title="popover">
       very popover. such engagement
     </Popover>
   );
   const tooltip = (
     <Tooltip id="modal-tooltip">
       wow.
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
           <Form onSubmit=''>
             <FormGroup controlId="formAddress">
               <ControlLabel>Address</ControlLabel>
               {' '}
               <FormControl type="text" placeholder="123 BeaconHill" />
             </FormGroup>
             {' '}
             <FormGroup controlId="formPrice">
               <ControlLabel>Budget</ControlLabel>
               {' '}
               <FormControl type="price" placeholder="$2000" />
             </FormGroup>
             {' '}
             <FormGroup controlId="formPets" validationState="success">
               <ControlLabel>Input with success</ControlLabel>
               <FormControl type="text" />
             </FormGroup>
             {'  '}
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
