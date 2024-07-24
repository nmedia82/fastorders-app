import React, { useState } from 'react'
import { Btn, Image } from '../../../../../AbstractElements';
import { TopRightToastTitle } from '../../../../../Utils/Constants';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { dynamicImage } from '../../../../../Utils';

export default function TopRightToast() {
    const [visible, setVisible] = useState(false);
    const toggle = () => setVisible(!visible)
    const handleClick = () => {
        setVisible(true);
        setTimeout(() => setVisible(false), 8000);
    };
    return (
        <>
            <Btn color='primary' id='liveToast' onClick={handleClick}>{TopRightToastTitle}</Btn>
            <div className='toast-container position-fixed top-0 end-0 p-3 toast-index toast-rtl'>
                <Toast fade id='liveToast' isOpen={visible}>
                    <ToastHeader className='toast-img' toggle={toggle}>
                        <Image className='rounded me-2' src={dynamicImage(`avtar/1.jpg`)} alt='profile'/>
                        <strong className='me-auto'>{'Yuri Theme'}</strong>
                        <small>{"5 min ago"}</small>
                    </ToastHeader>
                    <ToastBody className='toast-dark'>{"Hello, I'm a web-designer."}</ToastBody>
                </Toast>
            </div>
        </>
    );
}
