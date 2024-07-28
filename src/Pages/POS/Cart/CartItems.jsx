import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateQuantity,
  removeItem,
} from "../../../ReduxToolkit/Reducers/CartReducer";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  const handleDecreaseQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    } else if (item && item.quantity === 1) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="cart-items">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <span className="cart-item-name txt-dark">
            {item.name}
            <span className="cart-item-price">x Rs. {item.price}</span>
          </span>
          <span className="cart-item-quantity-container txt-dark">
            <i
              role="button"
              className="icofont icofont-plus-circle"
              onClick={() => handleIncreaseQuantity(item.id)}
            ></i>
            <span className="cart-item-quantity">{item.quantity}</span>
            <i
              role="button"
              className="icofont icofont-minus-circle"
              onClick={() => handleDecreaseQuantity(item.id)}
            ></i>
          </span>
          <span className="cart-item-total txt-dark f-w-600">
            Rs. {(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
