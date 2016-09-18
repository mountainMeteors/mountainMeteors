import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import GoogMap from './Map';
// import { GoogleMapLoader } from "react-google-maps";

var markers = [{
  position: {
    lat: 25.0112183,
    lng: 121.52067570000001,
  },
  key: `Taiwan`,
  defaultAnimation: 2,
}]

const Main = React.createClass({
  render() {
    return (
      <Grid fluid={ true }>
        <Row id="header">
          <h1>
            <Link to="/">seekPad</Link>
          </h1>
        </Row>
        <Row className="row">

          { /* Map */ }
          <Col xs={12} sm={8} md={8} lg={9} id="leftcol">
            {/*Bomb ass map*/}
            <GoogMap markers={markers} />
          </Col>

          { /* Options */ }
          <Col xs={12} sm={4} md={4} lg={3} id="rightcol">
            {React.cloneElement({...this.props}.children, {...this.props})}
          </Col>
        </Row>
      </Grid>
    )
  }
});

// <div>
//   <h1>
//     <Link to="/">seekPad</Link>
//   </h1>
//   {React.cloneElement({...this.props}.children, {...this.props})}
// </div>

export default Main;
