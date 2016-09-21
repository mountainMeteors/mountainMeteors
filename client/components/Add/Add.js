import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { Modal, Form, FormControl, FormGroup, ControlLabel, Button, div, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap';

class formModal extends React.Component{
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
         onClick={this.open}
       >
         Add
       </Button>

       <Modal show={this.state.showModal} onHide={this.close}>
         <Modal.Header closeButton>
           <Modal.Title>Edit Modal</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <div>
           <Form>
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
           <Button onClick={this.close}>Close</Button>
         </Modal.Footer>
       </Modal>
     </div>
   );
 }
};

// ReactDOM.render(formModal, mountNode);
export default formModal;
