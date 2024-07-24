import React from 'react'
import { Card, CardBody, Col, Input } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { SelectSizingTitle } from '../../../../../Utils/Constants'
import { selectSizingSubTitle } from '../../../../../Data/Forms/FormControls'

export default function SelectSizing() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={SelectSizingTitle} subTitle={selectSizingSubTitle} />
                <CardBody>
                    <Input type="select" name="select" bsSize={'sm'}>
                        <option value=''>{"What's your hobbies? "} </option>
                        <option value="1">{"Kho-kho"}</option>
                        <option value="2">{"Reading Books"}</option>
                        <option value="3">{"Creativity"}</option>
                    </Input>
                </CardBody>
            </Card>
        </Col>
    )
}
