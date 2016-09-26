//React
import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';

//Components
import Header from './Header/Header';
import MainView from './MainView/MainView';
// import Welcome from './Welcome/Welcome';
// import Add from './Add/Add';
// import Survey from './Survey/Survey';
// import submitButton from './Survey/submitButton';
// import GridSearch from './Survey/GridSearch';
// import DropdownMenu from './Survey/DropdownMenu';

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
      <Grid fluid={ true }>
        <Row id="header">
          <Header />
        </Row>
        <Row className="bodyrow">
          <MainView />
        </Row>

      </Grid>

    )
  }
};

  // {React.cloneElement({...this.props}.children, {...this.props})}
export default Main;
