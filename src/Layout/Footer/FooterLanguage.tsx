import React, { useState } from 'react'
import { LI, UL } from '../../AbstractElements'
import { useTranslation } from 'react-i18next';
import { languagesData } from '../../Data/Layout/RightHeader';

export default function FooterLanguage() {
    const [langdropdown, setLangdropdown] = useState(false);
    const [selected, setSelected] = useState('en');
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setSelected(lng);
    };
    const languageSelection = () => {
        setLangdropdown(!langdropdown);
    };
    return (
        <UL className="footer-language simple-list">
            <LI className="language-nav">
                <div className={`translate_wrapper ${langdropdown ? 'active' : ''}`}>
                    <div className="current_lang" onClick={languageSelection}>
                        <span className="lang-txt f-light f-w-500">{selected}</span>
                        <span className="ms-2"> <i className="fa fa-caret-down txt-primary"></i></span>
                    </div>
                    <div className={`more_lang ${langdropdown ? 'active' : ''}`}>
                        {languagesData.map((item, index) => (
                            <div className="lang" data-value={item.language} key={index} onClick={() => changeLanguage(item.data)}>
                                <span className="lang-txt">{item.language}
                                    <span> ({item.data})</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </LI>
        </UL>
    )
}