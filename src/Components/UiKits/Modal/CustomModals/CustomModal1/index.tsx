import React, { useState } from 'react'
import { Col } from 'reactstrap';
import { Btn, Image } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import { ClickOut } from '../../../../../Utils/Constants';
import CustomModal1Body from './CustomModal1Body';
import CommonYuriModalTitle from '../Common/CommonYuriModalTitle';

export default function CustomModal1() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal) }

    return (
        <Col xl={4} md={6} className='custom-alert text-center'>
            <div className='card-wrapper border rounded-3 h-100'>
                <div className='yuri-demo-img'>
                    <CommonYuriModalTitle heading="Modal 1 -" subHeading="Profile Modal" text="Example of yuri dashboard profile card." />
                    <div className="overflow-hidden">
                        <Image className="img-fluid" src={dynamicImage(`modal/social.png`)} alt="social" />
                        <Btn color='primary' className="mx-auto mt-3" onClick={toggle}>{ClickOut}</Btn>
                    </div>
                    <CustomModal1Body modal={modal} toggle={toggle} />
                </div>
            </div>
        </Col>
    )
}