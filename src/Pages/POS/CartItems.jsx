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
        <div key={item.id} className="cart-item bg-success">
          <span className="cart-item-name txt-dark">
            {item.name}
            <span className="cart-item-price">x Rs. 50</span>
          </span>
          <span className="cart-item-quantity-container txt-dark">
            <i role="button" className="icofont icofont-plus-circle"></i>
            <span className="cart-item-quantity">{item.quantity}</span>
            <i role="button" className="icofont icofont-minus-circle"></i>
          </span>
          <span className="cart-item-total txt-dark f-w-600">
            ${item.price}
          </span>
        </div>
      ))}
    </div>
  );
}

export default CartItems;
