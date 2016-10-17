import React from 'react';
import { SplitButton, MenuItem } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux';
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
    return (
      <div>
        <video id="background-video" poster="https://dl.dropboxusercontent.com/s/nzmafm1x7d5gh2r/GettyImages-597661487.jpg?dl=0 " autoPlay loop>
          <source src="http://dl.dropboxusercontent.com/s/gamzhby2es6n5zr/FlatironVidA.mp4?dl=0" type="video/mp4" />
        </video>
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
