import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import ImageGallery from './ImageGallery'

export default function GalleryGridContainer() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <ImageGallery />
                </Col>
            </Row>
        </Container>
    )
}
