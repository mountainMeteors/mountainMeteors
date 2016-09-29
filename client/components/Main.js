//React
import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';

//Components
import Header from './Header/Header';


//CSS
// import css from '../styles/style.css';

class Main extends React.Component{
  constructor(){
    super();
  }

  componentDidUpdate() {
    console.log('Main updated');
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

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  }
}

export default connect(mapStateToProps, null)(Main);
// export default Main;
