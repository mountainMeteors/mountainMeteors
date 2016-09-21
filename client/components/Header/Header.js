import React from 'react';

// import { Nav, Navbar, NavItem, Header, Brand } from 'react-bootstrap';
import { Link } from 'react-router';
import styles from '../../styles/style.css';


class Header extends React.Component {

  constructor(){
    super();
    this.state = {
      authenticated: true
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

  renderLinks(){
    if(this.props.authenticated){
      return <li className="nav-item">
        <Link className="nav-link" to="/signout">Sign Out</Link>
      </li>
    } else {
      return [
        <li className="nav-item" key={1}>
        <Link className="nav-link" to="/signin">Sign In</Link>
      </li>,
      <li className="nav-item" key={2}>
        <Link className="nav-link" to="/signup">Sign Up</Link>
      </li>
      ];
    }
  }


 render(){
  return (
    <nav className="navbar navbar-light">
      <ul className="nav navbar-nav">
        {this.renderLinks()}
      </ul>
      <h1 className="title">
        <Link to="/">seekPad</Link>
      </h1>
    </nav>
  );
 }

}

// <Navbar>
//   <Navbar.Header>
//     <Navbar.Brand>
//     <h1>
//         <Link to="/">seekPad</Link>
//     </h1>
//     </Navbar.Brand>
//   </Navbar.Header>
//   <Nav>
//     <NavItem onClick={this.login}>Login</NavItem>
//     <NavItem onClick={this.logout}>Logout</NavItem>
//   </Nav>
// </Navbar>

export default Header;
