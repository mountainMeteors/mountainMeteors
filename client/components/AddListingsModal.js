import React from 'react';
import { render } from 'react-dom';
import { Form, FormControl, FormGroup, Col, Button, ControlLabel, Popover, Tooltip, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postListing } from '../actionCreators/listingActions';

class AddListingsModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: '',
      price: '',
      pets: '',
      showModal: false
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onModalSubmit = this.onModalSubmit.bind(this);
  }


  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleChange = (input) => {
    // console.log("++++++++++++", criteria, value)
    var stateObj = {};
    stateObj[input.target.name] = input.target.value;
    this.setState(stateObj);
    // this.setState({
    //   [criteria]: value
    // })
  }

  onModalSubmit (event) {
    event.preventDefault();
    let listings = {
      location: this.state.location,
      price: this.state.price,
      pets: this.state.pets
    }
    console.log('postListing is', this.props.postListing);
    console.log('user id', this.props.user_id)
    this.props.postListing(listings);
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
                <FormControl name="location" value={this.state.location}
                onChange={this.handleChange}
                type="text" placeholder="123 BeaconHill" />
             </FormGroup>
             {' '}
             <FormGroup controlId="formPrice">
               <ControlLabel>Budget</ControlLabel>
               {' '}
               <FormControl name="price" value={this.state.price}
               onChange={this.handleChange}
               type="price" placeholder="$2000" />
             </FormGroup>
             {' '}
             <FormGroup controlId="formPets" validationState="success">
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

function mapStateToProps(state){
  return {
    user_id: state.auth.user_id
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({postListing}, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(AddListingsModal);
