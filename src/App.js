/*import './App.css';
import Product from './components/Product'
import Category from './components/Category'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My First React App!</h1>
        <p>This is a react component</p>
      </header>
      <Product />
      <Product />
      <Product />
      <Category title>Electronics</Category>
      <Category title>Furniture</Category>

    </div>
  );
}

export default App;
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AdminDashboard from './components/AdminDashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

