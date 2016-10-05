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
        return (
            <div>
              <Dropzone onDrop={this.onDrop}>
                <div>Try dropping some files here, or click to select files to upload.</div>
              </Dropzone>
            </div>
        );
      }

  }

