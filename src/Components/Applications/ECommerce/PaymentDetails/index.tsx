import React from 'react'
import { Container, Row } from 'reactstrap'
import CreditCard from './CreditCard'
import DebitCard from './DebitCard'
import Cod from './Cod'
import Emi from './Emi'
import NetBanking from './NetBanking'

export default function PaymentDetailsContainer() {
    return (
        <Container className="credit-card" fluid>
            <Row>
                <CreditCard/>
                <DebitCard/>
                <Cod/>
                <Emi/>
                <NetBanking/>
            </Row>
        </Container>
    )
}
