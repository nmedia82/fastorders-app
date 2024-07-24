import React, { useState } from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { CommonToastProps } from '../../../../Types/BonusUi.type';

export default function CommonToast({ icon, smallClass, strongText, smallText, bodyText }: CommonToastProps) {
    const [open, setOpen] = useState(true);
    const toggle = () => setOpen(!open);
    return (
        <Toast isOpen={open}>
            <ToastHeader toggle={toggle} icon={icon}>
                <strong className='me-auto'>{strongText}</strong>
                <small className={smallClass}>{smallText}</small>
            </ToastHeader>
            <ToastBody className='toast-dark'>{bodyText}</ToastBody>
        </Toast>
    );
};
