import React from 'react';
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
export class Nav extends React.Component {
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  render() {
    return (
      <div>
      <AppBar
      title="Menu"
      />
      </div>
      );
    }        
  }
  Nav.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  };
  export default Nav;