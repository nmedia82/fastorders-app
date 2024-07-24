import React from 'react'
import { Container, Row } from 'reactstrap'
import AvatarSizes from './AvatarSizes'
import StatusIndicator from './StatusIndicator'
import Shapes from './Shapes'
import Ratio from './Ratio'
import Grouping from './Grouping'

export default function AvatarsContainer() {
    return (
        <Container fluid>
            <div className="user-profile">
                <Row>
                    <AvatarSizes />
                    <StatusIndicator />
                    <Shapes />
                    <Ratio />
                    <Grouping />
                </Row>
            </div>
        </Container>
    )
}
