//React
import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

//Components
import Header from './Header/Header';

//Actions
import { getListings } from '../actionCreators/listingActions.js';
import { getPrefs } from '../actionCreators/accountActions.js';

//CSS
// import css from '../styles/style.css';

class Main extends React.Component{
  constructor(){
    super();
  }

  componentDidMount() {
    console.log('main mounted props', this.props);
    console.log('truthiness', !!this.props.listings && !!this.props.userPrefs);
    this.props.getPrefs();
    this.props.getListings();
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
    hasUserInfo: state.hasUserInfo.hasListings && state.hasUserInfo.hasPrefs
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getListings, getPrefs}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
// export default Main;
