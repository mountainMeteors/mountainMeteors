import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import Dropzone from 'react-dropzone';
import request from 'superagent';
// import { createPost3 } from '../actions/actionCreators';

class renderDropzoneInput extends Component{
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }
  onSubmit(props) {
    // this.props.createPost3(props)
  }
  render(){
    // const { value, onChange } = this.props
    const field = this.props
    const files = field.input.value;

  return (
    <div>
      <Dropzone
        onDrop={( filesToUpload, e ) => {
          this.setState({images: [...this.state.images,filesToUpload]}, function(){
            field.input.onChange(this.state.images); //done in callback bc setState doesn't immediately mutate state
          });
        }
      }
      >
        <div>Dropping photos here or select files to upload.</div>
      </Dropzone>
      {this.state.images.length > 0 ? <div>
          <h2>Uploading {this.state.images.length} files...</h2>
          <div id="imageContainer">{this.state.images.map((file) => <img key={file[0].name} className="imagePreview" src={file[0].preview} /> )}</div>
       </div> : null}
    </div>
  );
  }
};



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
              <label htmlFor="DateView">Date View</label>
              <Field name="DateView" component="input" type="text" className="form-control"/>
              <div className="text-help">
              </div>
            </div>


            <div>
              <label htmlFor="images">Your future apartment ...</label>
              <Field
                name="Photos"
                component={renderDropzoneInput}
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