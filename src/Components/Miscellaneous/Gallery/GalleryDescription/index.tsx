import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import ImageGalleryDescription from './ImageGalleryDescription'

export default function GalleryDescriptionContainer() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <ImageGalleryDescription />
                </Col>
            </Row>
        </Container>
    )
}
