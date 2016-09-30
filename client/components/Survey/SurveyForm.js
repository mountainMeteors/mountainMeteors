import React, {Component} from 'react';
import {FormGroup, FormControl, ControlLabel, Button, form} from 'react-bootstrap';
// import {reduxForm, handleSubmit} from 'redux-form'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
// action import
import { submitSurvey } from '../../actionCreators/surveyActions';


class SurveyForm extends React.Component {
  // static contextTypes = {
  //   router: PropTypes.object
  // }
  constructor() {
    super()
    this.state = {
      address: '',
      price: '',
      brs: '',
      amenity: '' }
  this.handleChange = this.handleChange.bind(this);  // When puting text inside the input field auto change
  this.onFormSubmit = this.onFormSubmit.bind(this); // When submit form, grab the form with something.
}


  handleChange(name, event) {
    // this.setState({address: event.target.value, price: event.target.price, brs: event.target.brs});
    const newState = {}
    newState[name] = event.target.value;
    this.setState(newState);
  }

  onFormSubmit(event) {
    event.preventDefault();
    let survey = {
      address: this.state.address,
      brs: this.state.brs,
      price: this.state.price,
      amenity: this.state.amenity
    }
    this.props.submitSurvey(survey)
      .then((response) => {
        console.log('send succesfully'. response );
      })
    // axios.post('/api/userSurvey', {
    //   address: this.state.address,
    //   brs: this.state.brs,
    //   price: this.state.price,
    //   amenity: this.state.amenity
    // }).then((response) => {
    //   console.log('send successfully')
    // });
    //
    // event.preventDefault(); // prevents refreshing
    // console.log(this.state.value);
    this.setState({address: '', brs: '', price: '', amenity: ''});
  }




  render() {
    // const { fields: { address, brs, price, amenity }, handleSubmit } = this.props;
    return (
      // <form onSubmit={ handleSubmit(this.onFormSubmit.bind(this)) }>
      <form onSubmit={ this.onFormSubmit }>
      <FormGroup>
        <ControlLabel> Hello World </ControlLabel>
        <div>
          <ControlLabel> I like the atomsphere and environment in this area? </ControlLabel>
          <FormControl
            type="text"
            value={this.state.address}

            placeholder="180 Trump Building"
            onChange={this.handleChange.bind(this, 'address')}
          />
        </div>
        <br />
        <div>
          <ControlLabel> I am looking for an apartment this big... </ControlLabel>
          <FormControl
            type="text"
            value={this.state.brs}

            placeholder="studio"
            onChange={this.handleChange.bind(this, 'brs')}
          />
        </div>
        <br />
        <div>
          <ControlLabel> I am looking for housing in this price range... </ControlLabel>
          <FormControl
            type="integer"
            value={this.state.price}

            placeholder="1000"
            onChange={this.handleChange.bind(this, 'price')}
          />
        </div>
        <br />
        <div>
          <ControlLabel> It would be nice to have these... </ControlLabel>
          <FormControl
            type="text"
            value={this.state.amenity}

            placeholder="Gym, Rooftop, Common Room"
            onChange={this.handleChange.bind(this, 'amenity')}
          />
        </div>
        <br />
        <Button type="submit" className="btn btn-primary"> Submit </Button>
        </FormGroup>
        </form>
    );
  }
};

function mapDispatchToProps(dispatch){
  return bindActionCreators( { submitSurvey }, dispatch)
}

export default connect(null, mapDispatchToProps)(SurveyForm)
// function validate(values) {
//   const errors = {}
//   if(!values.price) errors.price = 'Please enter a valid name'
//   if(!values.brs) errors.brs = 'Please enter a password'
//   if(!values.amenity) errors.amenity = 'Please enter a password'
//   if(!values.address) errors.address = 'Please enter a password'
//   return errors
// }
// ReactDOM.render(<FormExample />, mountNode);
// export default reduxForm({
//   form: 'SurveyForm',
//   fields: ['address', 'brs', 'price', 'amenity'],
//   validate
// }, null, {submitSurvey})(SurveyForm)
