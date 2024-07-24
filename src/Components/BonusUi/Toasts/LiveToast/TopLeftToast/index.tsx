import React, { useState } from 'react'
import { Btn, Image } from '../../../../../AbstractElements';
import { TopLeftToastTitle } from '../../../../../Utils/Constants';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { dynamicImage } from '../../../../../Utils';

export default function TopLeftToast() {
    const [visible, setVisible] = useState(false);
    const toggle = () => setVisible(!visible)
    const handleClick = () => {
        setVisible(true);
        setTimeout(() => setVisible(false), 8000);
    };
    return (
        <>
            <Btn color='warning' id='liveToastBtn2' onClick={handleClick}>{TopLeftToastTitle}</Btn>
            <div className='toast-container position-fixed start-0 top-0 p-3 toast-index toast-rtl'>
                <Toast fade id='liveToastBtn2' isOpen={visible}>
                    <ToastHeader className='toast-img' toggle={toggle}>
                        <Image className='rounded me-2' src={dynamicImage(`avtar/1.jpg`)} alt='profile'/>
                        <strong className='me-auto'>{'Yuri Theme'}</strong>
                        <small className="d-sm-block d-none">{"10 min ago"}</small>
                    </ToastHeader>
                    <ToastBody className='toast-dark'>
                        <strong className='txt-success'>{"Well done!"}</strong> {"You successfully read this important message."}
                    </ToastBody>
                </Toast>
            </div>
        </>
    );
}