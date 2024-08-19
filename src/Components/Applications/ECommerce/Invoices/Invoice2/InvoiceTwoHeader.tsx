import React from "react";
import { Table } from "reactstrap";
import { Image } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Utils";
import { getVendorSettings } from "../../../../../services/helper";

export default function InvoiceTwoHeader() {
  return (
    <td>
      <Table style={{ width: "100%" }} borderless>
        <tbody>
          <tr>
            <td>
              <Image
                className="img-fluid for-light"
                src={dynamicImage(`logo/logo.png`)}
                alt="logo"
                style={{ width: "121px" }}
              />
              <Image
                className="img-fluid for-dark"
                src={dynamicImage(`logo/logo_dark.png`)}
                alt="logo"
                style={{ width: "121px" }}
              />
              <address
                style={{
                  color: "var(--normal-gray)",
                  opacity: "0.8",
                  width: "40%",
                  marginTop: 10,
                  fontStyle: "normal",
                }}
              >
                <span
                  style={{ fontSize: 16, lineHeight: "1.5", fontWeight: 500 }}
                >
                  {getVendorSettings("store_address") &&
                    getVendorSettings("store_address")}
                </span>
              </address>
            </td>
            <td
              style={{
                color: "var(--normal-gray)",
                opacity: "0.8",
                textAlign: "end",
              }}
            >
              {getVendorSettings("store_slug") && (
                <span
                  style={{
                    display: "block",
                    lineHeight: "1.5",
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  {`Website :${getVendorSettings("store_slug")}.getorder.pk`}
                </span>
              )}
              {getVendorSettings("store_email") && (
                <span
                  style={{
                    display: "block",
                    lineHeight: "1.5",
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  {`Email :${getVendorSettings("store_email")}`}
                </span>
              )}
              {getVendorSettings("store_phone") && (
                <span
                  style={{
                    display: "block",
                    lineHeight: "1.5",
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  {`Contact No : ${getVendorSettings("store_phone")}`}
                </span>
              )}
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
}
