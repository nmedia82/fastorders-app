import React, { useState } from 'react'
import { Alerts, Btn, P } from '../../../../AbstractElements';

export default function TimeAlert() {
    const [active, setActive] = useState(true);
    return (
        <Alerts color='default' className={`border-primary alert-dismissible fade p-0 ${active ? 'show' : 'd-none'}`}>
            <div className="alert-arrow bg-primary">
                <i className="icon-timer" />
            </div>
            <P>{'Your time Over after '} <strong className="txt-dark">{'5'}</strong> {' minute'}</P>
            <Btn className="p-0 border-0 me-2 ms-auto" onClick={() => { setActive(false) }}>
                <span className="bg-primary px-3 py-1">{'Check'}</span>
            </Btn>
        </Alerts>
    )
}
