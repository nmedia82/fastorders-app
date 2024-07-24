import React, { useState } from 'react'
import { Card, CardBody, Col, Toast, ToastHeader } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { UniqueToastTitle } from '../../../../Utils/Constants';
import { colorsSchemeSubTitle } from '../../../../Data/BonusUi/Toasts';
import { Image } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Utils';
import UniqueToastContent from '../Common/UniqueToastContent';

export default function UniqueToast() {
    const [visible, setVisible] = useState(true);
    const toggle = () => setVisible(!visible);
    return (
        <Col md={6}>
            <Card className='height-equal title-line'>
                <CommonCardHeader title={UniqueToastTitle} subTitle={colorsSchemeSubTitle} />
                <CardBody className='toast-rtl'>
                    <Toast isOpen={visible} fade>
                        <ToastHeader className='toast-img' toggle={toggle}>
                            <Image className='rounded me-2' src={dynamicImage(`avtar/1.jpg`)} alt='profile'/>
                            <strong className='me-auto'>{'Yuri Theme'}</strong>
                        </ToastHeader>
                        <UniqueToastContent visible={visible} setVisible={setVisible} />
                    </Toast>
                </CardBody>
            </Card>
        </Col>
    );
}
