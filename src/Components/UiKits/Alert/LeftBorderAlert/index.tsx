import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { LeftBorderAlertTitle } from '../../../../Utils/Constants';
import { leftBorderAlertSubTitle } from '../../../../Data/UiKits/Alert';
import { Alerts, Btn, P } from '../../../../AbstractElements';
import { HelpCircle } from 'react-feather';

export default function LeftBorderAlert() {
    const [active, setActive] = useState(true);

    return (
        <Col xl={6}>
            <Card className="height-equal title-line">
                <CommonCardHeader title={LeftBorderAlertTitle} subTitle={leftBorderAlertSubTitle} />
                <CardBody className='live-dark'>
                    <Alerts color='light-secondary' className={`light alert-dismissible fade text-dark border-left-wrapper ${active ? 'show' : 'd-none'}`}>
                        <HelpCircle />
                        <P>{'You can check in on some of those fields below.'}</P>
                        <Btn color='transperant' close onClick={() => { setActive(false) }} />
                    </Alerts>
                </CardBody>
            </Card>
        </Col>
    )
}
