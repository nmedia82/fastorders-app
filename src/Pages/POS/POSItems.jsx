import React, { useEffect } from "react";
import { Input, InputGroup, InputGroupText } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  fetchProducts,
} from "../../ReduxToolkit/Reducers/CartReducer";
import { dynamicImage } from "../../Utils";

function POSItems() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const status = useSelector((state) => state.cart.status);
  const error = useSelector((state) => state.cart.error);

  useEffect(() => {
    dispatch(fetchProducts()); // Replace 12 with the actual vendor_id you want to use
  }, [dispatch]);

  return (
    <div className="product-tiles">
      <InputGroup size="lg">
        <InputGroupText className="list-light-warning">
          <i className="icofont icofont-search txt-warning"></i>
        </InputGroupText>
        <Input type="text" placeholder="Search products by name" />
      </InputGroup>
      {status === "loading" && <p>Loading products...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" &&
        products.map((product) => (
          <div
            key={product.id}
            className="product-tile"
            role="button"
            onClick={() => dispatch(addItem({ ...product, quantity: 1 }))}
          >
            <img
              src={product.image ? product.image : dynamicImage("user.png")}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <p className="product-title">{product.name}</p>
              <p className="product-price">${product.price}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default POSItems;
