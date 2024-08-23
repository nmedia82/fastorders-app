import React from "react";
import { Table } from "reactstrap";
import { H4 } from "../../../../../AbstractElements";
import {
  getFormattedDate,
  getFormattedPrice,
} from "../../../../../services/helper";

export default function InvoiceTwoDetails({ order }: { order: any }) {
  return (
    <td>
      <Table style={{ width: "100%" }} borderless>
        <tbody>
          <tr
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(82, 82, 108, 0.3)",
              borderBottom: "1px solid rgba(82, 82, 108, 0.3)",
              padding: "25px 0",
            }}
          >
            <td style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  color: "var(--normal-gray)",
                  opacity: "0.8",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                {"Invoice#."}
              </span>
              <H4 style={{ margin: 0, fontWeight: 400, fontSize: 16 }}>
                {`#${order.id}`}
              </H4>
            </td>
            <td style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  color: "var(--normal-gray)",
                  opacity: "0.8",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                {"Date"} :
              </span>
              <H4 style={{ margin: 0, fontWeight: 400, fontSize: 16 }}>
                {getFormattedDate(order.date)}
              </H4>
            </td>
            <td style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  color: "var(--normal-gray)",
                  opacity: "0.8",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                {"Status"} :
              </span>
              <H4
                style={{
                  margin: 0,
                  fontWeight: 400,
                  fontSize: 16,
                  padding: "6px 18px",
                  backgroundColor: "rgba(84, 186, 74, 0.1)",
                  color: "#54BA4A",
                  borderRadius: 5,
                }}
              >
                {order.order_status}
              </H4>
            </td>
            <td style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  color: "var(--normal-gray)",
                  opacity: "0.8",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                {"Total"} :
              </span>
              <H4 style={{ margin: 0, fontWeight: 500, fontSize: 16 }}>
                {getFormattedPrice(order.grandTotal)}
              </H4>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
}
