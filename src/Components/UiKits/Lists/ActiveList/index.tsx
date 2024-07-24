import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ActiveListTitle, ApexCharts, StarterKits, UIKits, WowAnimations } from '../../../../Utils/Constants'
import { activeListSubTitle } from '../../../../Data/UiKits/Lists'
import { LI, UL } from '../../../../AbstractElements'

export default function ActiveList() {
    return (
        <Col xl={4} md={6}>
            <Card className='title-line'>
                <CommonCardHeader title={ActiveListTitle} subTitle={activeListSubTitle} />
                <CardBody>
                    <UL className='list-content'>
                        <LI className=" active bg-warning-light"><i className="icofont icofont-arrow-right" /> {UIKits}</LI>
                        <LI><i className="icofont icofont-arrow-right" /> {WowAnimations}</LI>
                        <LI> <i className="icofont icofont-arrow-right" /> {ApexCharts}</LI>
                        <LI><i className="icofont icofont-arrow-right" /> {StarterKits}</LI>
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
