import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CardHeaderSpan from '../../../../../Utils/CommonComponents/CardHeaderSpan'
import { SatisfactionRateTitle } from '../../../../../Utils/Constants'
import SvgIcon from '../../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'
import { H2 } from '../../../../../AbstractElements'

export default function RateColumn() {
    return (
        <Col xl={6} sm={6} className="rate-column">
            <Card className="title-line widget-1">
                <CardHeaderSpan headerClass='card-no-border' heading={SatisfactionRateTitle} />
                <CardBody className="pt-0">
                    <div className="light-card satisfaction-box common-box">
                        <div className="widget-icon primary widget-round">
                            <SvgIcon iconId='like-shape' />
                        </div>
                        <div>
                            <H2>{'89,786(82%)'}</H2><span className="f-light f-w-500 f-12">{'Vote by Consumer'}</span>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
