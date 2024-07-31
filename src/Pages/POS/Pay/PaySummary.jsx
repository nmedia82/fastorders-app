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
  const { total, discount, amountPaid } = useSelector((state) => state.cart);

  const payableAmount = total - discount;
  const balance = amountPaid - payableAmount;

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
          <span className="cart-total-label">Total Payable:</span>
          <span className="cart-total-value">Rs. {payableAmount}</span>
        </div>
        <div className="cart-total-item">
          <span className="cart-total-label">Amount Paid:</span>
          <span className="cart-total-value">Rs. {amountPaid}</span>
        </div>
        <div className="cart-total-item">
          <span className="cart-total-label">Balance:</span>
          <span className="cart-total-value">Rs. {balance}</span>
        </div>
      </div>
    </div>
  );
};

export default PaySummary;
