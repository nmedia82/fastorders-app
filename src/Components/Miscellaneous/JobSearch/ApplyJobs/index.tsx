import React from 'react'
import { Container, Row } from 'reactstrap'
import LeftSidebar from '../Common/LeftSidebar'
import ApplyForm from './ApplyForm'

export default function ApplyJobsContainer() {
    return (
        <Container fluid>
            <Row>
                <LeftSidebar />
                <ApplyForm/>
            </Row>
        </Container>
    )
}
