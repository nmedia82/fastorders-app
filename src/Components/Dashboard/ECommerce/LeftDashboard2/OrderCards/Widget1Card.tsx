import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { TrendingUp } from 'react-feather'
import { H2, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { widget1CardData } from '../../../../../Data/Dashboard/ECommerce'

export default function Widget1Card() {
    return (
        <>
            {widget1CardData.map((item) => (
                <Col xs={12} key={item.id}>
                    <Card className="widget-1">
                        <CardBody className="common-space order-card">
                            <div className={item.id === 2 ? "customer-month" : ""}>
                                <span className="f-w-500 f-light">{item.title}</span>
                                <H2>{item.orders}</H2>
                                <div className="order-content">
                                    <span className="f-light f-12 f-w-500">{'Last week '}</span>
                                    <div>
                                        <span className={`txt-${item.color} f-12 f-w-600`}>
                                            <TrendingUp className={`stroke-${item.color} ${item.id === 1 ? "reverse-icon" : ""}`} />
                                            {'-'}{item.rate}{'%'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="delivery-image">
                                <Image className="img-fluid" src={dynamicImage(`dashboard-2/orders/${item.image}`)} alt="order" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}
