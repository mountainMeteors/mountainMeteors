import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import GoogMap from './Map';
import Header from './Header';
import Nav from './Nav'

var tempMarkers = [{
  position: {
    lat: 40.7701008,
    lng: -73.9775276,
  },
  key: `Central Park`,
  defaultAnimation: 2,
}]

var tempOrigin = { lat: 40.7725833, lng: -73.9736894 }

const Main = React.createClass({
  render() {
    return (
      <Grid fluid={ true }>
        <Row id="header">
          <h1>
          <Nav/>
            <Link to="/">seekPad</Link>
              <Header/>
          </h1>
        </Row>
        <Row id="bodyrow">

          { /* Map */ }
          <Col xs={12} sm={8} md={8} lg={7.5} id="leftcol">
            {/*Bomb ass map*/}
            <GoogMap markers={tempMarkers} origin={tempOrigin} />
          </Col>

          { /* Options */ }
          <Col xs={12} sm={4} md={4} lg={4.5} id="rightcol">
            {React.cloneElement({...this.props}.children, {...this.props})}
          </Col>
        </Row>
      </Grid>
    )
  }
});

export default Main;
