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

export const PaySummary = () => {
  const dispatch = useDispatch();
  const { total, discount } = useSelector((state) => state.cart);

  return (
    <div className="pay-summary-section">
      <h2>Payment Summary</h2>
      <div className="cart-totals mt-3">
        <div className="cart-total-item">
          <span className="cart-total-label txt-primary">Subtotal:</span>
          <span className="cart-total-value">Rs. {total + discount}</span>
        </div>
        <div className="cart-total-item">
          <span className="cart-total-label txt-info">Discount:</span>
          <span className="cart-total-value">Rs. -{discount}</span>
        </div>
        <div className="cart-total-item">
          <span className="cart-total-label">Total:</span>
          <span className="cart-total-value">Rs. {total}</span>
        </div>
      </div>
    </div>
  );
};
