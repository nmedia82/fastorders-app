import React, { useState } from 'react'
import { Toast, ToastHeader } from 'reactstrap';
import { Btn, Image } from '../../../../../AbstractElements';
import { BottomLeftToastTitle } from '../../../../../Utils/Constants';
import { dynamicImage } from '../../../../../Utils';
import UniqueToastContent from '../../Common/UniqueToastContent';

export default function BottomLeftToast() {
    const [visible, setVisible] = useState(false);
    const toggle = () => setVisible(!visible);
    const handleClick = () => {
        setVisible(true);
        setTimeout(() => setVisible(false), 8000);
    };
    return (
        <>
            <Btn color='success' id='liveToastBtn3' onClick={handleClick}>{BottomLeftToastTitle}</Btn>
            <div className='toast-container position-fixed start-0 bottom-0 p-3 toast-index toast-rtl'>
                <Toast fade id='liveToast3' isOpen={visible}>
                    <ToastHeader className='toast-img' toggle={toggle}>
                        <Image className='rounded me-2' src={dynamicImage(`avtar/1.jpg`)} alt='profile'/>
                        <strong className='me-auto'>{'Yuri Theme'}</strong>
                    </ToastHeader>
                    <UniqueToastContent visible={visible} setVisible={setVisible} />
                </Toast>
            </div>
        </>
    );
}

