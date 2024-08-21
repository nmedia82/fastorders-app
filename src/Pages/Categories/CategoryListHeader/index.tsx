import React, { useState } from "react";
import { Card, CardBody, Collapse } from "reactstrap";
import { Filter } from "react-feather";
import { Href } from "../../../Utils/Constants";
import CategoryListBody from "./CategoryListBody";
import NewCategoryModal from "../AddCatogory";
export default function CategoryListHeader() {
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
        <div>
          <NewCategoryModal />
        </div>
      </div>
      {/* <Collapse className={isFilterOpen ? "show" : ""}>
        <Card className="list-product-body">
          <CardBody>
            <CategoryListBody />
          </CardBody>
        </Card>
      </Collapse> */}
    </div>
  );
}
