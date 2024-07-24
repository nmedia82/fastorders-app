import React from 'react'
import { Card, Col, Container, Row } from 'reactstrap'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader'
import { ImageCropperTitle } from '../../../Utils/Constants'
import ImageCropperBody from './ImageCropperBody'

export default function ImageCropperContainer() {
    return (
        <Container fluid>
            <div className="img-cropper">
                <Row>
                    <Col sm={12}>
                        <Card className='title-line'>
                            <CommonCardHeader title={ImageCropperTitle} />
                            <ImageCropperBody />
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
