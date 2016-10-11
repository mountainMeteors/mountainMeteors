//NOT CURRENTLY USED, BUT SHOULD BE MODULARIZED

import React from 'react';
import { render } from 'react-dom';
import {  Form, Col, FieldGroup, FormGroup, FormControl, ControlLabel, OverlayTrigger, Button, Popover } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { signUpUser } from '../../actionCreators/accountActions'


class SignUpPopover extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      signUpEmail: '',
      signUpPassword: '',
    }


    this.handleInputChange = this.props.handleInputChange.bind(this);
    this.signUpSubmit = this.signUpSubmit.bind(this);
  }

  signUpSubmit(e) {
    e.preventDefault();
    this.props.signUpUser({email: this.state.signUpEmail, password: this.state.signUpPassword});
  }

  render() {
    return (
      <div>
        <OverlayTrigger trigger={["focus", "click"]} placement="bottom" overlay={
          <Popover id="popover-positioned-bottom">
            <Form onSubmit={this.signUpSubmit}>
              <FormGroup controlId="signUpEmail">
                <FormControl name="signUpEmail" value={this.state.signUpEmail} placeholder="e-mail" onChange={this.handleInputChange}/>
              </FormGroup>
              <FormGroup controlId="signUpPassword">
              <FormControl name="signUpPassword" type="password" value={this.state.signUpPassword} placeholder="password" onChange={this.handleInputChange}/>
              </FormGroup>

              <Button className="welcomeButton" bsStyle="primary" bsSize="small" type="submit">
                Sign Up
              </Button>

            </Form>
          </Popover>
        }>

          <Button>Sign Up</Button>

        </OverlayTrigger>
     </div>
   );
 }
};

export default SignUpPopover;
