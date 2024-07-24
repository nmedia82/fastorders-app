import React from 'react'
import { H6, LI, P } from '../../../../AbstractElements'

export default function SecondaryVariation() {
    return (
        <LI className="d-flex pb-0">
            <div className="activity-dot-secondary" />
            <div className="w-100 ms-3">
                <P className="d-flex justify-content-between mb-2">
                    <span className="date-content light-background">{"20th Sep, 2024"}</span>
                    <span>{"12:00 PM"}</span>
                </P>
                <H6>{'Tello just like your product'}<span className="dot-notification" /></H6>
                <P>{"Explore a chronological journey through..."}</P>
            </div>
        </LI>
    )
}
