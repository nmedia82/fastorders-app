import React from "react";
import { Input, Button } from "reactstrap";
import CartItems from "./CartItems";
import "./pos.css"; // Ensure the CSS file is imported

export const POSCart = () => {
  return (
    <div className="cart-section border-3">
      <div className="barcode-section">
        <Input type="text" placeholder="Scan Barcode" />
      </div>
      <div className="line-items-section">
        <CartItems />
      </div>
      <div className="cart-total-section">
        <div className="cart-totals">
          <div className="cart-total-item">
            <span className="cart-total-label txt-primary">Subtotal:</span>
            <span className="cart-total-value">Rs. 2500</span>
          </div>
          <div className="cart-total-item">
            <span className="cart-total-label txt-info">Discount:</span>
            <Input
              type="text"
              placeholder="Enter discount"
              className="discount-input"
            />
          </div>
          <div className="cart-total-item">
            <span className="cart-total-label">Total:</span>
            <span className="cart-total-value">Rs. 2000</span>
          </div>
          <div className="d-flex justify-content-between">
            <Button color="primary" className="btn-square">
              Hold
            </Button>
            <Button color="success" className="btn-square">
              Pay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POSCart;
