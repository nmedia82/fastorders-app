import React, { useState } from "react";
import { Card, CardBody, Collapse } from "reactstrap";
import { Link } from "react-router-dom";
import { Filter } from "react-feather";
import { Href } from "../../../Utils/Constants";
import { ProductListHeaderProp } from "../../../Types/ECommerce.type";
import ProductListBody from "./ProductListBody";

export default function ProductListHeader({
  linkTitle,
}: ProductListHeaderProp) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const handleFilterToggle = () => {
    setIsFilterOpen((prevState) => !prevState);
  };
  return (
    <div className="list-product-header">
      <div>
        {/* <div className="light-box">
          <a href={Href} onClick={handleFilterToggle}>
            {isFilterOpen ? (
              <i className="icon-close filter-close" />
            ) : (
              <Filter className="filter-icon" />
            )}
          </a>
        </div> */}
        <Link
          className="btn btn-primary"
          to={`${process.env.PUBLIC_URL}/products/new`}
        >
          <i className="fa fa-plus me-2"></i> {linkTitle}
        </Link>
      </div>
      <Collapse className={isFilterOpen ? "show" : ""}>
        <Card className="list-product-body">
          <CardBody>
            <ProductListBody />
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}
