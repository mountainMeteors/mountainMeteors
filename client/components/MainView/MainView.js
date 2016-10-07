import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Listing from './Listing';
import {connect} from 'react-redux';

import GoogMap from './Map';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { getListings } from '../../actionCreators/listingActions.js';
import { getPrefs } from '../../actionCreators/accountActions.js';
import AddListingsModal from '../AddListingsModal';
import { browserHistory } from 'react-router';

const tempMarkers = [{
  position: {
    lat: 40.7701008,
    lng: -73.9775276,
  },
  key: `Central Park`,
  defaultAnimation: 2,
}];

const tempOrigin = { lat: 40.7725833, lng: -73.9736894 };

class MainView extends React.Component {
  constructor(){
    super();
  }

  componentWillMount() {
    if (!this.props.authenticated) browserHistory.push('/welcome');
    this.props.getPrefs();
    this.props.getListings();
  }

  // componentWillReceiveProps(props) {
  //   this.setState({
  //     markers: this.props.listings.map(listing => {
  //       return {
  //         position: {
  //           lat: listing.lat,
  //           lng: listing.lng
  //         },
  //         content: 'hello',
  //         showInfo: false
  //       }
  //     }
  //   });
  // }

  componentDidUpdate() {
    console.log('main state updated', this.props, this.state);
    if (!this.props.authenticated) browserHistory.push('/welcome');
    // this.props.getListings(this.props.user_id);
  }

  render() {
    return (
      <div>
        <Col xs={12} sm={8} md={8} lg={7.5} id="leftcol">
          <GoogMap listings={this.props.listings} origin={tempOrigin} />
        </Col>

        <Col xs={12} sm={4} md={4} lg={4.5} id="rightcol">
          <AddListingsModal modalType="add" scraper = {this.props.scraper} />
          <Listing listings={this.props.listings} prefs={this.props.userPrefs} />
        </Col>
      </div>
    )
  }
};


function mapStateToProps(state) {
  return {
    listings: state.listings,
    authenticated: state.auth,
    userPrefs: state.userPrefs
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getListings, getPrefs}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
