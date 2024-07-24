import React from 'react'
import { Card, CardBody, Col, Input } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { FormControlSizingTitle } from '../../../../../Utils/Constants'
import { formControlSizingSubTitle } from '../../../../../Data/Forms/FormControls'

export default function FormControlSizing() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={FormControlSizingTitle} subTitle={formControlSizingSubTitle} />
                <CardBody>
                    <Input bsSize='sm' type="text" placeholder=".form-control-sm" />
                </CardBody>
            </Card>
        </Col>
    )
}
