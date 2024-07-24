import React from 'react'
import { Col } from 'reactstrap'
import { H2, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function OfferBanner() {
    return (
        <Col xs={12} xl={100} className="order-xl-i">
            <div className="offer-banner">
                <div className="offer-content">
                    <H2>{'20% Off Themes'}</H2>
                    <P className="f-w-500 f-12">{'Get all the latest wordpress theme and plugin coupon in this board.'}</P>
                </div>
                <Image className="img-fluid" src={dynamicImage(`dashboard/banner.png`)} alt="vector" />
            </div>
        </Col>
    )
}
