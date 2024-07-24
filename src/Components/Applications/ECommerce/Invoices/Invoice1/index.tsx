import React, { useRef } from 'react'
import { Card, CardBody, Container, Table } from 'reactstrap';
import InvoiceHeader from './InvoiceHeader';
import { Image } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import InvoiceContent from './InvoiceContent';
import InvoiceOrder from './InvoiceOrder';
import Print from '../Common/Print';

export default function Invoice1Container() {
    const componentRef = useRef<HTMLDivElement | null>(null);
    return (
        <Container>
            <div ref={componentRef}>
                <Card className="invoice-1">
                    <CardBody>
                        <Table className="table-wrapper" borderless>
                            <tbody>
                                <tr>
                                    <InvoiceHeader />
                                </tr>
                                <tr>
                                    <td>
                                        <Image className="banner-image w-100" src={dynamicImage(`email-template/invoice-1/1.png`)} alt="background" />
                                    </td>
                                </tr>
                                <tr>
                                    <InvoiceContent />
                                </tr>
                                <tr>
                                    <InvoiceOrder />
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "12px" }}>
                                    <td>
                                        <Image src={dynamicImage(`email-template/invoice-1/sign.png`)} alt="sign" />
                                        <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: 200, marginBottom: 10, }} />
                                        <span style={{ color: "rgba(82, 82, 108, 0.8)" }}>{'Authorized Sign'}</span>
                                    </td>
                                </tr>
                            </tfoot>
                        </Table>
                    </CardBody>
                </Card>
            </div>
            <Print componentRef={componentRef} />
        </Container >
    )
}

