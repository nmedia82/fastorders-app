import React, { useState } from "react";
import "./paycart.css"; // Ensure the CSS file is imported
import { useSelector } from "react-redux";

const PayCart = () => {
  const { total, discount } = useSelector((state) => state.cart);
  const [amount, setAmount] = useState("");

  const payableAmount = parseFloat(total).toFixed;

  const handleNumberClick = (number) => {
    setAmount((prevAmount) => parseFloat(prevAmount) + parseFloat(number));
  };

  const handleClear = () => {
    setAmount("");
  };

  const handleQuickPayment = (quickAmount) => {
    setAmount((prevAmount) =>
      prevAmount
        ? parseFloat(prevAmount) + parseFloat(quickAmount)
        : quickAmount
    );
  };

  return (
    <div className="pay-cart-section">
      <div className="amount-display">{amount}</div>
      <div className="keys-wrapper">
        <div className="keypad-section">
          <div className="keypad-row">
            {[1, 2, 3].map((number) => (
              <button
                className="b-r-8 btn btn-outline-light btn-lg"
                key={number}
                onClick={() => handleNumberClick(number.toString())}
              >
                {number}
              </button>
            ))}
          </div>
          <div className="keypad-row">
            {[4, 5, 6].map((number) => (
              <button
                className="b-r-8 btn btn-outline-light btn-lg"
                key={number}
                onClick={() => handleNumberClick(number.toString())}
              >
                {number}
              </button>
            ))}
          </div>
          <div className="keypad-row">
            {[7, 8, 9].map((number) => (
              <button
                className="b-r-8 btn btn-outline-light btn-lg"
                key={number}
                onClick={() => handleNumberClick(number.toString())}
              >
                {number}
              </button>
            ))}
          </div>
          <div className="keypad-row">
            <button
              className="b-r-8 btn btn-outline-light btn-lg"
              onClick={handleClear}
            >
              C
            </button>
            <button
              className="b-r-8 btn btn-outline-light btn-lg"
              onClick={() => handleNumberClick("0")}
            >
              0
            </button>
          </div>
        </div>
        <div className="quick-payment-section">
          {[total, 100, 500, 1000, 5000].map((quickAmount) => (
            <button
              className="b-r-8 btn btn-outline-primary btn-lg"
              key={quickAmount}
              onClick={() => handleQuickPayment(quickAmount.toString())}
            >
              {quickAmount}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PayCart;
