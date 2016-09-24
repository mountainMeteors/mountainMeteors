import React from 'react';
import { render } from 'react-dom'
import { Form, FormControl, FormGroup, Col, Button, ControlLabel } from 'react-bootstrap'
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LoginForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {email: '', password: ''};

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    console.log("THIS", this)
  }

  onEmailChange(event){
    this.setState({ email: event.target.value });
    console.log("EMAIL", event.target.value)
  }

  onPasswordChange(event){
    this.setState({ password: event.target.value });
  }

  onFormSubmit(event){
    event.preventDefault();
    console.log("IN FORM SUBMIT", this.state.password)
    console.log('props', this.props);
    this.props.loginUser();

    axios.post('/api/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(function(response){
      console.log(response);
    })
    .catch(function (error){
      console.log(error);
    })
  }



  render(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>

            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl type="email" placeholder="Email" onChange={this.onEmailChange}/>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" onChange={this.onPasswordChange}/>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
                  Sign in
                </Button>
              </Col>
            </FormGroup>
        </form>
      </div>
    )
  }
}





export default LoginForm;
// export default connect(null, mapDispatchToProps)(LoginForm);
