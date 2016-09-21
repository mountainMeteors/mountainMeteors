import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import { Modal, Form, Input, Fieldset, FormControl, FormGroup, ControlLabel, Button, div, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap';
// import {TextField, RaisedButton, FlatButton, Dialog, MuiTheme} from 'material-ui'
// import injectTapEventPlugin from 'react-tap-event-plugin';
// import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import Appbar from 'material-ui/AppBar';


// injectTapEventPlugin();

// import from 'material-ui/lib/text-field';
// import from 'material-ui/lib/raised-button';
// import  from 'material-ui/lib/flat-button';
// import  from 'material-ui/lib/dialog';

class LoginForm extends Component {

  constructor(props){
    super(props);

    this.state = {email: '', password: '', open: false};

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onEmailChange(event){
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event){
    this.setState({ password: event.target.value });
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.loginUser(this.state.email, this.state.password);
    this.setState({ email: '', password: ''});
    this.handleClose();
  }

  handleOpen(){
    this.setState({open: true});
  }

  handleClose(){
    this.setState({open: false});
  }

  render(){
    const actions = [
    <Button
      label="Cancel"
      required={true}
      onClick= {this.handleClose} />,
    <Button
      type="submit"
      label="Submit"
      required={true}
      onClick={this.onFormSubmit} />
  ];

    return (
      <div>
        <Button className='nav-button' label="Log In" onClick={this.handleOpen} />

        <Input
          type='Log In'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose} />
            <form onSubmit={this.onFormSubmit}>
              <Input
                type='email'
                hintText='Enter your email address'
                floatingLabelText='Email Address'
                value={this.state.email}
                onChange={this.onEmailChange} />
              <br/>
              <br/>
              <Input
                type='password'
                hintText='Enter your password'
                floatingLabelText='Password'
                value={this.state.password}
                onChange={this.onPasswordChange} />
            <br/>
            </form>

      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);
