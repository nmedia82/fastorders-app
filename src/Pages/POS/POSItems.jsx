import React, { useState, useEffect } from "react";
import { Input, InputGroup, InputGroupText } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  fetchProducts,
} from "../../ReduxToolkit/Reducers/CartReducer";
import { getProductMainImage } from "../../services/helper";

function POSItems() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { status, error } = useSelector((state) => state.cart);

  // State for the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search query changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter products based on the search query
  let filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.sku && product.sku.toLowerCase() === searchQuery.toLowerCase()) // Exact SKU match
    );
  });

  // If an exact SKU match is found, add it to the cart
  useEffect(() => {
    const exactSkuMatch = products.find(
      (product) =>
        product.sku && product.sku.toLowerCase() === searchQuery.toLowerCase()
    );

    if (exactSkuMatch) {
      dispatch(addItem({ ...exactSkuMatch, quantity: 1 }));
      setSearchQuery(""); // Clear the search input after adding to cart
    }
  }, [searchQuery, products, dispatch]);

  return (
    <div>
      <InputGroup size="lg">
        <InputGroupText className="list-light-warning">
          <i className="icofont icofont-search txt-warning"></i>
        </InputGroupText>
        <Input
          type="text"
          placeholder="Search products by name or SKU"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </InputGroup>

      <div className="product-tiles mt-2">
        {filteredProducts.map((product) => (
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
