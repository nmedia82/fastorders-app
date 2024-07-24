import React, { Fragment, useState } from 'react'
import { Btn, H6, P } from '../../../../AbstractElements';
import { ScrollingContent, UXDesigner, WedDesigner } from '../../../../Utils/Constants';
import CommonModal from '../Common/CommonModal';
import { scrollingModalData } from '../../../../Data/UiKits/Modal';
import { ArrowRightCircle } from 'react-feather';

export default function ScrollingModal() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        footer: true,
        toggler: toggle,
        title: 'Scrolling Modal',
    }
    return (
        <>
            <Btn color='success' onClick={toggle}>{ScrollingContent}</Btn>
            <CommonModal modalData={data}>
                <>
                    <H6>{WedDesigner}</H6>
                    {scrollingModalData && scrollingModalData.map((item, index) => (
                        <Fragment key={index}>
                            {index === 4 && <H6>{UXDesigner}</H6>}
                            <div className={`d-flex ${item.class}`}>
                                <div className="flex-shrink-0">
                                    <ArrowRightCircle className='svg-modal' />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <P className={index === 3 ? 'pb-4' : ''}>{item.text}</P>
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </>
            </CommonModal>
        </>
    )
}
