//React
import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
//Components
import Header from './Header/Header';


//CSS
// import css from '../styles/style.css';

class Main extends React.Component{
  constructor(){
    super();
  }

  componentDidMount() {
    console.log('props', this.props);
  }

  render() {
    return (
      <div>

        <Grid fluid={ true }>
          <Row id="header">
            <Header />
          </Row>
          <Row className="bodyrow">
            {React.cloneElement({...this.props}.children, {...this.props})}
          </Row>

        </Grid>

      </div>
    )
  }
};


export default Main;
