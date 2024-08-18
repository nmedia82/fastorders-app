import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Button, Input } from "reactstrap";
import {
  holdCart,
  clearCart,
  applyDiscount,
  payingCart,
} from "../../../ReduxToolkit/Reducers/CartReducer";

export const CartFooter = () => {
  const dispatch = useDispatch();
  const { total, discount } = useSelector((state) => state.cart);

  const handleHoldCart = () => {
    dispatch(holdCart());
  };

  const handlePayCart = () => {
    dispatch(payingCart());
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-total-section">
      <div className="cart-totals">
        <div className="cart-total-item">
          <span className="cart-total-label txt-primary">Subtotal:</span>
          <span className="cart-total-value">Rs. {total + discount}</span>
        </div>
        <div className="cart-total-item">
          <span className="cart-total-label txt-info">Discount:</span>
          <Input
            type="text"
            placeholder="Enter discount"
            className="discount-input"
            value={discount}
            onChange={(e) => dispatch(applyDiscount(e.target.value))}
          />
        </div>
        <div className="cart-total-item">
          <span className="cart-total-label">Total:</span>
          <span className="cart-total-value">Rs. {total}</span>
        </div>
        <div className="d-flex justify-content-between">
          <Button
            color="primary"
            className="btn-square w-100 mx-1"
            onClick={handleHoldCart}
          >
            Hold
          </Button>
          <Button
            color="success"
            className="btn-square w-100 mx-1"
            onClick={handlePayCart}
          >
            Pay
          </Button>
          <Button
            color="danger"
            className="btn-square w-100 mx-1"
            onClick={handleClearCart}
          >
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};
