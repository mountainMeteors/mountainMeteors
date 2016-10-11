import React from 'react';
import { SplitButton, MenuItem } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import styles from '../../styles/react-bootstrap-table.min.css';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux';
// import {Table, Thead, Th, Tr} from 'reactable';

class Welcome extends React.Component {
  constructor() {
    super()
  }

  componentWillMount() {
    if (this.props.authenticated) browserHistory.push('/');
  }

  componentDidUpdate() {
    if (this.props.authenticated) browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <p>Welcome to seekPad!</p>
        <p>The days of a stressful apartment search are over. There are so many
        things to consider in finding the right home for you, and we'll help you
        cover all the bases.</p>
        <p>Come log in, and we'll get you started!</p>
        <img src="https://media2.popsugar-assets.com/files/2011/07/29/1/192/1922441/26997b08161a923a_ApartmentMoving32.jpg"/>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    listings: state.listings,
    authenticated: state.auth
  }
}

// export default Welcome;
export default connect(mapStateToProps, null)(Welcome)
