import React, { useRef } from 'react'
import { Card, CardBody, Container, Table } from 'reactstrap';
import Print from '../Common/Print';
import InvoiceFourHeader from './InvoiceFourHeader';
import InvoiceFourDetail from './InvoiceFourDetail';
import InvoiceFourTable from './InvoiceFourTable';
import InvoiceTotal from './InvoiceTotal';
import CommonInvoiceSign from '../Common/CommonInvoiceSign';

export default function Invoice4Container() {
    const componentRef = useRef<HTMLDivElement | null>(null);

    return (
        <Container>
            <div ref={componentRef}>
                <Card className="invoice-2">
                    <CardBody>
                        <Table className="table-wrapper custom-scrollbar" responsive borderless>
                            <tbody>
                                <tr>
                                    <InvoiceFourHeader />
                                </tr>
                                <tr>
                                    <InvoiceFourDetail />
                                </tr>
                                <tr>
                                    <InvoiceFourTable />
                                </tr>
                                <tr>
                                    <td style={{ height: 3, width: "100%", background: "linear-gradient(90deg, #009DB5 20.61%, #83BF6E 103.6%)", display: "block" }} />
                                </tr>
                                <tr>
                                    <InvoiceTotal />
                                </tr>
                                <tr style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                                    <CommonInvoiceSign />
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </div>
            <Print componentRef={componentRef} />
        </Container>
    )
}

