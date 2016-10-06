import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { uploadPhotos } from '../../actionCreators/photoActions';
import { Form, FormControl, FormGroup, Col, Button, ControlLabel, Popover, Tooltip, Modal, Glyphicon } from 'react-bootstrap';




class postPhotos extends Component{
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
this.onDrop = this.onDrop.bind(this);
this.onOpenClick = this.onOpenClick.bind(this);
this.onFormSubmit = this.onFormSubmit.bind(this);
  }


    onDrop (photos) {
      this.setState({
        photos: [...this.state.photos, photos]
      });
    }



    onOpenClick () {
      this.dropzone.open();
    }


    onFormSubmit = (event) => {
        event.preventDefault();
    var listingPhotos = {
        photos: this.state.photos
    }
    this.props.uploadPhotos(listingPhotos)
    }

    render () {
        console.log('=============>', this.state.photos)
        return (

            <div>
            <form onSubmit= {this.onFormSubmit} className="dropzone"  encType="multipart/form-data">
                <Dropzone ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop}>
                    <div> Drop photos of your future apartment here</div>
                </Dropzone>
                <button type="button" onClick={this.onOpenClick}>
                Upload photos
                </button>
                {this.state.photos.length > 0 ? <div>
                <h2>Uploading {this.state.photos.length} photos...</h2>
                <div>{this.state.photos.map((photo) => <img key={photo[0].name} src={photo[0].preview} /> )}</div>
                </div> : null}
                <button type="submit" className="btn btn-primary" id="buttonNew">Submit</button>
               </form> 
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ uploadPhotos }, dispatch)
}


export default connect(null, mapDispatchToProps) (postPhotos);

