
import React from 'react';
import  { postSurveyAnswers } from '../../actions/actionCreators'
import Form, { Input, Fieldset } from 'react-bootstrap-form';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';



const styles = {
  customWidth: {
    width: 200,
  },
};


class DropdownMenu extends React.Component{

    constructor(props) {
      super(props);

      this.state = {filter: ''}
      this.getSelectedValue = this.getSelectedValue.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    getSelectedValue (event) {
      console.log('SETTING STATE AT', event.target.name, 'TO', event.target.value);
      var stateObj = {};
      stateObj[event.target.name] = event.target.value;
      this.setState(stateObj);

      // WORKS, BUT FOR SINGLE BOXES ONLY
      // this.setState({ filter:event.target.value });
    }

    onFormSubmit (event) {
      event.preventDefault();

        //WORKS, BUT ONLY ONE BOX
      // console.log('filter', this.state.filter);
      // this.props.postSurveyAnswers(this.state.filter);

      // console.log('state stuff', this.state.location, this.state.pets);
      var surveyResponse = {
        location: this.state.location,
        pets: this.state.pets
      }
      // console.log('ready to send survey response', surveyResponse);
      this.props.postSurveyAnswers(surveyResponse);

    }


    render() {

      var message='You selected '+this.state.filter;
      var selection = this.state.filter
      {console.log('rendered', selection)}
      return (
        <div className="col-sm-12">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group col-sm-7">
              <select name="location" value={this.state.location} onChange={this.getSelectedValue}>
                 <option value="somewhere near MKS">somewhere near MKS</option>
                 <option value="MKS">MKS</option>
                 <option value="West Village">West Village</option>
                 <option value="East Village">East Village</option>
               </select>
            </div>
            <div className="form-group col-sm-7">
              <select name="pets" value={this.state.pets} onChange={this.getSelectedValue}>
                <option value="cats">Cats</option>
                <option value="dogs">Dogs</option>
                <option value="none">None</option>
              </select>
            </div>
            <div className="form-group col-sm-5">
              <button type="submit" className="btn btn-block btn-primary">Search Github</button>
            </div>
          </form>
        </div>
      );
    }
};


//
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ postSurveyAnswers }, dispatch)
}

export default connect(null, mapDispatchToProps)(DropdownMenu)



// <div className="form-group col-sm-7">
//   <select name="pets" value={this.state.filter} onChange={this.getSelectedValue}>
//     <option value="cats">Cats</option>
//     <option value="dogs">Dogs</option>
//     <option value="none">None</option>
//   </select>
// </div>
