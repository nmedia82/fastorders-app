import React from 'react'
import { Container, Row } from 'reactstrap'
import SocialProfileCards from '../../../../Utils/CommonComponents/CommonUserProfile/SocialProfileCards'

export default function UserCardsContainer() {
    return (
        <Container fluid>
            <Row>
                <SocialProfileCards/>
            </Row>
        </Container>
    )
}
