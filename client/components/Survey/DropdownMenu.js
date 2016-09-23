
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
      this.onSelectChange = this.onSelectChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    onSelectChange (dropdown) {          //onChange fn
      console.log('SETTING STATE AT', dropdown.target.name, 'TO', dropdown.target.value);
      var stateObj = {};
      stateObj[dropdown.target.name] = dropdown.target.value;
      this.setState(stateObj);
    }

    onFormSubmit (event) {              //onSubmit fn
      event.preventDefault();           //Stops refresh
      var surveyResponse = {            //Obj holding user details
        location: this.state.location,
        pets: this.state.pets
      }
      this.props.postSurveyAnswers(surveyResponse);
    }


    //ADDING SELECT BOXES
      //Duplicate the full div holding the select element
      //Change select box's name & location attrs to be appropriate
      //Replace options to match what you want
      //Include new k:v pair in onFormSubmit

    render() {

      var message='You selected '+this.state.filter;
      var selection = this.state.filter
      {console.log('rendered', selection)}
      return (
        <div className="col-sm-12">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group col-sm-7">
              <select name="location" value={this.state.location} onChange={this.onSelectChange}>
                 <option value="somewhere near MKS">somewhere near MKS</option>
                 <option value="MKS">MKS</option>
                 <option value="West Village">West Village</option>
                 <option value="East Village">East Village</option>
               </select>
            </div>
            <div className="form-group col-sm-7">
              <select name="pets" value={this.state.pets} onChange={this.onSelectChange}>
                <option value="cats">Cats</option>
                <option value="dogs">Dogs</option>
                <option value="none">None</option>
              </select>
            </div>
            <div className="form-group col-sm-5">
              <button type="submit" className="btn btn-block btn-primary">Submit</button>
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
