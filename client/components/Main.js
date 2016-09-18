import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
// import GooglePlacesSuggest from 'react-google-map';

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
            Bomb ass map
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
