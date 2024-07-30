import React from "react";
import POSItems from "./POSItems"; // Ensure the correct path to POSItems
import "./pos.css"; // Ensure the CSS file is imported
import { POSCart } from "./Cart";
import { useSelector } from "react-redux";
import PayCart from "./Pay";
import { PaySummary } from "./Pay/PaySummary";

export const POSHome = () => {
  const { isPaying } = useSelector((state) => state.cart);
  return (
    <div className="page-body pos-container">
      {isPaying && <PaySummary />}
      {!isPaying && (
        <div className="product-area">
          <POSItems />
        </div>
      )}
      <div className="cart-area">
        {!isPaying && <POSCart />}
        {isPaying && <PayCart />}
      </div>
    </div>
  );
};

export default POSHome;
