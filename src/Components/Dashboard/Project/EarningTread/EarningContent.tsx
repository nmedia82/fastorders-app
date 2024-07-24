import React from 'react'
import { Col, Row } from 'reactstrap'
import { H2, LI, UL } from '../../../../AbstractElements'
import { TrendingUp } from 'react-feather'
import { earningRightContent } from '../../../../Data/Dashboard/Project'

export default function EarningContent() {
    return (
        <Row className="gy-2">
            <Col xxl={6} md={12} sm={6}>
                <div className="earning-left-content">
                    <H2>{'$342,091.56'}</H2>
                    <div>
                        <span className="f-12 f-w-500 txt-warning">
                            <TrendingUp className='me-1' />{'+20%'}
                        </span>
                        <span className="f-12 f-w-500 f-light ms-2">{'Than Last Week'}</span>
                    </div>
                </div>
            </Col>
            <Col xxl={6} md={12} sm={6} className="d-xxl-block d-xl-none">
                <UL className="earning-right-content simple-list">
                    {earningRightContent.map((item) => (
                        <LI key={item.id}>
                            <span className="f-12 f-w-500 f-light">{item.time}</span>
                            <span className={`f-12 f-w-500 txt-${item.color}`}>{item.earning}</span>
                        </LI>
                    ))}
                </UL>
            </Col>
        </Row>
    )
}
