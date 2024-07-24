import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BordersAndDisplaysTitle } from '../../../../Utils/Constants'
import { bordersAndDisplaySubTitle } from '../../../../Data/UiKits/HelperClasses'
import AdditiveBorder from './AdditiveBorder'
import SubtractiveBorder from './SubtractiveBorder'
import AdditiveRadius from './AdditiveRadius'

export default function BordersAndDisplays() {
    return (
        <Col xs={12}>
            <Card className='title-line'>
                <CommonCardHeader title={BordersAndDisplaysTitle} subTitle={bordersAndDisplaySubTitle} />
                <CardBody>
                    <Row className='g-3'>
                        <AdditiveBorder />
                        <SubtractiveBorder />
                        <AdditiveRadius />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
