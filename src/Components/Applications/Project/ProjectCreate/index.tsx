import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CreateNewProjectForm from './CreateNewProjectForm'

export default function ProjectCreateContainer() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <Card>
                        <CardBody>
                            <CreateNewProjectForm />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
