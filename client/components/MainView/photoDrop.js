import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import Dropzone from 'react-dropzone';
import request from 'superagent';

export default class photoDrop extends Component{
  constructor(props) {
    super(props); 
    this.state = {
      images: []
    };
  }


  onSubmit(props) {
    // this.props.createPost3(props)
  }


  render () {
    const field = this.props;
    const files = field.input.value;

    return (
      <div>
      <Dropzone 
      onDrop={( photos, event )=> {this.setState({
        images: [...this.state.images, photos]}, function () {
          field.input.onChange(this.state.images);
        });
    }
  }
    >

    <div>Try dropping some files here, or click to select files to upload.</div>
    </Dropzone>
    {this.state.images.length > 0 ? <div>
      <h2>  Uploading{this.state.images.length} photos...</h2>
                <div id="imageContainer">{this.state.images.map((file) => <img key={file[0].name} className="imagePreview" src={file[0].preview} /> )}</div>
             </div> : null}
          </div>
        );
        }
      }



