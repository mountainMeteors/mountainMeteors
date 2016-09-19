import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './Header';



const Main = React.createClass({
  render() {
    const styles = {
      background: {
        backgroundColor: '#00bfff'
      },
      left: {
        backgroundColor: '#33ccff',
        height: 450,
        padding: 0,
        margin: 0,
        overflow: 'hidden'
      },
      right: {
        backgroundColor: '#1ac6ff',
        overflowY: 'auto',
        padding: 0,
        height: 450,
        paddingBottom: '50px'
      },
      row: {
        marginBottom: 0
      }
    }
    return (

      <Grid fluid={ true } style={styles.background}>
        <Row>
          <h1>
            <Link to="/">seekPad</Link>
              <Header/>
          </h1>
        </Row>
        <Row style={ styles.row }>

          { /* Map */ }
          <Col xs={12} sm={8} md={8} lg={9} style={ styles.left }>
            Bomb ass map
          </Col>

          { /* Options */ }
          <Col xs={12} sm={4} md={4} lg={3} style={ styles.right }>

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
