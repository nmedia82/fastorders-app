import React, { useRef } from 'react'
import { Card, CardBody, Container, Table } from 'reactstrap';
import Print from '../Common/Print';
import InvoiceThreeHeader from './InvoiceThreeHeader';
import InvoiceClientDetail from './InvoiceClientDetail';
import InvoiceThreeTable from './InvoiceThreeTable';
import InvoiceBankTransfer from './InvoiceBankTransfer';

export default function Invoice3Container() {
    const componentRef = useRef<HTMLDivElement | null>(null);

    return (
        <Container>
            <div ref={componentRef}>
                <Card className='invoice-2'>
                    <CardBody>
                        <Table className="table-wrapper custom-scrollbar" responsive borderless>
                            <tbody>
                                <tr>
                                    <InvoiceThreeHeader />
                                </tr>
                                <tr>
                                    <InvoiceClientDetail />
                                </tr>
                                <tr>
                                    <td>
                                        <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 20 }} />
                                    </td>
                                </tr>
                                <tr>
                                    <InvoiceThreeTable />
                                </tr>
                                <tr>
                                    <InvoiceBankTransfer />
                                </tr>
                                <tr>
                                    <td>
                                        <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 24 }} />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </div>
            <Print componentRef={componentRef} />
        </Container >
    )
}

