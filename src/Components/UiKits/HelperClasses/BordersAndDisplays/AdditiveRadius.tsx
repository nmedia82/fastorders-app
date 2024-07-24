import React from 'react'
import { Col } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import { AdditiveRadiusTitle } from '../../../../Utils/Constants'
import { additiveRadiusData } from '../../../../Data/UiKits/HelperClasses'

export default function AdditiveRadius() {
    return (
        <Col xl={4} sm={12}>
            <div className='border-wrapper h-100 border'>
                <H4 className="mb-3">{AdditiveRadiusTitle}</H4>
                {additiveRadiusData && additiveRadiusData.map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-radius radius-wrapper ${item}`} /><span>{`.${item}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
