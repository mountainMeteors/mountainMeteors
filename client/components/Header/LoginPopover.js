//NOT CURRENTLY USED, BUT SHOULD BE MODULARIZED

import React from 'react';
import { render } from 'react-dom';
import { Form, Col, FieldGroup, FormGroup, FormControl, ControlLabel, OverlayTrigger, Button, Popover } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { signUpUser } from '../../actionCreators/accountActions'


class LoginPopover extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      loginEmail: '',
      loginPassword: '',
    }

    this.handleInputChange = this.props.handleInputChange.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
  }

  loginSubmit(e) {
    e.preventDefault();
    this.props.loginUser({email: this.state.loginEmail, password: this.state.loginPassword, id: this.props.user_id});
  }

  render() {
    return (
      <div>
        <OverlayTrigger trigger="click" placement="bottom" overlay={
          <Popover id="popover-positioned-bottom">
            <Form onSubmit={this.loginSubmit}>
              <FormGroup controlId="loginEmail">
                <FormControl name="loginEmail" type="text" value={this.state.loginEmail} placeholder="e-mail" onChange={this.handleInputChange}/>
              </FormGroup>
              <FormGroup controlId="loginPassword">
                <FormControl name="loginPassword" type="password" value={this.state.loginPassword} placeholder="password" onChange={this.handleInputChange}/>
              </FormGroup>
            <Col smOffset={8} sm={1}>
              <Button bsStyle="primary" bsSize="small" type="submit">
              Login
              </Button>
            </Col>
            </Form>
          </Popover>
        }>
          <Button>Login</Button>
        </OverlayTrigger>
     </div>
   );
 }
};

export default LoginPopover;
