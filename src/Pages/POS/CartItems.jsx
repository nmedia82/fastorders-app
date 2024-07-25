import React from "react";
import "./pos.css"; // Ensure the CSS file is imported

const cartItems = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  name: `Item ${index + 1}`,
  quantity: Math.floor(Math.random() * 10) + 1,
  price: (Math.random() * 100).toFixed(2),
}));

function CartItems() {
  return (
    <div className="cart-items">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <p className="cart-item-name">{item.name}</p>
          <p className="cart-item-quantity">Qty: {item.quantity}</p>
          <p className="cart-item-price">${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CartItems;
