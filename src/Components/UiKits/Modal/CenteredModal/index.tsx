import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { CenteredModalTitle, VerticallyCentered } from '../../../../Utils/Constants';
import { centeredModalSubTitle } from '../../../../Data/UiKits/Modal';
import { Btn } from '../../../../AbstractElements';
import CenterdModalBody from './CenterdModalBody';

export default function CenteredModal() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }

    return (
        <Col xl={4}>
            <Card className='title-line'>
                <CommonCardHeader title={CenteredModalTitle} subTitle={centeredModalSubTitle} />
                <CardBody>
                    <Btn color='success' onClick={toggle}>{VerticallyCentered}</Btn>
                    <CenterdModalBody modal={modal} toggle={toggle} />
                </CardBody>
            </Card>
        </Col>
    )
}
