import React, { useState } from "react";
import { Card, CardBody, Collapse } from "reactstrap";
import { Filter } from "react-feather";
import { Href } from "../../../Utils/Constants";
import TableListBody from "./TableListBody";
import NewTableModal from "../TableData/NewTableModal";

export default function TableListHeader() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const handleFilterToggle = () => {
    setIsFilterOpen((prevState) => !prevState);
  };
  return (
    <div className="list-product-header">
      <div>
        <div className="light-box">
          <a href={Href} onClick={handleFilterToggle}>
            {isFilterOpen ? (
              <i className="icon-close filter-close" />
            ) : (
              <Filter className="filter-icon" />
            )}
          </a>
        </div>
        <div>
          <NewTableModal />
        </div>
      </div>
      <Collapse className={isFilterOpen ? "show" : ""}>
        <Card className="list-product-body">
          <CardBody>
            <TableListBody />
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}
