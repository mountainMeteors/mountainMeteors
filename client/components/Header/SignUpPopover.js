//NOT CURRENTLY USED, BUT SHOULD BE MODULARIZED

import React from 'react';
import { findDOMNode, render } from 'react-dom';
import {  Form, Col, FieldGroup, FormGroup, FormControl, ControlLabel, Overlay, OverlayTrigger, Button, Popover } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { signUpUser } from '../../actionCreators/accountActions'


class SignUpPopover extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      signUpEmail: '',
      signUpPassword: '',
      signupError: ''
    }


    this.handleInputChange = this.props.handleInputChange.bind(this);
    this.signUpSubmit = this.signUpSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  signUpSubmit(e) {
    e.preventDefault();
    this.props.signUpUser({email: this.state.signUpEmail, password: this.state.signUpPassword});
  }

  toggle() {
    this.setState({ showPopover: !this.state.showPopover })
  }

  render() {
    const sharedProps = {
      show: this.state.showPopover,
      container: this,
      target: () => findDOMNode(this.refs.target)
    };


    return (
      <div>
        <Button ref="target" onClick={this.toggle}>Sign Up</Button>
        <Overlay {...sharedProps} placement="bottom">
          <Popover id="popover-positioned-bottom" style={{'width': '250px'}}>
            <Form onSubmit={this.signUpSubmit}>
              <FormGroup controlId="signUpEmail">
                <FormControl name="signUpEmail" value={this.state.signUpEmail} placeholder="e-mail" onChange={this.handleInputChange}/>
              </FormGroup>
              <FormGroup controlId="signUpPassword">
              <FormControl name="signUpPassword" type="password" value={this.state.signUpPassword} placeholder="password" onChange={this.handleInputChange}/>
              </FormGroup>
              <div className="popover-error">
                {this.state.signupError}
              </div>
              <Button className="welcomeButton" bsStyle="primary" bsSize="small" type="submit">
                Sign Up
              </Button>
            </Form>
          </Popover>
        </Overlay>
     </div>
   );
 }
};

export default SignUpPopover;
