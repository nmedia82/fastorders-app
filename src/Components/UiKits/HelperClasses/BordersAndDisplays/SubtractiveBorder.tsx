import React from 'react'
import { Col } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import { SubtractiveBorderTitle } from '../../../../Utils/Constants'
import { additiveBorderData } from '../../../../Data/UiKits/HelperClasses'

export default function SubtractiveBorder() {
    return (
        <Col xl={4} sm={6}>
            <div className='border-wrapper h-100 border'>
                <H4 className='mb-3'>{SubtractiveBorderTitle}</H4>
                {additiveBorderData && additiveBorderData.map((item, index) => (
                    <div className="helper-common-box" key={index}>
                        <div className={`helper-box bg-light border ${item}-0`} /><span>{`.${item}-0`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
