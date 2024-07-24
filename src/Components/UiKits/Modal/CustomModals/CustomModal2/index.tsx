import React, { useState } from 'react'
import { Col } from 'reactstrap';
import { Btn, H3, Image, P } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import { ClickOut, YuriLogin } from '../../../../../Utils/Constants';
import CommonModal from '../../Common/CommonModal';
import StaticModalForm from '../../Common/StaticModalForm';
import CommonYuriModalTitle from '../Common/CommonYuriModalTitle';

export default function CustomModal2() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal) }
    const data = {
        isOpen: modal,
        center: true,
        toggler: toggle,
        bodyClass: 'dark-sign-up social-profile text-start'
    }
    return (
        <Col xl={4} md={6} className='custom-alert text-center'>
            <div className='card-wrapper border rounded-3 h-100'>
                <div className='yuri-demo-img'>
                    <CommonYuriModalTitle heading="Modal 2 -" subHeading="Result Modal" text="Example of yuri login form." />
                    <div className="overflow-hidden">
                        <Image className="img-fluid" src={dynamicImage(`modal/learning.png`)} alt="learning" />
                        <Btn color='primary' className="mx-auto mt-3" onClick={toggle}>{ClickOut}</Btn>
                    </div>
                    <CommonModal modalData={data}>
                        <div className="modal-toggle-wrapper">
                            <H3 className="f-w-600">{YuriLogin}</H3>
                            <P>{'Fill in your information below to continue.'}</P>
                            <StaticModalForm toggle={toggle} />
                        </div>
                    </CommonModal>
                </div>
            </div>
        </Col>
    )
}