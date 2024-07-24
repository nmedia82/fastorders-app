import React from 'react'
import { useDispatch } from 'react-redux';
import ConfigDB from '../../../../Config/ThemeConfig';
import { addSidebarIconType } from '../../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducer';
import { Badges, H6, LI, UL } from '../../../../AbstractElements';
import { SidebarIconTitle } from '../../../../Utils/Constants';
import CommenUL from './Common/CommenUL';

export default function SideBarIconType() {
    const sideBarIconType = ConfigDB.settings.sidebar.iconType;
    const dispatch = useDispatch();
    const handleSideBarIconType = (type: string) => {
        dispatch(addSidebarIconType(type));
    };
    return (
        <>
            <H6>{SidebarIconTitle}</H6>
            <UL className='sidebar-setting layout-grid flex-row simple-list'>
                <LI data-attr={'stroke-svg'} className={`${sideBarIconType === 'stroke-svg' ? 'active' : ''}`}
                    onClick={() => handleSideBarIconType('stroke-svg')}>
                    <div className='header bg-light'>
                        <CommenUL />
                    </div>
                    <div className='body bg-light'>
                        <Badges color='primary'>{'Stroke'}</Badges>
                    </div>
                </LI>
            </UL>
        </>
    )
}

