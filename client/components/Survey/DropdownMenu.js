
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
      console.log('setting state to', event);
      this.setState({ filter:event.target.value });
    }

    onFormSubmit (event) {
      // console.log('submitted', event);
      event.preventDefault();
      console.log('filter', this.state.filter);
      // this.props.postSurveyAnswers(this.state.filter);
      // this.setState({ filter: "" });


    }


    getRef(ref){
      console.log('getting ref', ref);
      this.usernameRef = ref;
    }

    render() {

      var message='You selected '+this.state.filter;
      var selection = this.state.filter
      {console.log('rendered', selection)}
      return (
        <div className="col-sm-12">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group col-sm-7">
              <select value={this.state.filter} onChange={this.getSelectedValue}>
                 <option value="somewhere near MKS">somewhere near MKS</option>
                 <option value="MKS">MKS</option>
                 <option value="West Village">West Village</option>
                 <option value="East Village">East Village</option>
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
