import React from "react";
import POSItems from "./POSItems"; // Ensure the correct path to POSItems
import "./pos.css"; // Ensure the CSS file is imported
import { POSCart } from "./Cart";
// import PayCart from "./Pay";

export const POSHome = () => {
  return (
    <div className="page-body pos-container">
      <div className="product-area">{/* <PayCart payableAmount={250} /> */}</div>
      <div className="cart-area">
        <POSCart />
      </div>
    </div>
  );
};

export default POSHome;
