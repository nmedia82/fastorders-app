import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateQuantity,
  removeItem,
} from "../../../ReduxToolkit/Reducers/CartReducer";
import POSTouchSpin from "./Touchspin";

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
            <div className="rounded-touchspin">
              <POSTouchSpin
                color="dark"
                arrowIcon={true}
                btnClass={`touchspin-dark`}
                onDecrement={() => handleDecreaseQuantity(item.id)}
                onIncrement={() => handleIncreaseQuantity(item.id)}
                item={item}
              />
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
