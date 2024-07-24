import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { dismissAlertSubTitle } from '../../../../Data/UiKits/Alert';
import { DismissingDarkAlertTitle } from '../../../../Utils/Constants';
import { Alerts, Btn, P } from '../../../../AbstractElements';
import { Heart } from 'react-feather';

export default function DismissingDarkAlert() {
    const [active, setActive] = useState(true);

    return (
        <Col sm={12} xl={6}>
            <Card className='height-equal title-line'>
                <CommonCardHeader title={DismissingDarkAlertTitle} subTitle={dismissAlertSubTitle} />
                <CardBody>
                    <Alerts color='dark' className={`dark alert-dismissible fade ${active ? 'show' : 'd-none'}`}>
                        <Heart />
                        <P>{"Check your update! You should check in on some of those fields below."}</P>
                        <Btn color='transperant' close onClick={() => { setActive(false) }} />
                    </Alerts>
                </CardBody>
            </Card>
        </Col>
    )
}

