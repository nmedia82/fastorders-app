import React from 'react'
import { Col } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import { LightBackgroundsTitle } from '../../../../Utils/Constants'
import { borderColorData } from '../../../../Data/UiKits/HelperClasses'

export default function LightBackground() {
    return (
        <Col xl={4} sm={6}>
            <div className='border-wrapper h-100 border'>
                <H4 className="mb-3">{LightBackgroundsTitle}</H4>
                {borderColorData && borderColorData.map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-box alert-light-${item.color}`} /><span>{`.alert-light-${item.color}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
