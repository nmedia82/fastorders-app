import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addSideBarBackGround } from '../../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducer';
import { H6, LI, UL } from '../../../../AbstractElements';
import { darkColorOptions } from '../../../../Data/Layout/ThemeCustomizer';
import { DarkLayoutTitle } from '../../../../Utils/Constants';

export default function DarkLayout() {
    const dispatch = useDispatch();
    const [colorBackground1, setColorBackground1] = useState("");
    const [colorBackground2, setColorBackground2] = useState("");

    const handleColorChange = (primaryColor: string, secondaryColor: string) => {
        dispatch(addSideBarBackGround('dark-only'));
        document.body.className = 'dark-only'
        setColorBackground1(primaryColor);
        setColorBackground2(secondaryColor);
        document.documentElement.style.setProperty("--theme-default", colorBackground1);
        document.documentElement.style.setProperty("--theme-secondary", colorBackground2);
    };
    return (
        <>
            <H6>{DarkLayoutTitle}</H6>
            <UL className='layout-grid customizer-color flex-row dark'>
                {darkColorOptions.map((colorOption, index) => (
                    <LI key={index} className="color-layout" data-attr={colorOption.name} data-primary={colorOption.primary} data-secondary={colorOption.secondary}
                        onClick={() => handleColorChange(colorOption.primary, colorOption.secondary)}>
                        <div />
                    </LI>
                ))}
            </UL>
        </>
    )
}
