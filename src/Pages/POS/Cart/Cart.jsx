import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button, InputGroup, InputGroupText } from "reactstrap";
import CartItems from "./CartItems";
import { CartFooter } from "./CartFooter";
import "./cart.css";

export const POSCart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="cart-section border-3">
      <div className="barcode-section">
        <InputGroup size="lg">
          <InputGroupText className="list-light-warning">
            <i className="icofont icofont-barcode txt-warning"></i>
          </InputGroupText>
          <Input type="text" />
        </InputGroup>
      </div>
      <div className={`line-items-section ${isCartEmpty ? "no-items" : ""}`}>
        {!isCartEmpty ? (
          <CartItems />
        ) : (
          <h1 className="display-3 waving-cart">
            <i className="icofont icofont-social-opencart"></i>
          </h1>
        )}
      </div>
      <CartFooter />
    </div>
  );
};

export default POSCart;
