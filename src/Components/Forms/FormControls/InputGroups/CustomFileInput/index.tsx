import React from 'react'
import { Card, CardBody, Col, Input, InputGroup, InputGroupText } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { CustomFileInputTitle, Submit, Upload, Verify } from '../../../../../Utils/Constants'
import { customFileInputSubTitle } from '../../../../../Data/Forms/FormControls'
import { Btn } from '../../../../../AbstractElements'

export default function CustomFileInput() {
    return (
        <Col xl={6}>
            <Card className="height-equal">
                <CommonCardHeader title={CustomFileInputTitle} subTitle={customFileInputSubTitle} />
                <CardBody className="main-custom-form input-group-wrapper">
                    <InputGroup>
                        <InputGroupText htmlFor="inputGroupFile01">{Upload}</InputGroupText>
                        <Input id="inputGroupFile01" type="file" />
                    </InputGroup>
                    <InputGroup>
                        <Input id="inputGroupFile02" type="file" />
                        <InputGroupText htmlFor="inputGroupFile02">{Verify}</InputGroupText>
                    </InputGroup>
                    <InputGroup>
                        <Btn color='secondary' id="inputGroupFileAddon03" outline><i className="icofont icofont-ui-copy"></i></Btn>
                        <Input id="inputGroupFile03" type="file" />
                    </InputGroup>
                    <InputGroup>
                        <Input id="inputGroupFile04" type="file" />
                        <Btn color='secondary' id="inputGroupFileAddon04" outline>{Submit}</Btn>
                    </InputGroup>
                </CardBody>
            </Card>
        </Col>
    )
}

