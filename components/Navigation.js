import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      {/* Add more navigation links as needed */}
    </nav>
  );
}

export default Navigation;
