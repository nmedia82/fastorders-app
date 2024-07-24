import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import MasonryDescription from './MasonryDescription'

export default function MasonryDescriptionContainer() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <MasonryDescription />
                </Col>
            </Row>
        </Container>
    )
}
