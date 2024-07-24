import React, { useState } from 'react'
import { Col } from 'reactstrap';
import { Btn, Image } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import { ClickOut } from '../../../../../Utils/Constants';
import CustomModal3Body from './CustomModal3Body';
import CommonYuriModalTitle from '../Common/CommonYuriModalTitle';

export default function CustomModal3() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal) }

    return (
        <Col xl={4} md={12} className='custom-alert text-center'>
            <div className='card-wrapper border rounded-3 h-100'>
                <div className='yuri-demo-img'>
                    <CommonYuriModalTitle heading="Modal 3 -" subHeading="Balance Modal" text="Example of yuri dashboard balance card." />
                    <div className="overflow-hidden balance-modal">
                        <Image className="img-fluid" src={dynamicImage(`modal/balance.png`)} alt="balance" />
                        <Btn color='primary' className="mx-auto mt-3" onClick={toggle} >{ClickOut}</Btn>
                    </div>
                    <CustomModal3Body modal={modal} toggle={toggle} />
                </div>
            </div>
        </Col>
    )
}