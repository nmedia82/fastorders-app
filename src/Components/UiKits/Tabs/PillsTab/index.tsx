import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { PillsTabTitle } from '../../../../Utils/Constants';
import { pillsTabSubTitle } from '../../../../Data/UiKits/Tabs';
import PillNav from './PillNav';
import PillTabContent from './PillTabContent';

export default function PillsTab() {
    const [basicTab, setBasicTab] = useState('3');

    return (
        <Col sm={12} xxl={6}>
            <Card className='height-equal title-line'>
                <CommonCardHeader title={PillsTabTitle} subTitle={pillsTabSubTitle} />
                <CardBody>
                    <PillNav basicTab={basicTab} setBasicTab={setBasicTab} />
                    <PillTabContent tabId={basicTab} />
                </CardBody>
            </Card>
        </Col>
    )
}
