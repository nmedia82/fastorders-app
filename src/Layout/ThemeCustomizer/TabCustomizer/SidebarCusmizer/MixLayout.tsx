import React from 'react'
import { useDispatch } from 'react-redux';
import { addSideBarBackGround } from '../../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducer';
import { H6, LI, UL } from '../../../../AbstractElements';
import { MixLayoutTitle } from '../../../../Utils/Constants';
import { mixLayoutData } from '../../../../Data/Layout/ThemeCustomizer';
import CommenUL from './Common/CommenUL';

export default function MixLayout() {
    const dispatch = useDispatch();
    const handleMixLayout = (data: string) => {
        dispatch(addSideBarBackGround(data));
        document.body.className = data
    };

    return (
        <>
            <H6>{MixLayoutTitle}</H6>
            <UL className='simple-list flex-row layout-grid customizer-mix'>
                {mixLayoutData.map((layout, index) => (
                    <LI key={index} className={`color-layout`} data-attr={layout.value}
                        onClick={() => handleMixLayout(layout.value)}>
                        <div className={`header ${layout.headerClass}`}>
                            <CommenUL />
                        </div>
                        <div className='body'>
                            <UL className='simple-list flex-row'>
                                <LI className={`sidebar ${layout.sidebarClass}`}></LI>
                                <LI className={`body ${layout.bodyClass}`}></LI>
                            </UL>
                        </div>
                    </LI>
                ))}
            </UL>
        </>
    )
}
