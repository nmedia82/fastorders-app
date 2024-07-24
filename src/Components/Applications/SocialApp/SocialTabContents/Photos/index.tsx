/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Link } from 'react-router-dom'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { H4, P } from '../../../../../AbstractElements'
import { socialPhotosData } from '../../../../../Data/Applications/SocialApp'
import { dynamicImage } from '../../../../../Utils'
import { Href } from '../../../../../Utils/Constants'

export default function Photos() {
    return (
        <Row>
            <Col sm={12}>
                <Card>
                    <CardBody className="my-gallery gallery-with-description">
                        <Row>
                            <Gallery>
                                {socialPhotosData.map((item) => (
                                    <Col xl={3} sm={6} key={item.id}>
                                        <figure>
                                            <Item original={dynamicImage(`big-lightgallry/${item.image}`)}>
                                                {({ ref, open }) => (
                                                    <Link to={Href} onClick={open}>
                                                        <img className="img-thumbnail border-bottom-0 p-2 rounded-0 rounded-top-1" ref={ref as React.MutableRefObject<HTMLImageElement>} src={dynamicImage(`big-lightgallry/${item.image}`)} alt="Image description" />
                                                        <div className="caption border-top-0 p-2">
                                                            <H4>{item.title}</H4>
                                                            <P>{"An admin theme is a visually beautiful and practical design template created especially for a website's or application's backend."}</P>
                                                        </div>
                                                    </Link>
                                                )}
                                            </Item>
                                        </figure>
                                    </Col>
                                ))}
                            </Gallery>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

