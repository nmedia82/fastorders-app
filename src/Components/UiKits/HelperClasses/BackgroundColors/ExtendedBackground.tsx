import React from 'react'
import { Col } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import { ExtendedBackgroundTitle, LightBackground, LightCard } from '../../../../Utils/Constants'

export default function ExtendedBackground() {
    return (
        <Col xl={4} sm={12}>
            <div className='border-wrapper h-100 border'>
                <H4 className="mb-3">{ExtendedBackgroundTitle}</H4>
                <div className="helper-common-box">
                    <div className="helper-box light-card" /><span>{LightCard}</span>
                </div>
                <div className="helper-common-box">
                    <div className="helper-box light-background border" /><span>{LightBackground}</span>
                </div>
            </div>
        </Col>
    )
}
