import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { ValidationFormTitle } from '../../../../../Utils/Constants'
import { validationFormSubTitle } from '../../../../../Data/Charts/Forms/FormControls'
import FormCard from './FormCard'

export default function ValidationForm() {
    return (
        <Col xl={6}>
            <Card className="height-equal">
                <CommonCardHeader title={ValidationFormTitle} subTitle={validationFormSubTitle} />
                <CardBody>
                    <FormCard />
                </CardBody>
            </Card>
        </Col>
    )
}
