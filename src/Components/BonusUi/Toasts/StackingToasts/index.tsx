import React, { useState } from 'react'
import { Card, CardBody, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { StackingToastsTitle } from '../../../../Utils/Constants';
import { stackingToastsSubTitle } from '../../../../Data/BonusUi/Toasts';
import { Bell } from 'react-feather';
import StackingToastsLists from './StackingToastsLists';

export default function StackingToasts() {
    const [open, setOpen] = useState(true);
    const toggle = () => setOpen(!open);
    return (
        <Col md={6}>
            <Card className='title-line'>
                <CommonCardHeader title={StackingToastsTitle} subTitle={stackingToastsSubTitle} />
                <CardBody className='toast-rtl'>
                    <div className='toast-container position-static'>
                        <Toast isOpen={open}>
                            <ToastHeader toggle={toggle} icon={<Bell className='toast-icons toast-primary'/>}>
                                <strong className='me-auto'>{'Yuri Theme'}</strong>
                                <small className='txt-danger'>{"just now"}</small>
                            </ToastHeader>
                            <ToastBody className='toast-dark'>{"Hello, I'm a web-designer."}</ToastBody>
                        </Toast>
                        <StackingToastsLists/>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
}
