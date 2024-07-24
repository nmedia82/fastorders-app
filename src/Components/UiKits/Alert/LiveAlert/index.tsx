import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { liveAlertSubTitle } from '../../../../Data/UiKits/Alert';
import { LiveAlertText, LiveAlertTitle, ShowLiveAlert } from '../../../../Utils/Constants';
import { Alerts, Btn } from '../../../../AbstractElements';

export default function LiveAlert() {
    const [data, setData] = useState<number[]>([])
    const removeValue = (item: number) => {
        setData(data.filter((value, index) => {
            return value !== item;
        }));
    }

    return (
        <Col xl={6}>
            <Card className="height-equal title-line">
                <CommonCardHeader title={LiveAlertTitle} subTitle={liveAlertSubTitle} />
                <CardBody className='live-dark'>
                    {data.map((item: any, index: number) => (
                        <Alerts color='light-secondary' className='alert-dismissible' key={index}>
                            <div>{LiveAlertText}</div>
                            <Btn color='transperant' close onClick={() => { removeValue(item) }} />
                        </Alerts>
                    ))}
                    <Btn color='danger' onClick={() => { setData((prev: any) => [...prev, prev.length + 1]) }}>{ShowLiveAlert}</Btn>
                </CardBody>
            </Card>
        </Col>
    )
}

