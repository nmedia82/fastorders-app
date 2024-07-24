import React from 'react'
import { Col } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import { DarkBackgroundTitle } from '../../../../Utils/Constants'
import { borderColorData } from '../../../../Data/UiKits/HelperClasses'

export default function DarkBackground() {
    return (
        <Col xl={4} sm={6}>
            <div className='border-wrapper h-100 border'>
                <H4 className="mb-3">{DarkBackgroundTitle}</H4>
                {borderColorData && borderColorData.map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-box bg-${item.color}`} /><span>{`.bg-${item.color}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
