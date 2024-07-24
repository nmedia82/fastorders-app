import React, { useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ContactUs, Home, JsBehaviorTitle, Profile, Settings } from '../../../../Utils/Constants'
import { jsBehaviorSubTitle } from '../../../../Data/UiKits/Lists'
import { LI, UL } from '../../../../AbstractElements'
import JsBehaviorContent from './JsBehaviorContent'

export default function JsBehavior() {
    const [activeList, setActiveList] = useState('1')

    return (
        <Col sm={12} xl={12}>
            <Card className='title-line'>
                <CommonCardHeader title={JsBehaviorTitle} subTitle={jsBehaviorSubTitle} />
                <CardBody className='behaviour-list'>
                    <Row>
                        <Col sm={4}>
                            <UL>
                                <LI className={`list-group-item-action bg-primary ${activeList === '1' && 'active'}`} onClick={() => { setActiveList('1') }}>{Home}</LI>
                                <LI className={`list-group-item-action list-hover-primary ${activeList === '2' && 'active'}`} onClick={() => { setActiveList('2') }}>{Profile}</LI>
                                <LI className={`list-group-item-action list-hover-primary ${activeList === '3' && 'active'}`} onClick={() => { setActiveList('3') }}>{ContactUs}</LI>
                                <LI className={`list-group-item-action list-hover-primary ${activeList === '4' && 'active'}`} onClick={() => { setActiveList('4') }}>{Settings}</LI>
                            </UL>
                        </Col>
                        <Col sm={8}>
                            <JsBehaviorContent tabId={activeList} />
                        </Col>
                    </Row>
                </CardBody>
            </Card >
        </Col >
    )
}
