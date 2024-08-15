import React, { useState } from "react";
import { Card, CardBody, Row, Col, Input, Label } from "reactstrap";
import DataTable from "react-data-table-component";
import FilterComponent from "../../Common/FilterComponent";
import { useSelector } from "react-redux";
import CommonCardHeader from "../../../Utils/CommonComponents/CommonCardHeader";
import { getFormattedPrice } from "../../../services/helper";
import { Link } from "react-router-dom";

// Table columns
const customOrderHistoryColumns = [
  {
    name: "Order ID",
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: "Date",
    selector: (row: any) => row.date,
    sortable: true,
  },
  {
    name: "Order Status",
    selector: (row: any) => row.order_status,
    sortable: true,
  },
  {
    name: "Order Type",
    selector: (row: any) => row.order_type,
    sortable: true,
  },
  {
    name: "Grand Total",
    selector: (row: any) => getFormattedPrice(row.grandTotal),
    sortable: true,
  },
  {
    name: "Invoice",
    cell: (row: any) => (
      <Link to={`/invoice/${row.id}`} className="btn btn-link">
        Invoice
      </Link>
    ),
    ignoreRowClick: true, // This will prevent triggering the row click event
    allowOverflow: true, // This ensures the button is not cut off
    button: true,
  },
];

export default function OrdersTable() {
  const { allOrders, allOrderStatuses } = useSelector(
    (state: any) => state.orders
  );

  const [filterText, setFilterText] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  // Handle Reset Function
  const handleReset = () => {
    setFilterText("");
    setStatusFilter("");
    setTypeFilter("");
  };

  // Filtered orders based on search and dropdown filters
  const filteredItems = allOrders
    ? allOrders.filter((item: any) => {
        const matchesFilterText = Object.values(item).some(
          (value) =>
            value &&
            value.toString().toLowerCase().includes(filterText.toLowerCase())
        );

        const matchesStatusFilter =
          statusFilter === "" || item.order_status === statusFilter;

        const matchesTypeFilter =
          typeFilter === "" || item.order_type === typeFilter;

        return matchesFilterText && matchesStatusFilter && matchesTypeFilter;
      })
    : [];

  return (
    <Card>
      <CommonCardHeader title="Order History" />
      <CardBody>
        {/* Filters for Order Status and Order Type */}
        <Row className="mb-3 justify-content-end">
          {" "}
          {/* Right-align filters */}
          <Col md={6}>
            <FilterComponent
              onFilter={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFilterText(e.target.value)
              }
              filterText={filterText}
            />
          </Col>
          <Col md={2} className="text-end">
            <button className="btn btn-link" onClick={handleReset}>
              Reset
            </button>
          </Col>
          <Col md={2} className="text-end">
            <Input
              type="select"
              id="statusFilter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">Filter by Statuses</option>
              {Object.keys(allOrderStatuses).map((status) => (
                <option key={status} value={status}>
                  {allOrderStatuses[status]}
                </option>
              ))}
            </Input>
          </Col>
          <Col md={2} className="text-end">
            <Input
              type="select"
              id="typeFilter"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="">Filter by Types</option>
              <option value="dine-in">Dine-in</option>
              <option value="take-away">Takeaway</option>
              <option value="home-delivery">Home Delivery</option>
              <option value="pos">POS</option>
            </Input>
          </Col>
        </Row>

        <div className="table-responsive">
          <DataTable
            className="custom-scrollbar"
            data={filteredItems}
            columns={customOrderHistoryColumns}
            pagination
            highlightOnHover
            striped
            responsive // Makes the table responsive
          />
        </div>
      </CardBody>
    </Card>
  );
}
