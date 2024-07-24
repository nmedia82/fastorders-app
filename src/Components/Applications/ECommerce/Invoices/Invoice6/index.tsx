import React, { useRef } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import InvoiceSixHeader from './InvoiceSixHeader';
import UserDetails from './UserDetails';
import InvoiceSixTable from './InvoiceSixTable';
import Invoice6Button from './Invoice6Button';

export default function Invoice6Container() {
    const componentRef = useRef<HTMLDivElement | null>(null);

    return (
        <Container>
            <div ref={componentRef}>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CardBody>
                                <div className="invoice">
                                    <div>
                                        <InvoiceSixHeader />
                                        <hr />
                                        <UserDetails />
                                        <InvoiceSixTable />
                                    </div>
                                    <Invoice6Button componentRef={componentRef} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
