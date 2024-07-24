import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../ReduxToolkit/Store';
import { setLayoutType } from '../../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducer';
import { Badges, H6, LI, UL } from '../../../../AbstractElements';
import { LayoutTypeTitle } from '../../../../Utils/Constants';
import { layoutTypeData } from '../../../../Data/Layout/ThemeCustomizer';
import CommenUL from './Common/CommenUL';

export default function LayoutType() {
    const { layout_type } = useSelector((state: RootState) => state.themeCustomizer)
    const dispatch = useDispatch();
    const handleLayout = (layout: string) => {
        dispatch(setLayoutType(layout));
        if (layout === 'rtl') {
            document.body.classList.add('rtl');
            document.body.classList.remove('ltr');
            document.body.classList.remove('box-layout');
            document.documentElement.dir = 'rtl';
        } else if (layout === 'ltr') {
            document.body.classList.add('ltr');
            document.body.classList.remove('rtl');
            document.body.classList.remove('box-layout');
            document.documentElement.dir = 'ltr';
        } else if (layout === 'box-layout') {
            document.body.classList.remove('ltr');
            document.body.classList.remove('rtl');
            document.body.classList.add('box-layout');
            document.body.classList.remove('offcanvas');
            document.documentElement.dir = 'ltr';
        }
    };
    return (
        <>
            <H6>{LayoutTypeTitle}</H6>
            <UL className='main-layout layout-grid flex-row simple-list'>
                {layoutTypeData.map(({ type, label }) => (
                    <LI key={type} data-attr={type} className={`${layout_type === type ? 'active' : ''}`} onClick={() => handleLayout(type)}>
                        <div className='header bg-light'>
                            <CommenUL />
                        </div>
                        <div className='body'>
                            <UL className='simple-list flex-row'>
                                <LI className={type === 'rtl' ? 'bg-light body' : 'bg-light sidebar'}>
                                    {label === 'RTL' ? <Badges color='primary'>{label}</Badges> : ''}
                                </LI>
                                <LI className={type === 'rtl' ? 'bg-light sidebar' : 'bg-light body'}>
                                    {label !== 'RTL' ? <Badges color='primary'>{label}</Badges> : ''}
                                </LI>
                            </UL>
                        </div>
                    </LI>
                ))}
            </UL>
        </>
    )
}

