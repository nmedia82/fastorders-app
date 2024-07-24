import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { DismissingLightAlertTitle } from '../../../../Utils/Constants';
import { dismissAlertSubTitle } from '../../../../Data/UiKits/Alert';
import { Alerts, Btn, P } from '../../../../AbstractElements';
import { Bell } from 'react-feather';

export default function DismissingLightAlert() {
    const [active, setActive] = useState(true);

    return (
        <Col sm={12} xl={6}>
            <Card className='height-equal title-line' >
                <CommonCardHeader title={DismissingLightAlertTitle} subTitle={dismissAlertSubTitle} />
                <CardBody className='light-alert'>
                    <Alerts color='light-primary' className={`alert-dismissible fade ${active ? 'show' : 'd-none'}`}>
                        <Bell />
                        <P>{"Hidden content You should check in on some of those fields below."}</P>
                        <Btn color='transperant' close onClick={() => { setActive(false) }} />
                    </Alerts>
                </CardBody>
            </Card>
        </Col>
    )
}
