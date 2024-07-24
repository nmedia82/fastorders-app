import React from 'react'
import { Container, Row } from 'reactstrap'
import LeftSideCards from './LeftSideCards'
import RightSideCards from './RightSideCards'

export default function DefaultDashboard() {
    return (
        <Container className='default-dashboard' fluid>
            <Row className='size-column'>
                <LeftSideCards />
                <RightSideCards/>
            </Row>
        </Container>
    )
}
