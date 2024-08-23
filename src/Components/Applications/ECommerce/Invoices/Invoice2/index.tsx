import React, { useRef } from "react";
import { Card, CardBody, Container, Table } from "reactstrap";
import InvoiceTwoHeader from "./InvoiceTwoHeader";
import InvoiceTwoDetails from "./InvoiceTwoDetails";
import InvoiceTwoBilling from "./InvoiceTwoBilling";
import Print from "../Common/Print";
import InvoiceTwoContent from "./InvoiceTwoContent";
import InvoiceTwoTotal from "./InvoiceTwoTotal";
import { getVendorSettings } from "../../../../../services/helper";

export default function Invoice2Container({ order }: { order: any }) {
  const componentRef = useRef<HTMLDivElement | null>(null);

  return (
    <Container>
      <div ref={componentRef}>
        <Card className="invoice-2">
          <CardBody>
            <Table
              className="table-wrapper custom-scrollbar"
              responsive
              borderless
            >
              <tbody>
                <tr>
                  <InvoiceTwoHeader />
                </tr>
                <tr>
                  <InvoiceTwoDetails order={order} />
                </tr>
                {getVendorSettings("show_invoice_billing") && (
                  <tr>
                    <InvoiceTwoBilling order={order} />
                  </tr>
                )}
                <tr>
                  <InvoiceTwoContent order={order} />
                </tr>
                <tr style={{ display: "flex", justifyContent: "end" }}>
                  <InvoiceTwoTotal order={order} />
                </tr>
                <tr>
                  <td>
                    <span
                      style={{
                        display: "block",
                        background: "rgba(82, 82, 108, 0.3)",
                        height: 1,
                        width: "100%",
                        marginBottom: 24,
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
      <Print componentRef={componentRef} />
    </Container>
  );
}
