
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

    getSelectedValue (event,value) {
      this.setState({ filter:event.target.value });
    }

    onFormSubmit (event) {
      console.log('submitted', event);
      console.log('filter', this.state.filter);
      // event.preventDefault();
      this.props.postSurveyAnswers(this.state.filter);
      this.setState({ filter: "" });
    }



    render() {
      var message='You selected '+this.state.filter;
      var selection = this.state.filter
      {console.log(selection)}
      return (
        <div>
         <select value={this.state.filter}
          onChange={this.getSelectedValue} />
            <option value="somewhere near MKS">somewhere near MKS</option>
            <option value="MKS">MKS</option>
            <option value="West Village">West Village</option>
            <option value="East Village">East Village</option>
          </select>
          <p>{message}</p>
              <button className="btn btn-primary" type="submit"
              onSubmit={()=>this.onFormSubmit(this.state.filter)}>
                Submit
              </button>
          </div>
      );
    }
};


//
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ postSurveyAnswers }, dispatch)
}



export default connect(null, mapDispatchToProps)(DropdownMenu)
