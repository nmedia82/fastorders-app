import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { IconTabsTitle } from '../../../../Utils/Constants';
import { iconTabsSubTitle } from '../../../../Data/UiKits/Tabs';
import IconNav from './IconNav';
import IconTabContent from './IconTabContent';

export default function IconTabs() {
    const [basicTab, setBasicTab] = useState('1');

    return (
        <Col sm={12} xl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={IconTabsTitle} subTitle={iconTabsSubTitle} />
                <CardBody>
                    <IconNav basicTab={basicTab} setBasicTab={setBasicTab} />
                    <IconTabContent tabId={basicTab} />
                </CardBody>
            </Card>
        </Col>
    )
}