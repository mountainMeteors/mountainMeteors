import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import GoogMap from './Map';
import Header from './Header';
import Nav from './Nav'
import Listing from './Listing';
import Survey from './Survey';
import submitButton from './submitButton';

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
  render() {
    console.log('PROPS', this.props.user.surveys.length);
    return (
      <Grid fluid={ true }>
        <Row id="header">
          <h1>
          <Nav/>

            <Link to="/">seekPad</Link>
            {/* Wen's section - don't touch!
            <GridSearch/>
            <submitButton/>
            */}
              <Header/>
          </h1>
        </Row>


        {/* TODO: Make this ternary more modular -JS */}
        {this.props.user.surveys.length > 0 ?

          <Row id="bodyrow">

            {/* Map */}
            <Col xs={12} sm={8} md={8} lg={7.5} id="leftcol">
              <GoogMap markers={tempMarkers} origin={tempOrigin} />
            </Col>

            {/* Listings */}
            <Col xs={12} sm={4} md={4} lg={4.5} id="rightcol">
              <Listing {...this.props}/>
            </Col>

          </Row>

        :
          <Row id="bodyrow">
            <Survey />
          </Row>
        }
      </Grid>

    )
  }
});

export default Main;
