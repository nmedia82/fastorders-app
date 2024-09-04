import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Button, Input } from "reactstrap";
import {
  holdCart,
  clearCart,
  applyDiscount,
  payingCart,
  cartPaid,
} from "../../../ReduxToolkit/Reducers/CartReducer";
import { getFormattedPrice } from "../../../services/helper";

export const CartFooter = () => {
  const dispatch = useDispatch();
  const { total, discount, order_type } = useSelector((state) => state.cart);

  const handleHoldCart = () => {
    dispatch(holdCart());
  };

  const handlePayCart = () => {
    dispatch(payingCart());
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handlQuickPay = () => {
    // console.log("quickpay");
    dispatch(cartPaid());
  };
  return (
    <div className="cart-total-section">
      <div className="cart-totals">
        <div className="cart-total-item">
          <span className="cart-total-label txt-primary">Subtotal:</span>
          <span className="cart-total-value">Rs. {total + discount}</span>
        </div>
        <div className="cart-total-item">
          <span className="cart-total-label txt-info">Discount:</span>
          <Input
            type="text"
            placeholder="Enter discount"
            className="discount-input"
            value={discount}
            onChange={(e) => dispatch(applyDiscount(e.target.value))}
          />
        </div>
        <div className="cart-total-item">
          <span className="cart-total-label">Total:</span>
          <span className="cart-total-value">Rs. {total}</span>
        </div>
        <div className="d-flex justify-content-between">
          <Button
            color="success"
            className="btn-square w-100 mx-1"
            onClick={handlePayCart}
          >
            Pay
          </Button>
          {order_type === "pos" && (
            <Button
              color="dark"
              className="btn-square w-100 mx-1"
              onClick={handlQuickPay}
            >
              {"Quick "}
              <small className="text-sm">{getFormattedPrice(total)}</small>
            </Button>
          )}
        </div>
        <div className="d-flex justify-content-between">
          <Button
            color="primary"
            className="btn-square w-100 mx-1"
            onClick={handleHoldCart}
          >
            Hold
          </Button>

          <Button
            color="danger"
            className="btn-square w-100 mx-1"
            onClick={handleClearCart}
          >
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};
