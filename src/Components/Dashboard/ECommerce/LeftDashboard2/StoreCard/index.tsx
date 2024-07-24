import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { Btn, H3, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function StoreCard() {
    return (
        <Col xl={3} md={4} sm={6} className="order-xl-iv col-xl-50 order-sm-ii">
            <Card className="store-card">
                <CardHeader className="card-no-border">
                    <H3 className="f-w-600">{'We are working to boost lovely mood'}</H3>
                    <span className="f-light f-w-500 mt-2">{'Projects this month'}</span>
                    <Btn color='primary' className="btn-hover-effect">{'Create a Store'}</Btn>
                </CardHeader>
                <CardBody className="pb-1 text-center">
                    <div className="store-image">
                        <Image className="img-fluid" src={dynamicImage(`dashboard-2/bg3.gif`)} alt="store" />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
