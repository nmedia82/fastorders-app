import React from 'react'
import { Container, Row } from 'reactstrap'
import RightDashboard2 from './RightDashboard2'
import LeftDashboard2 from './LeftDashboard2'

export default function ECommerceDashboard() {
    return (
        <Container fluid className="dashboard2">
            <Row>
                <LeftDashboard2/>
                <RightDashboard2 />
            </Row>
        </Container>
    )
}
