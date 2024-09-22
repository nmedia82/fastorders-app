import React, { useEffect, useState } from "react";
import POSItems from "./POSItems"; // Ensure the correct path to POSItems
import "./pos.css"; // Ensure the CSS file is imported
import { POSCart } from "./Cart";
import { useSelector } from "react-redux";
import PayCart from "./Pay";
import { PaySummary } from "./Pay/PaySummary";
import { useDispatch } from "react-redux";
import {
  fetchRegisters,
  setOpenRegister,
} from "../../ReduxToolkit/Reducers/CartReducer";
import OpenRegisterPopup from "./OpenRegisterPopup";

export const POSHome = () => {
  const { isPaying, register_id } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchRegisters()); // Fetch the registers when the component mounts
    if (!register_id) {
      setIsRegisterPopupOpen(true);
    }
  }, [register_id, dispatch]);

  const handleRegisterSelection = (selectedRegister) => {
    dispatch(setOpenRegister(selectedRegister.id)); // Set the register ID
  };

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
      {isRegisterPopupOpen && (
        <OpenRegisterPopup
          handleRegisterSelection={handleRegisterSelection} // Pass the selection handler
        />
      )}
    </div>
  );
};

export default POSHome;
