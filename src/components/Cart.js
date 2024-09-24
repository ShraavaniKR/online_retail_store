import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems] = useState([
    { id: 1, name: 'Product 1', price: 100, quantity: 2 },
    { id: 2, name: 'Product 2', price: 200, quantity: 1 },
  ]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.map(item => (
        <div className="cart-item" key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
