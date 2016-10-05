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
      photos: []
    };
  }


  onSubmit(props) {
    // this.props.createPost3(props)
  }


  render () {
    console.log('========state====>',this.state.photos)
    const field = this.props;
    const photos = field.input.value;

    return (
      <div> 
      <Dropzone 
      onDrop={( photos, event )=> {this.setState({
        photos: [...this.state.photos, photos]}, function () {
          field.input.onChange(this.state.photos);
        });
    }
  }
    >

    <div></div>
    </Dropzone>
    {this.state.photos.length > 0 ? <div>
      <h2>  Uploading{this.state.photos.length} photos...</h2>
                <div id="imageContainer">{this.state.photos.map((photo) => <img key={photo[0].name} className="imagePreview" src={photo[0].preview} /> )}</div>
             </div> : null}
          </div>
        );
        }
      }



