import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BasicModalTitle } from '../../../../Utils/Constants'
import { basicModalSubTitle } from '../../../../Data/UiKits/Modal'
import SimpleModal from './SimpleModal'
import ScrollingModal from './ScrollingModal'
import TooltipModal from './TooltipModal'
import YuriModal from './YuriModal'

export default function BasicModal() {
    return (
        <Col lg={6}>
            <Card className='title-line'>
                <CommonCardHeader title={BasicModalTitle} subTitle={basicModalSubTitle} />
                <CardBody className='badge-spacing'>
                    <SimpleModal />
                    <ScrollingModal />
                    <TooltipModal />
                    <YuriModal />
                </CardBody>
            </Card>
        </Col>
    )
}
