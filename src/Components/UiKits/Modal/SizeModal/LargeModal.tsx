import React, { Fragment, useState } from 'react'
import { Btn, H6, P } from '../../../../AbstractElements';
import { LargeModalButton, StartYourGoals } from '../../../../Utils/Constants';
import CommonModal from '../Common/CommonModal';
import { ChevronsRight, CornerUpRight } from 'react-feather';
import { largeModalData } from '../../../../Data/UiKits/Modal';

export default function LargeModal() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        toggler: toggle,
        title: 'Large modal',
        size: 'lg',
        bodyClass: 'dark-modal',
    }
    return (
        <>
            <Btn color='success' onClick={toggle}>{LargeModalButton}</Btn>
            <CommonModal modalData={data} >
                <div className="large-modal-header">
                    <ChevronsRight />
                    <H6>{StartYourGoals}</H6>
                </div>
                <>
                    {largeModalData && largeModalData.map((item, index) => (
                        <Fragment key={index}>
                            {index <= 2 && <P className='modal-padding-space mb-0'>{item.text}</P>}
                            {index > 2 &&
                                <div className="large-modal-body">
                                    <CornerUpRight />
                                    <P className="ps-1">{item.text}</P>
                                </div>
                            }
                        </Fragment>
                    ))}
                </>
            </CommonModal>
        </>
    )
}
