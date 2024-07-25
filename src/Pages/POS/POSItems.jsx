import React from "react";
import "./pos.css"; // Ensure the CSS file is imported

const products = Array.from({ length: 25 }, (_, index) => ({
  id: index + 1,
  title: `Product ${index + 1}`,
  price: (10 + index).toFixed(2),
  image: `https://placehold.co/400`, // Replace with actual image paths
}));

function POSItems() {
  return (
    <div className="product-tiles">
      {products.map((product) => (
        <div key={product.id} className="product-tile">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <div className="product-details">
            <p className="product-title">{product.title}</p>
            <p className="product-price">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default POSItems;
