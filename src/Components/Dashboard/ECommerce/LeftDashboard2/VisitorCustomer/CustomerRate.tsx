import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { H2, H3, ProgressBar } from '../../../../../AbstractElements'
import { CustomerRateTitle, Href } from '../../../../../Utils/Constants'
import SvgIcon from '../../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'
import { customerRateData } from '../../../../../Data/Dashboard/ECommerce'

export default function CustomerRate() {
    return (
        <Col xs={12} className="col-xl-50">
            <Card className="height-equal title-line">
                <CardHeader className="card-no-border">
                    <div className="header-top">
                        <H2>{CustomerRateTitle}</H2>
                        <div className="card-header-right-icon customer-header">
                            <a className="link-stroke-icon" href={Href}>{'Live view'}
                                <SvgIcon iconId='eye-contact' />
                            </a>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="pt-0">
                    <Row>
                        {customerRateData.map((item) => (
                            <Col sm={6} key={item.id}>
                                <div className="customer-rate">
                                    <ProgressBar value={76.8} className={item.id === 2 ? 'progress_1' : ''} />
                                    <span className="f-light f-12 f-w-500">{item.text}</span>
                                    <H3 className="f-w-600">{item.rate}{'%'}</H3>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
