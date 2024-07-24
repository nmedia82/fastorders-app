import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { dynamicImage, dynamicNumber } from '../../../../Utils'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { HoverEffect } from '../../../../Utils/Constants'
import { hoverImageData } from '../../../../Data/Miscellaneous/Gallery'
import { Image } from '../../../../AbstractElements'

export default function ImageHoverContainer() {
    return (
        <Container fluid>
            {dynamicNumber(15).map((item, i) => (
                <Row key={i}>
                    <Col sm={12}>
                        <Card>
                            <CommonCardHeader title={`${HoverEffect} ${item}`} />
                            <CardBody>
                                <Row id="aniimated-thumbnials" className="my-gallery gallery">
                                    {hoverImageData.map((image, index) => (
                                        <Col xs={6} md={3} key={index}>
                                            <figure itemProp="associatedMedia" className={`img-hover hover-${item}`} key={i}>
                                                <div>
                                                    <Image className='img-fluid' src={dynamicImage(`lightgallry/${image}`)} alt="Image description" />
                                                </div>
                                            </figure>
                                        </Col>
                                    ))}
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Container>
    )
}
