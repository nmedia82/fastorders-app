import React, { useState } from 'react'
import { Card, CardBody, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { TranslucentToastsTitle } from '../../../../Utils/Constants';
import { translucentToastSubTitle } from '../../../../Data/BonusUi/Toasts';
import { Disc } from 'react-feather';
import TranslucentToastsList from './TranslucentToastsList';

export default function TranslucentToasts() {
    const [open, setOpen] = useState(true);
    const toggle = () => setOpen(!open);
    return (
        <Col md={6}>
            <Card className='overflow-hidden title-line'>
                <CommonCardHeader title={TranslucentToastsTitle} subTitle={translucentToastSubTitle} />
                <CardBody className='toast-rtl bg-dark'>
                    <div className='toast-container'>
                        <Toast isOpen={open} >
                            <ToastHeader toggle={toggle} icon={<Disc className='toast-icons toast-info'/>}>
                                <strong className='me-auto'>{'Yuri Theme'}</strong>
                                <small className='text-muted d-sm-block d-none'>{"11 mins ago"}</small>
                            </ToastHeader>
                            <ToastBody className='toast-dark'>{"Hello, I'm a web-designer."}</ToastBody>
                        </Toast>
                        <TranslucentToastsList/>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
}