import React, { useState } from 'react'
import { LI } from '../../../AbstractElements'
import SvgIcon from '../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons';

export default function MoonLight() {
    const [darkMode, setDarkMode] = useState(false);

    const darkModeHandler = () => {
        const body = document.body;
        if (darkMode) {
            body.classList.remove('dark-only');
            body.classList.add('light-only');
        } else {
            body.classList.remove('light-only');
            body.classList.add('dark-only');
        }
        setDarkMode(!darkMode);
    };
    return (
        <LI>
            <div className="mode">
                {darkMode ? (
                    <SvgIcon className="moon-icon d-block" iconId="moon" onClick={darkModeHandler} />
                ) : (
                    <SvgIcon className="sun-icon" iconId="sun" onClick={darkModeHandler} />
                )}
            </div>
        </LI>
    )
}
