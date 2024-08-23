import React from "react";
import { Table } from "reactstrap";
import { H4 } from "../../../../../AbstractElements";

export default function InvoiceTwoBilling({ order }: { order: any }) {
  console.log(order);
  const { name, address, mobile } = order?.customer || {
    name: "",
    address: "",
    mobile: "",
  };
  return (
    <td>
      <Table style={{ width: "100%" }} borderless>
        <tbody>
          <tr style={{ padding: "28px 0", display: "block" }}>
            <td style={{ width: "63%" }}>
              <span
                style={{
                  color: "var(--normal-gray)",
                  opacity: "0.8",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                {"SHIPPING ADDRESS"}
              </span>
              <H4
                style={{
                  fontWeight: 500,
                  margin: "12px 0 6px 0",
                  fontSize: 18,
                }}
              >
                {name}
              </H4>
              <span
                style={{
                  width: "54%",
                  display: "block",
                  lineHeight: "1.5",
                  color: "var(--normal-gray)",
                  opacity: "0.8",
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                {address}
              </span>
              <span
                style={{
                  lineHeight: "2.6",
                  color: "var(--normal-gray)",
                  opacity: "0.8",
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                {mobile}
              </span>
            </td>
            {/* <td>
                            <span style={{ color: "var(--normal-gray)", opacity: "0.8", fontSize: 16, fontWeight: 500 }} >
                                {'SHIPPING ADDRESS'}
                            </span>
                            <H4 style={{ fontWeight: 500, margin: "12px 0 6px 0", fontSize: 18, }} >
                                {'Cameron Williamson'}
                            </H4>
                            <span style={{ width: "95%", display: "block", lineHeight: "1.5",color: "var(--normal-gray)", opacity: "0.8", fontSize: 16, fontWeight: 400 }}>
                                {'2972 Westheimer Rd. Santa Ana, Illinois 85486'}
                            </span>
                            <span style={{ lineHeight: "2.6",color: "var(--normal-gray)", opacity: "0.8", fontSize: 16, fontWeight: 400 }}>
                                {'Phone : (219) 555-0114'}
                            </span>
                        </td> */}
          </tr>
        </tbody>
      </Table>
    </td>
  );
}
