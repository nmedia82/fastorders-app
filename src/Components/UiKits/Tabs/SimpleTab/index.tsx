import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { SimpleTabTitle } from '../../../../Utils/Constants';
import { simpleTabSubTitle } from '../../../../Data/UiKits/Tabs';
import SimpleNav from './SimpleNav';
import SimpleTabContent from './SimpleTabContent';

export default function SimpleTab() {
    const [basicTab, setBasicTab] = useState('2');

    return (
        <Col sm={12} xl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={SimpleTabTitle} subTitle={simpleTabSubTitle} />
                <CardBody>
                    <SimpleNav basicTab={basicTab} setBasicTab={setBasicTab} />
                    <SimpleTabContent tabId={basicTab} />
                </CardBody>
            </Card>
        </Col>
    )
}