import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { CART, CHECKOUT, FlushListTitle, PRODUCT, PRODUCTDETAILS } from '../../../../Utils/Constants'
import { flushListSubTitle } from '../../../../Data/UiKits/Lists'
import { LI, UL } from '../../../../AbstractElements'

export default function FlushList() {
    return (
        <Col xl={4} md={12}>
            <Card className='title-line'>
                <CommonCardHeader title={FlushListTitle} subTitle={flushListSubTitle} />
                <CardBody>
                    <UL className="list-group-flush list-content">
                        <LI><i className="icofont icofont-arrow-right"> </i>{PRODUCT}</LI>
                        <LI><i className="icofont icofont-arrow-right"> </i>{PRODUCTDETAILS}</LI>
                        <LI><i className="icofont icofont-arrow-right"> </i>{CART}</LI>
                        <LI><i className="icofont icofont-arrow-right"> </i>{CHECKOUT}</LI>
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}

