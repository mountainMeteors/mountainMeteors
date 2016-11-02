import React, { Component } from 'react';
import { SplitButton, MenuItem, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Team from '../../data/team';
// import Images from '../../assets/team';
// import {Table, Thead, Th, Tr} from 'reactable';

class Welcome extends React.Component {
  constructor() {
    super()
  }

  componentWillMount() {
    if (this.props.authenticated) browserHistory.push('/');
  }

  componentDidUpdate() {
    if (this.props.authenticated) browserHistory.push('/');
  }

  render() {
    const person = Team;
    const LinkedIn = 'assets/icons/li.png';
    const GitHub = 'assets/icons/gh.png';
    const Email = 'assets/icons/email.png';

    const devList = person.map(function(item, index){
        console.log("#####item#####", item)
        return (
          <Col xs={6} md={3} key={index} padding={20}>
            <image src= {item.img} className="profile"/>
            <h2 className="devNames"> {item.name} </h2>
            <h3 className="devTitles"> {item.role} </h3>

            <div className="icons_container">
              <a href={item.links.GitHub}><image src= {GitHub} className='icons' /></a>
              <a href={item.links.LinkedIn}><image src= {LinkedIn} className='icons' /></a>
              <a href={item.links.Email}><image src= {Email} className='icons' /></a>
            </div>
          </Col>
        )
      })

    return (
      <div className ="row" style={{padding:10}}>
        {devList}
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    listings: state.listings,
    authenticated: state.auth
  }
}

// export default Welcome;
export default connect(mapStateToProps, null)(Welcome)
