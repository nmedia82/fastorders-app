import React, { useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { VerticalTabTitle } from '../../../../Utils/Constants';
import { verticalTabSubTitle } from '../../../../Data/UiKits/Tabs';
import VerticalNav from './VerticalNav';
import VerticalTabContent from './VerticalTabContent';

export default function VerticalTab() {
    const [basicTab, setBasicTab] = useState('2');

    return (
        <Col sm={12} xxl={6}>
            <Card className='height-equal title-line' >
                <CommonCardHeader title={VerticalTabTitle} subTitle={verticalTabSubTitle} />
                <CardBody>
                    <Row>
                        <Col md={4} xs={12}>
                            <VerticalNav basicTab={basicTab} setBasicTab={setBasicTab} />
                        </Col>
                        <Col md={8} xs={12}>
                            <VerticalTabContent tabId={basicTab} />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
