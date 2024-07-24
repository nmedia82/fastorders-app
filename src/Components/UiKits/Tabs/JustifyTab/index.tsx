import { useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { P } from '../../../../AbstractElements';
import { justifyTabSubTitle } from '../../../../Data/UiKits/Tabs';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { AdminProfile, JustifyTabTitle } from '../../../../Utils/Constants';
import JustifyNav from './JustifyNav';
import JustifyTabContent from './JustifyTabContent';

export default function JustifyTab() {
    const [basicTab, setBasicTab] = useState('1');

    return (
        <Col xxl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={JustifyTabTitle} subTitle={justifyTabSubTitle} />
                <CardBody>
                    <div className='d-flex justify-content-between align-items-center flex-wrap gap-2 pb-2 p-0 border-bottom'>
                        <P> <em className="txt-danger">{AdminProfile}</em></P>
                        <JustifyNav basicTab={basicTab} setBasicTab={setBasicTab} />
                    </div>
                    <CardBody className='px-0 pb-0'>
                        <JustifyTabContent tabId={basicTab} />
                    </CardBody>
                </CardBody>
            </Card>
        </Col>
    )
}
