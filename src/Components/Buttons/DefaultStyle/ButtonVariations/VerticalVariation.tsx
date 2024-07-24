import React, { Fragment } from 'react'
import { ButtonGroup, Col, Input, Label } from 'reactstrap'
import { Btn, H6 } from '../../../../AbstractElements'
import { VerticalVariationTitle } from '../../../../Utils/Constants'
import { verticalVariationData, verticalVariationDropdownData } from '../../../../Data/Buttons/DefaultStyle'
import DropdownCommon from '../../../../Utils/CommonComponents/DropdownCommon'
import { dynamicNumber } from '../../../../Utils'

export default function VerticalVariation() {
    return (
        <Col md={6}>
            <div className="card-wrapper border rounded-3 h-100">
                <H6 className="sub-title fw-bold">{VerticalVariationTitle}</H6>
                <div className="d-flex gap-3 align-items-end flex-wrap">
                    <ButtonGroup vertical>
                        {verticalVariationData.map((item) => (
                            <Btn color={item.color} key={item.id}>{item.title}</Btn>
                        ))}
                    </ButtonGroup>
                    <ButtonGroup vertical className="buttons-box">
                        <Btn color='light-primary'>{'light-primary'}</Btn>
                        <Btn color='light-dark'>{'light-dark'}</Btn>
                        {verticalVariationDropdownData.map((data, index) => (
                            <DropdownCommon key={index} item={data} />
                        ))}
                    </ButtonGroup>
                    <ButtonGroup vertical>
                        {dynamicNumber(3).map((item, index) => (
                            <Fragment key={index}>
                                <Input className="btn-check" id={`vbtn-radio${item}`} type="radio" name="vbtn-radio" defaultChecked={item === 1 ? true : false} />
                                <Label className={`btn btn-outline-primary ${item === 3 ? 'mb-0' : ''}`} htmlFor={`vbtn-radio${item}`}>{`Radio ${item}`}</Label>
                            </Fragment>
                        ))}
                    </ButtonGroup>
                </div>
            </div>
        </Col>
    )
}
