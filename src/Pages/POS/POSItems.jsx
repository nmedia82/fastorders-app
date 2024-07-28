import React from "react";
import { Input, InputGroup, InputGroupText } from "reactstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../../ReduxToolkit/Reducers/CartReducer";

const products = Array.from({ length: 25 }, (_, index) => ({
  id: index + 1,
  title: `Product ${index + 1}`,
  price: (10 + index).toFixed(2),
  image: `https://placehold.co/400`, // Replace with actual image paths
}));

function POSItems() {
  const dispatch = useDispatch();
  return (
    <div className="product-tiles">
      <InputGroup size="lg">
        <InputGroupText className="list-light-warning">
          <i className="icofont icofont-search txt-warning"></i>
        </InputGroupText>
        <Input type="text" placeholder="Search products by name" />
      </InputGroup>
      {products.map((product) => (
        <div
          key={product.id}
          className="product-tile"
          role="button"
          onClick={() => dispatch(addItem({ ...product, quantity: 1 }))}
        >
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <div className="product-details">
            <p className="product-title">{product.title}</p>
            <p className="product-price">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default POSItems;
