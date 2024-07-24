import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import BlogBoxSingle from './BlogBoxSingle'

export default function BlogSingleContainer() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <BlogBoxSingle />
                </Col>
            </Row>
        </Container>
    )
}
