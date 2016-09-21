import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Listing from './Listing';
import GoogMap from './Map';

const tempMarkers = [{
  position: {
    lat: 40.7701008,
    lng: -73.9775276,
  },
  key: `Central Park`,
  defaultAnimation: 2,
}];

const tempOrigin = { lat: 40.7725833, lng: -73.9736894 };

// const MainView = React.createClass({
class MainView extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <Col xs={12} sm={8} md={8} lg={7.5} id="leftcol">
          <GoogMap markers={tempMarkers} origin={tempOrigin} />
        </Col>

        <Col xs={12} sm={4} md={4} lg={4.5} id="rightcol">
          <Listing {...this.props} />
        </Col>
      </div>
    )
  }
};

export default MainView;
