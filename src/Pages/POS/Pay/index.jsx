import React, { useEffect, useState } from "react";
import "./paycart.css"; // Ensure the CSS file is imported
import { useSelector, useDispatch } from "react-redux";
import { Button } from "reactstrap";
import {
  backToCart,
  cartPaid,
  clearCart,
  payingCart,
} from "../../../ReduxToolkit/Reducers/CartReducer";
import http from "../../../services/http";
import { getAPIURL } from "../../../services/helper";
import { useNavigate } from "react-router-dom";
import { setOrderStatus } from "../../../ReduxToolkit/Reducers/OrdersReducer";
import { toast } from "react-toastify";
import Loader from "../../../Layout/Loader";

const PayCart = () => {
  const { order_id, total, discount, order_type } = useSelector(
    (state) => state.cart
  );
  const [amount, setAmount] = useState("0");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isWorking, setIsWorking] = useState(false);
  const api_url = getAPIURL();

  useEffect(() => {
    dispatch(payingCart(amount));
  }, [amount]);

  const canPay = () => parseFloat(amount) >= parseFloat(total);

  const handleNumberClick = (number) => {
    setAmount((prevAmount) =>
      prevAmount === "0" ? number : prevAmount + number
    );
  };

  const handleClear = () => {
    setAmount("0");
  };

  const handleQuickPayment = (quickAmount) => {
    setAmount((prevAmount) =>
      prevAmount === "0"
        ? quickAmount.toString()
        : (parseFloat(prevAmount) + parseFloat(quickAmount)).toString()
    );
  };

  const handleCartPay = async () => {
    // console.log(discount, order_id);
    try {
      setIsWorking(true);
      const { data: order } = await http.post(`${api_url}/pay-order`, {
        discount,
        order_id,
        order_status: "completed",
      });
      // console.log(order.data);
      dispatch(clearCart());
      dispatch(setOrderStatus(order.data));
      navigate("/orders");
      setIsWorking(false);
    } catch (error) {
      setIsWorking(false);
      toast.error(error);
      console.error("Failed to load order", error);
    }
  };

  return (
    <div className="pay-cart-section">
      {isWorking && <Loader />}
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

      <div className="d-grid">
        <Button
          color="warning"
          className="btn-lg"
          onClick={() => dispatch(backToCart())}
        >
          Back
        </Button>
        {order_type === "pos" && (
          <Button
            color="success"
            className="btn-success btn-lg mt-3"
            onClick={() => dispatch(cartPaid())}
            disabled={!canPay()}
          >
            Pay
          </Button>
        )}
        {order_type !== "pos" && (
          <Button
            color="success"
            className="btn-success btn-lg mt-3"
            onClick={handleCartPay}
            disabled={!canPay()}
          >
            Pay1
          </Button>
        )}
      </div>
    </div>
  );
};

export default PayCart;
