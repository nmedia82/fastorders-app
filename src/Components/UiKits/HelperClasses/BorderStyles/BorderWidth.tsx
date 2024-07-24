import React from 'react'
import { Col } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import { BorderWidthTitle } from '../../../../Utils/Constants'
import { dynamicNumber } from '../../../../Utils'

export default function BorderWidth() {
    return (
        <Col xxl={3} sm={6}>
            <div className='border-wrapper h-100 light-background dark-helper'>
                <H4 className="mb-3">{BorderWidthTitle}</H4>
                {dynamicNumber(10).map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-box border border-${item}`} />
                        <span>{`.border-${item}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
