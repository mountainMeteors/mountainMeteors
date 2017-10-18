import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { uploadPhotos } from '../../actionCreators/photoActions';
import { Form, FormControl, FormGroup, Col, Button, ControlLabel, Popover, Tooltip, Glyphicon, Modal } from 'react-bootstrap';
import postPhotos  from './PostPhotos'



class AddPhotosModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};

    this.state.photos = [];
    this.state.showModal = false;

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.onDrop = this.onDrop.bind(this);
    // this.onOpenClick = this.onOpenClick.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onDrop (photos) {
    this.setState({
      photos: [...this.state.photos, photos]
    });
  }

  // onOpenClick () {
  //   this.dropzone.open();
  // }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  onFormSubmit (event) {
    event.preventDefault();
    var listingPhotos = {
      photos: this.state.photos
    }
    this.props.uploadPhotos(listingPhotos, this.props.listing.id)
  }

  render () {
    return (
      <div>
        <div onClick={this.open.bind(this)}>
          <Glyphicon glyph="camera" />
        </div>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title> Add Listing Photos </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div>
              <form onSubmit= {this.onFormSubmit} className="dropzone"  encType="multipart/form-data">
                <Dropzone className="dropzone-area" ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop}>
                  <div className="dropzone-text">
                    Drop photos of your <br/>
                    future apartment here
                  </div>
                </Dropzone>

                {
                  this.state.photos.length > 0 ?
                  <div>
                    <hr/>
                    <h2 style={{"textAlign":"center"}}>
                      {this.state.photos.length} photo(s) ready for upload!
                    </h2>

                    <div className='AddphotoBox'>
                      {this.state.photos.map((photo) =>
                        <img key={photo[0].name}
                          className='photoSlidePreview'
                          src={photo[0].preview}
                        />
                      )}
                    </div>

                  </div>
                  :
                  null
                }

                <Button type="submit" className="btn btn-block btn-primary" id="buttonNew">
                  Submit
                </Button>
              </form>
            </div>
          </Modal.Body>

          <Modal.Footer />
        </Modal>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ uploadPhotos }, dispatch)
}

export default connect(null, mapDispatchToProps) (AddPhotosModal);
