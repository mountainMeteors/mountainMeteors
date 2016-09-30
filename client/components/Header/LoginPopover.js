//NOT CURRENTLY USED, BUT SHOULD BE MODULARIZED

import React from 'react';
import { render } from 'react-dom';
import { OverlayTrigger, Button, Popover } from 'react-bootstrap';
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
            <form onSubmit={this.loginSubmit}>
              <input name="loginEmail" value={this.state.loginEmail} placeholder="e-mail" onChange={this.handleInputChange}></input>
              <input name="loginPassword" type="password" value={this.state.loginPassword} placeholder="password" onChange={this.handleInputChange}></input>
              <button type="submit">Login</button>
            </form>
          </Popover>
        }>
          <Button>Login</Button>
        </OverlayTrigger>
     </div>
   );
 }
};

export default LoginPopover;
