import React, { Fragment, useState } from 'react'
import { Btn, H6, P } from '../../../../AbstractElements';
import { FullscreenBelowSm, UXDesigner, WebDesign, WedDesigner } from '../../../../Utils/Constants';
import CommonModal from '../Common/CommonModal';
import { ArrowRightCircle, ChevronsRight } from 'react-feather';
import { belowsmData } from '../../../../Data/UiKits/Modal';

export default function FullScreenBelowSm() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        footer: true,
        toggler: toggle,
        title: 'Full Screen Below sm',
        class: 'modal-fullscreen-sm-down',
        bodyClass: 'dark-modal',
    }
    return (
        <>
            <Btn color='info-2x' outline={true} onClick={toggle} >{FullscreenBelowSm}</Btn>
            <CommonModal modalData={data}>
                <div className="large-modal-header">
                    <ChevronsRight />
                    <H6>{WebDesign}</H6>
                </div>
                <P className="modal-padding-space">{"We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI."}</P>
                <div className="modal-details">
                    <div className="web-content">
                        <H6>{WedDesigner}</H6>
                        {belowsmData && belowsmData.map((item, index) => (
                            <Fragment key={index}>
                                <div className={`d-flex ${item.class}`}>
                                    <div className="flex-shrink-0">
                                        <ArrowRightCircle className='svg-modal' />
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <P>{item.text}</P>
                                    </div>
                                </div>
                                {index === 1 && <H6>{UXDesigner}</H6>}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </CommonModal>
        </>
    )
}
