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
  onSubmit(props) {
// Action here
  }


    render(){
      console.log("postNew props", this.props);
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
              <label htmlFor="description">Description</label>
              <Field name="description" component="input" type="text" className="form-control" placeholder="bedroom ...."/>
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
// function mapStateToProps(state){
//     return {
//       loc: state.loc,
//      }
// }



PostPhotos = reduxForm({
  form: 'PostsTest'  
  // validate
})(PostPhotos);
export default connect(null, null)(PostPhotos);