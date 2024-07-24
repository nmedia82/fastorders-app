import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import MasonryGallery from './MasonryGallery'

export default function MasonryGalleryContainer() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12} className='box-col-12'>
                    <MasonryGallery />
                </Col>
            </Row>
        </Container>
    )
}
