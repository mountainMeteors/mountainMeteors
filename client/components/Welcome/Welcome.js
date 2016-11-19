import React, { Component } from 'react';
import { SplitButton, MenuItem, Col, Glyphicon } from 'react-bootstrap';
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

    const devList = Team.map(function(item, index){
        return (
          <Col xs={6} md={3} key={index}>
            <img src= {item.img} className='profile' />
            <h2 className='devnames'> {item.name} </h2>
            <h3 className='devtitles'> {item.role} </h3>

            <div className='icons_container'>
              <a href={item.links.GitHub}><img src='assets/icons/gh.png' className='icons' /></a>
              <a href={item.links.LinkedIn}><img src='assets/icons/li.png' className='icons' /></a>
              <a href={item.links.Email}><img src='assets/icons/email.png'className='icons' /></a>
            </div>
          </Col>
        )
      })

    return (
      <div>
        <video id="background-video" autoPlay loop>
          <source src="https://dl.dropboxusercontent.com/s/i0vkqah6o5ci920/525214755_Astor24.mp4?dl=0" type="video/mp4" />
        </video>
        <div id='devcontainer'>
          <div className="row" style={{padding:10}}>
            {devList}
          </div>
        </div>
        <a data-scroll href="#devcontainer">
          <div className='devlink'>
            <div className='devicon'>
              <Glyphicon glyph="user" />
            </div>
          </div>
        </a>
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
