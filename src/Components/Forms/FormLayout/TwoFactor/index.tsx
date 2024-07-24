import React from 'react'
import { Container, Row } from 'reactstrap'
import TwoFactorAuthentication from './TwoFactorAuthentication'
import EmailVerification from './EmailVerification'

export default function TwoFactorContainer() {
    return (
        <Container fluid>
            <Row>
                <TwoFactorAuthentication/>
                <EmailVerification/>
            </Row>
        </Container>
    )
}
