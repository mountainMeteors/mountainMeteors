import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import Dropzone from 'react-dropzone';
import request from 'superagent';
// import { createPost3 } from '../actions/actionCreators';
import photoDrop from './photoDrop'




class PostPhotos extends Component{
  constructor(props) {
    super(props);
    this.state = {
      file: 'photo1'
    };

  }
  onFormSubmit(props) {
// Action here
    // this.props.uploadPhotos(props)
  }


    render(){
      console.log("props========>", this.props);
        const { handleSubmit } = this.props;
        return (
          <form id = "dropForm" className="dropzone"  encType="multipart/form-data">
            <h3>Add real apartment photos</h3>
            <div>
              <label htmlFor="title">Title</label>
              <Field name="title" component="input" type="text" className="form-control" value="defaultValue"/>
              <div className="text-help">
              </div>
            </div>
         
      
            <div>
              <label htmlFor="images">Your future apartment ...</label>
              <Field
                name="Photos"
                component={photoDrop}
              />
            </div>
            <button type="submit" className="btn btn-primary" id="buttonNew">Submit</button>
          </form>
        )
    }
}


PostPhotos = reduxForm({
  form: 'uploadPics'  
  // validate
})(PostPhotos);
export default connect(null, null)(PostPhotos);