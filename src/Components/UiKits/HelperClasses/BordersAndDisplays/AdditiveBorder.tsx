import React from 'react'
import { Col } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import { AdditiveBorderTitle } from '../../../../Utils/Constants'
import { additiveBorderData } from '../../../../Data/UiKits/HelperClasses'

export default function AdditiveBorder() {
    return (
        <Col xl={4} sm={6}>
            <div className='border-wrapper h-100 border'>
                <H4 className='mb-3'>{AdditiveBorderTitle}</H4>
                {additiveBorderData && additiveBorderData.map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-box bg-light ${item}`} /><span>{`.${item}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
