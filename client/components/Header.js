import React, { Component } from 'react';

import { Nav, Navbar, NavItem, Header, Brand } from 'react-bootstrap';
import { Link } from 'react-router';


class HeaderComponent extends Component {

  constructor(){
    super();
    this.state = {
      authenticated: false
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }


  login(){
   this.setState({authenticated: true});
  }


  logout(){
   this.setState({authenticated: false});
  }

 render(){
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
        <h1>
            <Link to="/">seekPad</Link>
        </h1>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem onClick={this.login}>Login</NavItem>
        <NavItem onClick={this.logout}>Logout</NavItem>
      </Nav>
    </Navbar>
  );
 }

}

export default HeaderComponent;
