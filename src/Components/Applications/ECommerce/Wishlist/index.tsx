import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { WishlistTitle } from '../../../../Utils/Constants'
import WishlistCards from './WishlistCards'

export default function WishlistContainer() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <Card>
                        <CommonCardHeader title={WishlistTitle} />
                        <CardBody>
                            <WishlistCards />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
