import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { MaterialStyleTabTitle } from '../../../../Utils/Constants';
import { materialStyleSubTitle } from '../../../../Data/UiKits/Tabs';
import MaterialStyleNav from './MaterialStyleNav';
import MaterialStyleContent from './MaterialStyleContent';

export default function MaterialStyleTab() {
    const [basicTab, setBasicTab] = useState('1');

    return (
        <Col xxl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={MaterialStyleTabTitle} subTitle={materialStyleSubTitle} />
                <CardBody>
                    <MaterialStyleNav basicTab={basicTab} setBasicTab={setBasicTab} />
                    <MaterialStyleContent tabId={basicTab} />
                </CardBody>
            </Card>
        </Col>
    )
}
