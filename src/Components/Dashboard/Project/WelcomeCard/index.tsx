import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Btn, H2, H4, Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function WelcomeCard() {
    return (
        <Col xl={3} sm={6}>
            <Card className="welcome-card">
                <CardBody>
                    <H4 className="f-light f-w-500 mb-1">{'Have you tried'}</H4>
                    <H2 className="mb-3">{'Upgrade Your Plan'}</H2>
                    <Btn color='primary' className="btn-hover-effect">{'Upgrade Plan'}</Btn>
                </CardBody>
                <div className="welcome-image">
                    <Image className="img-fluid" src={dynamicImage(`dashboard-3/1.png`)} alt="upgrade" />
                </div>
            </Card>
        </Col>
    )
}
