import React from 'react'
import { Col } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import { BorderColorTitle } from '../../../../Utils/Constants'
import { borderColorData } from '../../../../Data/UiKits/HelperClasses'

export default function BorderColor() {
    return (
        <Col xxl={3} sm={6}>
            <div className='border-wrapper h-100 light-background dark-helper'>
                <H4 className="mb-3">{BorderColorTitle}</H4>
                {borderColorData.slice(0,7).map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-box border border-${item.color}`} />
                        <span>{`.border-${item.color}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
