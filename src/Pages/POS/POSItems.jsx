import React, { useEffect } from "react";
import { Input, InputGroup, InputGroupText } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  fetchProducts,
} from "../../ReduxToolkit/Reducers/CartReducer";
import { dynamicImage } from "../../Utils";
import { getProductMainImage } from "../../services/helper";

function POSItems() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { status, error } = useSelector((state) => state.cart);
  console.log(products);
  // const error = useSel?ector((state) => state.cart.error);

  return (
    <div>
      <InputGroup size="lg">
        <InputGroupText className="list-light-warning">
          <i className="icofont icofont-search txt-warning"></i>
        </InputGroupText>
        <Input type="text" placeholder="Search products by name" />
      </InputGroup>

      <div className="product-tiles mt-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-tile"
            role="button"
            onClick={() => dispatch(addItem({ ...product, quantity: 1 }))}
          >
            <img
              src={getProductMainImage(product)}
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
    </div>
  );
}

export default POSItems;
