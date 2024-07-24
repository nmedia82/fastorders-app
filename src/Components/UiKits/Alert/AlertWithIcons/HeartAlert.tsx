import React, { useState } from 'react'
import { Alerts, Btn, P } from '../../../../AbstractElements'

export default function HeartAlert() {
    const [active, setActive] = useState(true)
    return (
        <Alerts color='default' className={`border-secondary alert-dismissible fade p-0 mb-0 ${active ? 'show' : 'd-none'}`}>
            <div className="alert-arrow bg-secondary">
                <i className="icon-heart" />
            </div>
            <P>{'Oh snap! Change a few things up '}<strong className="txt-dark">{' Notification check'}</strong></P>
            <Btn className="p-0 border-0 me-2 ms-auto" onClick={() => { setActive(false) }} >
                <span className="bg-secondary text-white px-3 py-1" aria-hidden="true">{'Alert'}</span>
            </Btn>
        </Alerts>
    )
}