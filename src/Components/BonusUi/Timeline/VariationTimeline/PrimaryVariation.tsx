import React from 'react'
import { H6, LI, P } from '../../../../AbstractElements'

export default function PrimaryVariation() {
    return (
        <LI className="d-flex">
            <div className="activity-dot-primary" />
            <div className="w-100 ms-3">
                <P className="d-flex justify-content-between mb-2">
                    <span className="date-content light-background">{"8th March, 2024"}</span>
                    <span>{"1 day ago"}</span>
                </P>
                <H6>{'Updated Product'}<span className="dot-notification" /></H6>
                <P className="f-light">{"Key milestones throughout history..."}</P>
            </div>
        </LI>
    )
}
