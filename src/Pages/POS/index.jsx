import React, { useEffect } from "react";
import POSItems from "./POSItems"; // Ensure the correct path to POSItems
import "./pos.css"; // Ensure the CSS file is imported
import { POSCart } from "./Cart";
import { useSelector } from "react-redux";
import PayCart from "./Pay";
import { PaySummary } from "./Pay/PaySummary";
import { useDispatch } from "react-redux";

export const POSHome = () => {
  const { isPaying } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchPr()); // Replace 12 with the actual vendor_id you want to use
  }, [dispatch]);
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
