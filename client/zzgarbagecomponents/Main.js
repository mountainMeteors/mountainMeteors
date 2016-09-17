import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
         <Link to="/">Reduxstagram</Link>
        </h1>
        {console.log(this.props)}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
