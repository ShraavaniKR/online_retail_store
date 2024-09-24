import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Online Retail Store</h2>
      <ul>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
