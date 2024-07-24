import React from 'react'
import { Col } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import { TextColorsTitle } from '../../../../Utils/Constants'
import { borderColorData } from '../../../../Data/UiKits/HelperClasses'

export default function TextColors() {
    return (
        <Col xxl={3} sm={6}>
            <div className='border-wrapper light-background h-100 dark-helper'>
                <H4 className="mb-3">{TextColorsTitle}</H4>
                {borderColorData && borderColorData.map((item) => (
                    <div className="helper-common-box" key={item.id}>
                        <div className={`helper-box helper-text border txt-${item.color} ${item.id === 8 ? 'bg-dark':''}`}>
                            {'C '}
                        </div>
                        <span>{`.txt-${item.color}`}</span>
                    </div>
                ))}
            </div>
        </Col>
    )
}
