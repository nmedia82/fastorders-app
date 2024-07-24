import React from 'react'
import { ShippingInformationProps } from '../../../../../../Types/Forms.type';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { homeAndOfficeAddressData } from '../../../../../../Data/Forms/FormLayout';
import { H6 } from '../../../../../../AbstractElements';

export default function HomeAndOfficeAddress({ radioBoxValues, updateFormData }: ShippingInformationProps) {
    const { address } = radioBoxValues;

    return (
        <Row className="g-3">
            {homeAndOfficeAddressData.map((data, index) => (
                <Col xxl={4} sm={6} key={index}>
                    <div className="card-wrapper border rounded-3 h-100 light-card">
                        <div className="collect-address">
                            <div className="d-flex gap-2 align-items-center">
                                <FormGroup check className="radio radio-primary">
                                    <Input id={data.value} type="radio" name="address" value={data.value} checked={address === data.value} onChange={updateFormData} />
                                    <Label className="mb-0" htmlFor={data.value} check>
                                        {data.label}
                                    </Label>
                                </FormGroup>
                            </div>
                            <div className="card-icon">
                                <i className="fa fa-pencil" />
                                <i className="fa fa-trash-o" />
                            </div>
                        </div>
                        <div className="shipping-address">
                            <H6>{data.name}</H6>
                            <span>{'Address: '}{data.adress}</span>
                            <span>{'Contact: '}{data.contact}</span>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    )
}

