import React, { useEffect } from "react";
import POSItems from "./POSItems"; // Ensure the correct path to POSItems
import "./pos.css"; // Ensure the CSS file is imported
import { POSCart } from "./Cart";
import { useSelector } from "react-redux";
import PayCart from "./Pay";
import { PaySummary } from "./Pay/PaySummary";
import { useDispatch } from "react-redux";
import { fetchRegisters } from "../../ReduxToolkit/Reducers/CartReducer";

export const POSHome = () => {
  const { isPaying } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRegisters());
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
