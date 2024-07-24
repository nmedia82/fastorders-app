import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { VariationTimelineTitle } from '../../../../Utils/Constants'
import { variationTimelineSubTitle } from '../../../../Data/BonusUi/Timeline'
import { UL } from '../../../../AbstractElements'
import PrimaryVariation from './PrimaryVariation'
import WarningVariation from './WarningVariation'
import SecondaryVariation from './SecondaryVariation'

export default function VariationTimeline() {
    return (
        <Col xxl={4} xl={5} className='notification box-col-12'>
            <Card className='title-line'>
                <CommonCardHeader title={VariationTimelineTitle} subTitle={variationTimelineSubTitle} />
                <CardBody className='dark-timeline'>
                    <UL className='simple-list timeline-lists variation-timeline'>
                        <PrimaryVariation />
                        <WarningVariation />
                        <SecondaryVariation />
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
