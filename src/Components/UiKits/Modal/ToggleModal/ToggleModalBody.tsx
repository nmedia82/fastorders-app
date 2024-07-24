import React, { useState } from 'react'
import { Btn, H6, Image, LI, UL } from '../../../../AbstractElements';
import { Cancel, ConnectNewAccount, OpenFirstModal } from '../../../../Utils/Constants';
import CommonModal from '../Common/CommonModal';
import { dynamicImage } from '../../../../Utils';
import OtherModal from './OtherModal';

export default function ToggleModalBody() {
    const [open, setOpen] = useState(false)
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const toggle2 = () => { setOpen(!open); }
    const data = {
        isOpen: modal,
        center: true,
        toggler: toggle
    }
    return (
        <>
            <Btn color='dark' onClick={toggle}>{OpenFirstModal}</Btn>
            <CommonModal modalData={data}>
                <div className='modal-toggle-wrapper'>
                    <UL className="modal-img simple-list flex-row">
                        <LI>
                            <Image src={dynamicImage(`gif/whatapp.gif`)} alt="whatsapp"/>
                        </LI>
                        <LI>
                            <Image src={dynamicImage(`gif/instagram.gif`)} alt="instagram"/>
                        </LI>
                        <LI>
                            <Image src={dynamicImage(`gif/facebook.gif`)} alt="facebook"/>
                        </LI>
                    </UL>
                    <H6>{'Remove your complete account from your phone or tablet to sign out of the Gmail app.'}</H6>
                    <Btn color='dark' className="rounded-pill w-100 mt-4" onClick={toggle2} >{ConnectNewAccount}</Btn>
                    <Btn color='transparent' className="rounded-pill w-100 dark-toggle-btn" type="button" onClick={toggle}>{Cancel}</Btn>
                </div>
            </CommonModal>
            <OtherModal modal={open} toggle={toggle2} />
        </>
    )
}
