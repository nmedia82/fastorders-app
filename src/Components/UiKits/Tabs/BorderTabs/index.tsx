import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { BorderTabsTitle } from '../../../../Utils/Constants';
import { borderTabsSubTitle } from '../../../../Data/UiKits/Tabs';
import BorderNav from './BorderNav';
import BorderTabContent from './BorderTabContent';

export default function BorderTabs() {
    const [basicTab, setBasicTab] = useState('2');

    return (
        <Col xxl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={BorderTabsTitle} subTitle={borderTabsSubTitle} />
                <CardBody>
                    <BorderNav basicTab={basicTab} setBasicTab={setBasicTab} />
                    <BorderTabContent tabId={basicTab} />
                </CardBody>
            </Card>
        </Col>
    )
}