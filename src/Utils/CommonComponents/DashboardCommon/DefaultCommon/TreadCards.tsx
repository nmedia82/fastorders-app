import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import SvgIcon from '../../CommonIcons/CommonSvgIcons'
import { H3 } from '../../../../AbstractElements'
import { ProjectWidgetProp } from '../../../../Types/Dashboard.type'
import { treadCardsData } from '../../../../Data/Dashboard/Default'

export default function TreadCards({ colClass }: ProjectWidgetProp) {
    return (
        <Col xl={6} className={`box-col-6 ${colClass ? colClass : ''}`}>
            <Row className="tread-cards">
                {treadCardsData.map((item) => (
                    <Col xl={6} sm={6} key={item.id}>
                        <Card className="widget-1">
                            <CardBody className="common-box">
                                <div className={`widget-icon ${item.color} widget-round`}>
                                    <SvgIcon iconId={item.icon} />
                                </div>
                                <div>
                                    <H3 className="f-w-600">{item.title}</H3>
                                    <span className="f-w-500 f-light f-12">{item.subTitle}</span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>
    )
}