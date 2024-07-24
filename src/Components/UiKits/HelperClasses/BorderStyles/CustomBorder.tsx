import React from 'react'
import { Col } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import { CustomBorderTitle } from '../../../../Utils/Constants'
import { dynamicNumber } from '../../../../Utils'

export default function CustomBorder() {
    return (
        <Col xxl={3} sm={6}>
            <div className='border-wrapper h-100 light-background dark-helper'>
                <H4 className="mb-3">{CustomBorderTitle}</H4>
                <div className="helper-common-box">
                    <div className="helper-box b-r-0 bg-light border"></div><span>{'.b-r-0'}</span>
                </div>
                {dynamicNumber(10).map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-box bg-light border b-r-${item}`} />
                        <span>{`.b-r-${item}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
