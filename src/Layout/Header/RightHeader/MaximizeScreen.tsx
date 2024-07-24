import React, { useState } from 'react'
import { Maximize } from 'react-feather';
import { LI } from '../../../AbstractElements';
import { Href } from '../../../Utils/Constants';

export default function MaximizeScreen() {
    const [fullScreen, setFullScreen] = useState(false);

    const fullScreenHandler = (isFullScreen: boolean) => {
        setFullScreen(isFullScreen);
        if (isFullScreen) {
            document.documentElement.requestFullscreen();
        } else {
            document?.exitFullscreen();
        }
    };

    return (
        <LI>
            <a className="text-dark" onClick={() => fullScreenHandler(!fullScreen)} href={Href}>
                <Maximize />
            </a>
        </LI>
    )
}
