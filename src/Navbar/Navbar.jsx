import React, { useEffect, useState } from 'react';
import './nav.css'; // Create a CSS file for styling
import { Link } from 'react-router-dom';

function Navbar({handleCart, handleLogout, authToken}) {
    
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Foodie Hub</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          {!authToken && <li><Link to="/signup">SignUp</Link></li>}
          {!authToken && <li><Link to="/login">Login</Link></li>}
          {authToken && <li><Link to="/cart">Cart</Link></li>}
          {authToken && <li onClick={handleLogout}>Logout</li>}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
