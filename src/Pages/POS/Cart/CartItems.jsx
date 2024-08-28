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
      {cartItems.length === 0 ? (
        <div className="empty-cart waving-cart">
          <span>Your cart is empty</span>
        </div>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="cart-item d-flex align-items-center justify-content-start"
          >
            {/* Title */}
            <div className="cart-item-name flex-grow-1">
              <span>{item.name}</span>
            </div>
            {/* Quantity */}
            <div className="cart-item-quantity-container text-center d-flex justify-content-center flex-grow-1">
              <i
                role="button"
                className="icofont icofont-minus-circle"
                onClick={() => handleDecreaseQuantity(item.id)}
              ></i>
              <span className="cart-item-quantity mx-2">{item.quantity}</span>
              <i
                role="button"
                className="icofont icofont-plus-circle"
                onClick={() => handleIncreaseQuantity(item.id)}
              ></i>
            </div>
            {/* Price */}
            <div className="text-center flex-grow-1 d-flex flex-column align-items-center">
              <span>{`${item.price}x${item.quantity}`}</span>
              <span className="cart-item-total">
                Rs. {(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartItems;
