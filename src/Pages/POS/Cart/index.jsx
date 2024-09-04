import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button, InputGroup, InputGroupText } from "reactstrap";
import CartItems from "./CartItems";
import { CartFooter } from "./CartFooter";
import "./cart.css";
import { useParams } from "react-router-dom";
import http from "../../../services/http";
import { getAPIURL } from "../../../services/helper";
import { orderToCart } from "../../../ReduxToolkit/Reducers/CartReducer";
import { toast } from "react-toastify";
import Loader from "../../../Layout/Loader";

export const POSCart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { order_id } = useParams();
  const [isWorking, setIsWorking] = useState(false);
  const api_url = getAPIURL();

  useEffect(() => {
    const loadOrderToCart = async () => {
      try {
        setIsWorking(true);
        const { data: order } = await http.get(`${api_url}/order/${order_id}`);
        // console.log(order.data);
        dispatch(orderToCart(order.data));
        setIsWorking(false);
      } catch (error) {
        console.error("Failed to load order", error);
        setIsWorking(false);
        toast.error(error);
      }
    };

    if (order_id) loadOrderToCart();
  }, [order_id, dispatch, api_url]);

  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="cart-section border-3">
      {isWorking && <Loader />}
      <InputGroup size="lg">
        <InputGroupText className="list-light-warning">
          <i className="icofont icofont-barcode txt-warning"></i>
        </InputGroupText>
        <Input type="text" />
      </InputGroup>
      <div className={`line-items-section ${isCartEmpty ? "no-items" : ""}`}>
        {!isCartEmpty ? (
          <CartItems />
        ) : (
          <h1 className="display-3 waving-cart">
            <i className="icofont icofont-social-opencart"></i>
          </h1>
        )}
      </div>
      {!isCartEmpty && <CartFooter />}
    </div>
  );
};

export default POSCart;
