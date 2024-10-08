import React from "react";
import { Col, Row, FormGroup, Label, Input } from "reactstrap";
import { Btn } from "../../../AbstractElements";

interface OrdersFilterProps {
  filterType: string;
  setFilterType: (type: string) => void;
  filterStatus: string;
  setFilterStatus: (status: string) => void;
  allOrderStatuses: any;
  handleResetFilters: () => void;
}

const OrdersFilter: React.FC<OrdersFilterProps> = ({
  filterType,
  setFilterType,
  filterStatus,
  setFilterStatus,
  allOrderStatuses,
  handleResetFilters,
}) => {
  return (
    <Row className="justify-content-start mb-3" style={{ maxWidth: "50%" }}>
      <Col md={6}>
        <FormGroup>
          <Label for="filterType">Filter by Order Type:</Label>
          <Input
            type="select"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            id="filterType"
          >
            <option value="All">All</option>
            <option value="dine-in">Dine-in</option>
            <option value="take-away">Takeaway</option>
            <option value="home-delivery">Home Delivery</option>
            <option value="pos">POS</option>
          </Input>
        </FormGroup>
      </Col>

      <Col md={2} className="d-flex align-items-center">
        <Btn className="btn btn-sm btn-info" onClick={handleResetFilters}>
          Reset Filter
        </Btn>
      </Col>
    </Row>
  );
};

export default OrdersFilter;
