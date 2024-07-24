import React, { useRef } from 'react'
import { Card, CardBody, Container, Table } from 'reactstrap';
import CommonInvoiceSign from '../Common/CommonInvoiceSign';
import Print from '../Common/Print';
import InvoiceFiveHeader from './InvoiceFiveHeader';
import InvoiceNumber from './InvoiceNumber';
import InvoiceTable from './InvoiceTable';

export default function Invoice5Container() {
    const componentRef = useRef<HTMLDivElement | null>(null);

    return (
        <Container>
            <div ref={componentRef}>
                <Card className="invoice-2">
                    <CardBody>
                        <Table className="custom-scrollbar" responsive borderless>
                            <tbody>
                                <tr>
                                    <InvoiceFiveHeader />
                                </tr>
                                <tr>
                                    <InvoiceNumber />
                                </tr>
                                <tr>
                                    <InvoiceTable />
                                </tr>
                                <tr style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: 36 }} >
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

