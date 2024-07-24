import React, { useState } from 'react'
import { Card, CardBody, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { DefaultToastTitle } from '../../../../Utils/Constants';
import { colorsSchemeSubTitle } from '../../../../Data/BonusUi/Toasts';
import { Image } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Utils';

export default function DefaultToast() {
    const [open, setOpen] = useState(true);
    const toggle = () => setOpen(!open);
    return (
        <Col md={6}>
            <Card className='height-equal title-line'>
                <CommonCardHeader title={DefaultToastTitle} subTitle={colorsSchemeSubTitle} />
                <CardBody className='toast-rtl'>
                    <Toast className='default-show-toast' isOpen={open}>
                        <ToastHeader className='toast-img' toggle={toggle}>
                            <Image className='rounded me-2' src={dynamicImage(`avtar/1.jpg`)} alt='profile'/>
                            <strong className='me-auto'>{'Yuri Theme'}</strong>
                            <small className="d-sm-block d-none">{"10 min ago"}</small>
                        </ToastHeader>
                        <ToastBody className='toast-dark'>
                            <strong className='txt-success'>{"Well done!"}</strong> {"You successfully read this important message."}
                        </ToastBody>
                    </Toast>
                </CardBody>
            </Card>
        </Col>
    );
}
