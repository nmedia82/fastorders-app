import React from 'react'
import { Container, Row } from 'reactstrap'
import LeftSidebar from '../Common/LeftSidebar'
import JobDetailsRightCards from './JobDetailsRightCards'

export default function JobDetailsContainer() {
    return (
        <Container fluid>
            <Row>
                <LeftSidebar />
                <JobDetailsRightCards />
            </Row>
        </Container>
    )
}
