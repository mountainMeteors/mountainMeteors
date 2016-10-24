import React, { Component } from 'react';
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
  constructor(props){
    super(props);
    console.log('mv props', props);
  }

  componentWillMount() {
    // console.log('mv props', this.props);
    // console.log('PREFS LENGTH', Object.keys(this.props.userPrefs).length);
    // console.log('checking in mv for auth');
    // console.log('checking for survey', Object.keys(this.props.userPrefs).length);
    if (!this.props.authenticated) browserHistory.push('/welcome');
  }

  componentDidMount() {
    console.log('mv mounted props', this.props);
    // console.log('PREFS LENGTH', Object.keys(this.props.userPrefs).length);
    // if (!this.props.authenticated) browserHistory.push('/welcome');
    // else if (!Object.keys(this.props.userPrefs).length) browserHistory.push('/survey');
  }

  componentWillReceiveProps(props) {
    console.log('mv received props', props);
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
    // console.log('main state updated', this.props, this.state);
    //TODO (global throughout project): This redirect should really probably happen in a reduce to keep it WET across all protected pages
    if (!this.props.authenticated) browserHistory.push('/welcome');
  }

  render() {
    return (
      <div className="fh flex">
        <div id="leftcol">
          <GoogMap listings={this.props.listings} origin={tempOrigin} className="fh" />
        </div>

        <div id="rightcol">
          <Listing listings={this.props.listings} prefs={this.props.userPrefs} className="fh" />
        </div>
      </div>
    )
  }
};


function mapStateToProps(state) {
  return {
    // listings: state.listings,
    authenticated: state.auth,
    // userPrefs: state.userPrefs
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getListings, getPrefs}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
