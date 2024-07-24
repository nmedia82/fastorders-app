import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DefaultListTitle, ECommerce, LogoDesign, SEO, WebDesignDevelop } from '../../../../Utils/Constants'
import { defaultListSubTitle } from '../../../../Data/UiKits/Lists'
import { LI, UL } from '../../../../AbstractElements'

export default function DefaultList() {
    return (
        <Col xl={4} md={6}>
            <Card className='title-line'>
                <CommonCardHeader title={DefaultListTitle} subTitle={defaultListSubTitle} />
                <CardBody>
                    <UL className='list-content'>
                        <LI> <i className="icofont icofont-arrow-right" />{LogoDesign}</LI>
                        <LI> <i className="icofont icofont-arrow-right" />{WebDesignDevelop}</LI>
                        <LI> <i className="icofont icofont-arrow-right" />{ECommerce}</LI>
                        <LI> <i className="icofont icofont-arrow-right" />{SEO}</LI>
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
