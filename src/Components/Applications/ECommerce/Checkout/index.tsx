import React from 'react'
import { Card, CardBody, Container, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BillingDetails } from '../../../../Utils/Constants'
import CheckoutForm from './CheckoutForm'
import CheckoutDetails from './CheckoutDetails'

export default function CheckoutContainer() {
    return (
        <Container fluid>
            <Card>
                <CommonCardHeader title={BillingDetails} />
                <CardBody>
                    <Row>
                        <CheckoutForm />
                        <CheckoutDetails />
                    </Row>
                </CardBody>
            </Card>
        </Container>
    )
}
