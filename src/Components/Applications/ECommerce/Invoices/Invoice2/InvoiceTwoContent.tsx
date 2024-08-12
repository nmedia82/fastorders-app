import React, { Key } from "react";
import { Table } from "reactstrap";
import { H4, Image, LI, UL } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Utils";
import { getFormattedPrice } from "../../../../../services/helper";

export default function InvoiceTwoContent({ order }: { order: any }) {
  return (
    <Table
      style={{
        width: "100%",
        borderCollapse: "separate",
        borderSpacing: 0,
        border: "1px dashed rgba(82, 82, 82, 0.1)",
      }}
    >
      <thead>
        <tr
          style={{
            background: "#009DB5",
            borderRadius: "5.47059px",
            overflow: "hidden",
            boxShadow:
              "0px 10.9412px 10.9412px rgb(0 157 181 / 4%), 0px 9.51387px 7.6111px rgb(0 157 181 / 6%), 0px 5.05275px 4.0422px rgb(0 157 181 / 4%)",
          }}
        >
          <th
            style={{ padding: "18px 15px", textAlign: "left", border: "none" }}
          >
            <span style={{ color: "#fff", fontSize: 18 }}>Product</span>
          </th>
          <th
            style={{ padding: "18px 15px", textAlign: "left", border: "none" }}
          >
            <span style={{ color: "#fff", fontSize: 18 }}>Quantity</span>
          </th>
          <th
            style={{ padding: "18px 15px", textAlign: "left", border: "none" }}
          >
            <span style={{ color: "#fff", fontSize: 18 }}>Price</span>
          </th>
          <th
            style={{ padding: "18px 15px", textAlign: "left", border: "none" }}
          >
            <span style={{ color: "#fff", fontSize: 18 }}>Subtotal</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {order.items.map((item: any, i: Key) => (
          <tr
            style={{
              backgroundColor: "rgba(0, 157, 181, 0.11)",
              boxShadow: "0px 1px 0px 0px rgba(82, 82, 108, 0.15)",
            }}
            key={i}
          >
            <td
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <UL style={{ padding: 0, margin: 0, listStyle: "none" }}>
                <LI style={{ border: "none" }}>
                  <H4
                    style={{
                      fontWeight: 400,
                      margin: "1px 0px",
                      fontSize: 16,
                    }}
                  >
                    {item.name}
                  </H4>
                  <span
                    style={{
                      color: "var(--normal-gray)",
                      opacity: "0.8",
                      fontSize: 14,
                    }}
                  >
                    {`ID: ${item.id}`}
                  </span>
                </LI>
              </UL>
            </td>
            <td style={{ padding: "18px 15px" }}>
              <span style={{ fontSize: "16px" }}>{item.quantity}</span>
            </td>
            <td style={{ padding: "18px 15px", width: "12%" }}>
              <span style={{ fontSize: "16px" }}>
                {getFormattedPrice(item.price)}
              </span>
            </td>
            <td style={{ padding: "18px 15px" }}>
              <span style={{ fontSize: "16px" }}>
                {getFormattedPrice(item.subtotal)}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
