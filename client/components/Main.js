//React
import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

//Components
import Header from './Header/Header';

//Actions
import { getListings } from '../actionCreators/listingActions.js';
import { getPrefs, logoutUser } from '../actionCreators/accountActions.js';

//CSS
// import css from '../styles/style.css';

class Main extends React.Component{
  constructor(){
    super();
  }

  componentDidMount() {
    this.props.getPrefs();
    this.props.getListings();
  }

  render() {
    return (
      <div className="fh no-scroll">
        <Grid fluid={ true } className="fh no-padding">
          <Row id="header">
            <Header />
          </Row>
          <Row className="bodyrow fh">
            {
              this.props.hasUserInfo ?
              React.cloneElement({...this.props}.children, {...this.props}) :
              'Loading...'
            }
          </Row>
        </Grid>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth,
    listings: state.listings,
    userPrefs: state.userPrefs,
    hasUserInfo: state.hasUserInfo.hasListings && state.hasUserInfo.hasPrefs,
    demoMode: state.demo
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getListings, getPrefs, logoutUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
// export default Main;
