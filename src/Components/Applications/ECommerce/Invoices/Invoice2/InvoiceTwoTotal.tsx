import React from "react";
import { Table } from "reactstrap";
import { getFormattedPrice } from "../../../../../services/helper";

export default function InvoiceTwoTotal({ order }: { order: any }) {
  // Calculate the subtotal
  const subtotal = order.items.reduce(
    (acc: any, item: any) =>
      acc + parseFloat(item.price) * parseInt(item.quantity),
    0
  );

  // Extract fees (Discounts, Service Fees, etc.)
  const discount = order.fees
    ? order.fees.reduce((acc: any, fee: any) => {
        if (fee.name.toLowerCase() === "discount") {
          return acc + parseFloat(fee.amount);
        }
        return acc;
      }, 0)
    : 0;

  const additionalFees = order.fees
    ? order.fees.reduce((acc: any, fee: any) => {
        if (fee.name.toLowerCase() !== "discount") {
          return acc + parseFloat(fee.amount);
        }
        return acc;
      }, 0)
    : 0;

  // Calculate the grand total
  const grandTotal = subtotal + additionalFees + discount;

  return (
    <td>
      <Table style={{ float: "right" }} borderless>
        <tfoot>
          <tr>
            <td
              style={{
                padding: "5px 24px 5px 0",
                paddingTop: 15,
                textAlign: "right",
              }}
            >
              <span
                style={{
                  color: "var(--normal-gray)",
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                {"Subtotal"}
              </span>
              <span style={{ marginLeft: 8, fontSize: 16 }}>:</span>
            </td>
            <td
              style={{ padding: "5px 0", textAlign: "right", paddingTop: 15 }}
            >
              <span style={{ fontSize: 16 }}>
                {getFormattedPrice(subtotal)}
              </span>
            </td>
          </tr>
          {order.fees &&
            order.fees.map((fee: any, index: number) => (
              <tr key={index}>
                <td style={{ padding: "5px 24px 5px 0", textAlign: "right" }}>
                  <span
                    style={{
                      color: "var(--normal-gray)",
                      fontSize: 16,
                      fontWeight: 400,
                    }}
                  >
                    {fee.name}
                  </span>
                  <span style={{ marginLeft: 8, fontSize: 16 }}>:</span>
                </td>
                <td
                  style={{
                    padding: "5px 0",
                    textAlign: "right",
                    paddingTop: 0,
                  }}
                >
                  <span style={{ fontSize: 16 }}>
                    {getFormattedPrice(parseFloat(fee.amount))}
                  </span>
                </td>
              </tr>
            ))}
          <tr>
            <td style={{ padding: "12px 24px 22px 0", textAlign: "right" }}>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 18,
                  color: "var(--body-font-color)",
                }}
              >
                {"Total Amount"}
              </span>
              <span style={{ marginLeft: 8 }}>:</span>
            </td>
            <td style={{ padding: "12px 24px 22px 0", textAlign: "right" }}>
              <span style={{ fontWeight: 500, fontSize: 18, color: "#009DB5" }}>
                {getFormattedPrice(grandTotal)}
              </span>
            </td>
          </tr>
        </tfoot>
      </Table>
    </td>
  );
}
