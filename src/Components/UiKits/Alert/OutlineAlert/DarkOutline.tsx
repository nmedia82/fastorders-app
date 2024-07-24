import React, { useState } from 'react'
import { Alerts, Btn, P } from '../../../../AbstractElements';
import { ThumbsUp } from 'react-feather';

export default function DarkOutline() {
    const [active, setActive] = useState(true);
    return (
        <Alerts color='default' className={`txt-warning border-warning outline-2x alert-dismissible fade alert-icons ${active ? 'show' : 'd-none'}`}>
            <ThumbsUp />
            <P><b> {'Well done! '}</b>{'You successfully read this important message.'}</P>
            <Btn color='transperant' close onClick={() => { setActive(false) }} />
        </Alerts>
    )
}
