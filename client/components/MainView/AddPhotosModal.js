import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { uploadPhotos } from '../../actionCreators/photoActions';
import { Form, FormControl, FormGroup, Col, Button, ControlLabel, Popover, Tooltip, Glyphicon, Modal } from 'react-bootstrap';
import { postPhotos } from './PostPhotos'
// import { Modal } from 'react-modal'


class AddPhotosModal extends React.Component {
    constructor (props) {
      super(props);
      this.state = {};
  

      this.state.showModal = false;

      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
      
    }

    close() {
      this.setState({ showModal: false });
    }

    open() {
      this.setState({ showModal: true });
    }

    render () {
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
  }


export default AddPhotosModal 