import React from 'react'
import { ButtonGroup, ButtonToolbar, Col } from 'reactstrap'
import { Btn, H6 } from '../../../../AbstractElements'
import { ButtonToolbarTitle } from '../../../../Utils/Constants'
import { buttonToolbarData } from '../../../../Data/Buttons/DefaultStyle'

export default function ButtonToolbarCard() {
    return (
        <Col xs={12}>
            <div className="card-wrapper border rounded-3 h-100">
                <H6 className="sub-title fw-bold">{ButtonToolbarTitle}</H6>
                <ButtonToolbar>
                    {buttonToolbarData.map((data) => (
                        <ButtonGroup key={data.id}>
                            {data.child.map((item) => (
                                <Btn key={item.id} color={item.color}>{item.text}</Btn>
                            ))}
                        </ButtonGroup>
                    ))}
                </ButtonToolbar>
            </div>
        </Col>
    )
}
