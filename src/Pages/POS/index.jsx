import React from "react";
import POSItems from "./POSItems"; // Ensure the correct path to POSItems
import "./pos.css"; // Ensure the CSS file is imported
import { POSCart } from "./Cart/Cart";
import { useSelector } from "react-redux";
import PayCart from "./Pay";

export const POSHome = () => {
  const { isPaying } = useSelector((state) => state.cart);
  return (
    <div className="page-body pos-container">
      <div className="product-area">
        {!isPaying && <POSItems />}
        {isPaying && <PayCart />}
      </div>
      <div className="cart-area">
        <POSCart />
      </div>
    </div>
  );
};

export default POSHome;
