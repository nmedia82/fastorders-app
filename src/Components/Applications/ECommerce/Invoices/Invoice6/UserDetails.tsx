import React from 'react'
import { Col, Row } from 'reactstrap'
import { H4, H6, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function UserDetails() {
    return (
        <Row>
            <Col md={4}>
                <div className="d-flex">
                    <div className="media-left">
                        <Image className="media-object rounded-circle img-60" src={dynamicImage(`user/1.jpg`)} alt="user" />
                    </div>
                    <div className="flex-grow-1 m-l-20">
                        <H4 className="media-heading">{'Angel Deo'}</H4>
                        <P>{'AngelDeo@gmail.com'}<br /><span>{'555-555-5555'}</span></P>
                    </div>
                </div>
            </Col>
            <Col md={8}>
                <div className="text-md-end" id="project">
                    <H6>{'Project Description'}</H6>
                    <P>{"You're Only As Good As Your Last Collection, Which Is An Enormous Pressure. Jeans Represent Democracy In Fashion.Fashion Is About Dressing According To What's Fashionable."}</P>
                </div>
            </Col>
        </Row>
    )
}
