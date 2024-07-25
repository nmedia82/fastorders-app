import React from "react";
import { Container, Row, Col, Input } from "reactstrap";
import "./pos.css"; // Add this line to import the custom CSS file

export const POSHome = () => {
  return (
    <div className="page-body pos-container">
      <Row noGutters>
        <Col md="8" className="product-area">
          <div className="product-tiles">
            {/* Add your product components here */}
            <div className="product-tile">Product 1</div>
            <div className="product-tile">Product 2</div>
            <div className="product-tile">Product 3</div>
            {/* Add more products as needed */}
          </div>
        </Col>
        <Col md="4" className="cart-area">
          <div className="cart-section">
            <div className="barcode-section">
              <Input type="text" placeholder="Scan Barcode" />
            </div>
            <div className="line-items-section">
              {/* Add your line items here */}
              <p>Line items will be listed here</p>
            </div>
            <div className="cart-total-section">
              {/* Add cart total, discount, etc. here */}
              <p>Cart Total and Discounts will be displayed here</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default POSHome;
