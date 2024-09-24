import React from 'react';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <div>
          <label>Full Name:</label>
          <input type="text" placeholder="Enter full name" />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" placeholder="Enter your address" />
        </div>
        <button>Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
