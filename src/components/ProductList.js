/*import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className='product'> Product </div>
  );
}

export default Product;
*/

import React, { useState } from 'react';
import './ProductList.css';

const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 100, seller: 'Seller A' },
    { id: 2, name: 'Product 2', price: 200, seller: 'Seller B' },
    { id: 3, name: 'Product 3', price: 150, seller: 'Seller A' },
  ]);

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product" key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Seller: {product.seller}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
