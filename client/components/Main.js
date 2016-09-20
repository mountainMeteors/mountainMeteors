import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import GoogMap from './Map';
import Header from './Header';
import Nav from './Nav'
import Listing from './Listing';
import MainView from './MainView';
import Welcome from './Welcome';
import Survey from './Survey';
import submitButton from './submitButton';
import styles from '../styles/style.css';

import GridSearch from './GridSearch'
const tempMarkers = [{
  position: {
    lat: 40.7701008,
    lng: -73.9775276,
  },
  key: `Central Park`,
  defaultAnimation: 2,
}]

const tempOrigin = { lat: 40.7725833, lng: -73.9736894 }

const Main = React.createClass({

  componentWillMount() {
  },

  render() {
    console.log('PROPS', this.props);
    var displayModule;
    // if (loginUser) {
    if (!this.props.user.authenticated) {
      displayModule = <Welcome />
    } else if (this.props.user.surveys.length > 0) {
      displayModule = <MainView {...this.props}/>
    } else {
      displayModule = <GridSearch />
    }
    return (
      <Grid fluid={ true }>
        <Row id="header">
          <h1 className="title">
          <Nav/>

            {/* Wen's section - don't touch!
            <GridSearch/>
            <submitButton/>
            */}
          </h1>
          <Header />
        </Row>

        <Row className="bodyrow">
          {displayModule}
        </Row>

      </Grid>

    )
  }
});

export default Main;
