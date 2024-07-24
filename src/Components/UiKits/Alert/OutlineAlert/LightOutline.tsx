import React, { useState } from 'react'
import { Alerts, Btn, P } from '../../../../AbstractElements';
import { Clock } from 'react-feather';

export default function LightOutline() {
    const [active, setActive] = useState(true);
    return (
        <Alerts color='default' className={`txt-secondary border-secondary alert-dismissible fade ${active ? 'show' : 'd-none'}`}>
            <Clock />
            <P>{'One of '}<strong> {"YouTube's"} </strong>{'most crucial ranking factors is Watch Time.'}</P>
            <Btn color='transperant' close onClick={() => { setActive(false) }} />
        </Alerts>
    )
}
