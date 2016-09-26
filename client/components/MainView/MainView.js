import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Listing from './Listing';
import {connect} from 'react-redux';
// import GoogMap from './Map';

// const MainView = React.createClass({
class MainView extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <Col xs={12} sm={8} md={8} lg={7.5} id="leftcol">
        </Col>

        <Col xs={12} sm={4} md={4} lg={4.5} id="rightcol">
          <Listing {...this.props} />
        </Col>
      </div>
    )
  }
};
  // <GoogMap markers={tempMarkers} origin={tempOrigin} />

  function mapStateToProps(state) {
    return {
      listings: state.listings
    }
  }

  // function mapDispatchToProps(dispatch) {
  //   return {
  //     plsSignInUser: (user) => {
  //       dispatch(signInUser(user))
  //     }
  //   }
  // }

  // export default LoginForm;
  export default connect(mapStateToProps, null)(MainView);


// export default MainView;
