import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { TrendingUp } from 'react-feather'
import { H2, Image, LI, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { customerCardData } from '../../../../../Data/Dashboard/ECommerce'

export default function CustomerCard() {
    return (
        <Col xs={12}>
            <Card className="widget-1">
                <CardBody className="order-card">
                    <div className="customer-month">
                        <span className="f-w-500 f-light">{'New Customers this month'}</span>
                        <H2>{'10,987'}</H2>
                        <div className="order-content">
                            <span className="f-light f-12 f-w-500">{'Last week '}</span>
                            <div>
                                <span className="txt-success f-12 f-w-600">
                                    <TrendingUp className='stroke-success reverse-icon' />
                                    {'-10%'}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="customer-profile">
                        <span className="f-w-500">{"Today's Heroes"}</span>
                        <UL className="d-inline-block simple-list flex-row">
                            {customerCardData.map((item) => (
                                <LI className="d-inline-block" key={item.id}>
                                    {item.text ?
                                        (<div className={`profile-letter bg-${item.text === 'A' ? "warning" : "success"}`}>
                                            <span className="f-w-600 txt-white f-12">{item.text}</span>
                                        </div>) :
                                        (
                                            <Image className="img-fluid rounded-circle" src={dynamicImage(`dashboard/user/${item.image}`)} alt="user" />
                                        )
                                    }
                                </LI>
                            ))}
                            <LI className="d-inline-block">
                                <div className="light-card profile-letter"><span className="f-w-600 f-light f-12">{'+80'}</span></div>
                            </LI>
                        </UL>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
