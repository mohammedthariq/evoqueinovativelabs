import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {/* Add more product details as needed */}
      <button>View More Details</button>
    </div>
  );
};

export default ProductCard;
