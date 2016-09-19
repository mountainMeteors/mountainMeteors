import React from 'react';
var {Link, IndexLink} = require('react-router');

const Nav = () => {
  return (
    <div>

      // <Link to="/about" className="about">Get Started</Link>
      // <Link to="/examples" className="listings">page 2</Link>

<nav class="navbar navbar-light bg-faded">
  <ul class="nav navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Features</a>
    </li>
     </ul>
</nav>

      
    </div>
  );
};

module.exports = Nav;


