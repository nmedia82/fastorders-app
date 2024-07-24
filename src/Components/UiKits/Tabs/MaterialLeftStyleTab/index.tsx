import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { MaterialLeftStyleTabTitle } from '../../../../Utils/Constants';
import { materialLeftSubTitle } from '../../../../Data/UiKits/Tabs';
import MaterialLeftNav from './MaterialLeftNav';
import MaterialContent from './MaterialContent';

export default function MaterialLeftStyleTab() {
    const [basicTab, setBasicTab] = useState('1');

    return (
        <Col xxl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={MaterialLeftStyleTabTitle} subTitle={materialLeftSubTitle} />
                <CardBody>
                    <div className='tabs-responsive-side'>
                        <div className='material-wrapper'>
                            <MaterialLeftNav basicTab={basicTab} setBasicTab={setBasicTab} />
                            <div className='material-content'>
                                <MaterialContent tabId={basicTab} />
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

