import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => (
  <div>
    <ul>
      <li>
        <Link to='/simple/states'>with states</Link>
        </li>
      <li>
        <Link to='/simple/redux'>with Redux</Link>
        </li>
      <h1>Golden Acorn is life!🌰</h1>
    </ul>
  </div>
);

export default NavBar;