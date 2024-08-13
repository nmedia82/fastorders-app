import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import DataTable from "react-data-table-component";
import FilterComponent from "../../Common/FilterComponent";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../ReduxToolkit/Store";
import CommonCardHeader from "../../../Utils/CommonComponents/CommonCardHeader";

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
    selector: (row: any) => row.grandTotal,
    sortable: true,
  },
];

export default function OrdersTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { allOrder } = useSelector((state: any) => state.orders);

  const [filterText, setFilterText] = useState("");

  const filteredItems = allOrder
    ? allOrder.filter((item: any) => {
        return Object.values(item).some(
          (value) =>
            value &&
            value.toString().toLowerCase().includes(filterText.toLowerCase())
        );
      })
    : [];

  return (
    <Card>
      <CommonCardHeader title="Order History" />
      <CardBody>
        <FilterComponent
          onFilter={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilterText(e.target.value)
          }
          filterText={filterText}
        />
        <div className="order-history table-responsive">
          <DataTable
            className="custom-scrollbar"
            data={filteredItems}
            columns={customOrderHistoryColumns}
            pagination
            highlightOnHover
            striped
          />
        </div>
      </CardBody>
    </Card>
  );
}
