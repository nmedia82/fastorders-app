import React from "react";
import { Input } from "reactstrap";
import POSItems from "./POSItems"; // Ensure the correct path to POSItems
import CartItems from "./CartItems"; // Ensure the correct path to CartItems
import "./pos.css"; // Ensure the CSS file is imported

export const POSHome = () => {
  return (
    <div className="page-body">
      <div className="pos-container">
        <div className="product-area">
          <POSItems />
        </div>
        <div className="cart-area">
          <div className="cart-section">
            <div className="barcode-section">
              <Input type="text" placeholder="Scan Barcode" />
            </div>
            <div className="line-items-section">
              <CartItems />
            </div>
            <div className="cart-total-section">
              <p>Cart Total and Discounts will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POSHome;
