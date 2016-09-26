import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { render } from 'react-dom';
import LoginForm from './LoginForm.js';
import { loginUser } from './actionCreators/accountActions';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <LoginForm />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginUser }, dispatch);
}

// render(<App />, document.getElementById('root'))

// export default connect(null, mapDispatchToProps)(App);
export default Main
