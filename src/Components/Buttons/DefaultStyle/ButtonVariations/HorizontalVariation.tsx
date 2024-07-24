import React, { Fragment } from 'react'
import { ButtonGroup, Col, Input, Label } from 'reactstrap'
import { Btn, H6 } from '../../../../AbstractElements'
import { HorizontalVariationTitle } from '../../../../Utils/Constants'
import { horizontalVariationDropdown, horizontalVariationOutline, horizontalVariationdata } from '../../../../Data/Buttons/DefaultStyle'
import DropdownCommon from '../../../../Utils/CommonComponents/DropdownCommon'
import { dynamicNumber } from '../../../../Utils'

export default function HorizontalVariation() {
    return (
        <Col xs={12}>
            <div className="card-wrapper border rounded-3 h-100">
                <H6 className="sub-title fw-bold">{HorizontalVariationTitle}</H6>
                <div className="button-wrapper button-box">
                    <ButtonGroup>
                        {horizontalVariationOutline.map((item, index) => (
                            <Btn outline color='primary' key={index}>{item}</Btn>
                        ))}
                    </ButtonGroup>
                    <ButtonGroup>
                        {horizontalVariationdata.map((item) => (
                            <Btn key={item.id} color={item.color}>{item.title}</Btn>
                        ))}
                        {horizontalVariationDropdown.map((item, index) => (
                            <DropdownCommon key={index} item={item} />
                        ))}
                    </ButtonGroup>
                    <ButtonGroup className="select-checkbox">
                        {dynamicNumber(3).map((item, index) => (
                            <Fragment key={index}>
                                <Input className="btn-check" id={`btncheck${item}`} type="checkbox" />
                                <Label className={`btn btn-outline-${item !== 2 ? 'success' : 'primary'} mb-0`} htmlFor={`btncheck${item}`}>{`Checkbox ${item}`}</Label>
                            </Fragment>
                        ))}
                    </ButtonGroup>
                </div>
            </div>
        </Col>
    )
}
