//NOT CURRENTLY USED, BUT SHOULD BE MODULARIZED

import React from 'react';
import { render } from 'react-dom';
import { OverlayTrigger, Button, Popover } from 'react-bootstrap';
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
        <OverlayTrigger trigger="click" placement="bottom" overlay={
          <Popover id="popover-positioned-bottom">
            <form onSubmit={this.signUpSubmit}>
              <input name="signUpEmail" value={this.state.signUpEmail} placeholder="e-mail" onChange={this.handleInputChange}></input>
              <input name="signUpPassword" type="password" value={this.state.signUpPassword} placeholder="password" onChange={this.handleInputChange}></input>
              <button type="submit">Signup</button>
            </form>
          </Popover>
        }>
          <Button>Signup</Button>
        </OverlayTrigger>
     </div>
   );
 }
};

export default SignUpPopover;
