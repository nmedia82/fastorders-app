import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { CartTitle } from '../../../../Utils/Constants'
import CartTable from './CartTable'

export default function CartContainer() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <Card>
                        <CommonCardHeader title={CartTitle} />
                        <CardBody>
                            <CartTable/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
