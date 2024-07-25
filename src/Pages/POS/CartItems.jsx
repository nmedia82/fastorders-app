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
          <span className="cart-item-name">
            {item.name}
            <span className="cart-item-price">x Rs. 50</span>
          </span>
          <span className="cart-item-quantity">
            <i className="icofont icofont-plus-circle"></i>
            {item.quantity}
            <i className="icofont icofont-minus-circle"></i>
          </span>
          <span className="cart-item-total">${item.price}</span>
        </div>
      ))}
    </div>
  );
}

export default CartItems;
