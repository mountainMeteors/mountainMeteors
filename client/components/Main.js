import React from 'react';
import { Link } from 'react-router';
import Header from './Header';


const Main = React.createClass({
  render() {
    return (
      <div>
        <Header/>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
});

export default Main;
