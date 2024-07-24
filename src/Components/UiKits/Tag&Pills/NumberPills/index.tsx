import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { NumberOfPills } from '../../../../Utils/Constants'
import { badgesData, numberPillsSubTitle } from '../../../../Data/UiKits/Tag&Pills'
import { Badges } from '../../../../AbstractElements'

export default function NumberPills() {
    return (
        <Col sm={12} xl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={NumberOfPills} subTitle={numberPillsSubTitle} />
                <CardBody>
                    <div className='badge-spacing'>
                        {badgesData && badgesData.map((item) => (
                            <Badges color={item.class} className='rounded-circle badge-p-space' key={item.id}>{item.id}</Badges>
                        ))}
                    </div>
                </CardBody>
            </Card >
        </Col >
    )
}
