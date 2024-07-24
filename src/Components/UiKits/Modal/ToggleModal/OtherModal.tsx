import React from 'react'
import { CenterdModalBodyProps } from '../../../../Types/UiKits.type'
import CommonModal from '../Common/CommonModal'
import { Btn, H4, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'
import { AlreadyLeaving, Register, YesLogout } from '../../../../Utils/Constants'
import { Link } from 'react-router-dom'

export default function OtherModal({ modal, toggle }: CenterdModalBodyProps) {
    const ModalData = {
        isOpen: modal,
        center: true,
        toggler: toggle
    }
    return (
        <CommonModal modalData={ModalData}>
            <div className='modal-toggle-wrapper'>
                <UL className="modal-img simple-list">
                    <LI>
                        <Image src={dynamicImage(`gif/logout.gif`)} alt="logout"/>
                    </LI>
                </UL>
                <H4 className="pt-3 text-center">{AlreadyLeaving}</H4>
                <P className="text-center">{'Are you sure want to logout this dashboard?'}</P>
                <span className="d-block text-center mb-4">
                    {'Not a member?'}
                    <Link className="ms-1" to={`${process.env.PUBLIC_URL}/auth/sign-up`}>{Register}</Link>
                </span>
                <Btn color='dark' className="d-flex m-auto" onClick={toggle} >{YesLogout}</Btn>
            </div>
        </CommonModal>
    )
}
