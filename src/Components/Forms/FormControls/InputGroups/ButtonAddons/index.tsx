import React from 'react'
import { Card, CardBody, Col, Input, InputGroup } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { ButtonAddonsTitle, Submit } from '../../../../../Utils/Constants'
import { buttonAddonsSubTitle } from '../../../../../Data/Forms/FormControls'
import { Btn } from '../../../../../AbstractElements'

export default function ButtonAddons() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={ButtonAddonsTitle} subTitle={buttonAddonsSubTitle} />
                <CardBody className="card-wrapper input-group-wrapper">
                    <InputGroup>
                        <Btn color='primary' outline id="button-addon1">{'$ 25'}</Btn>
                        <Input type="text" id="button-addon1"/>
                    </InputGroup>
                    <InputGroup>
                        <Input type="text" placeholder="Recipient's username" id="button-addon2" />
                        <Btn color='primary' outline id="button-addon2">{Submit}</Btn>
                    </InputGroup>
                    <InputGroup>
                        <Btn color='primary'><span>&#8364; </span></Btn>
                        <Btn color='success'>{'0.0114419'}</Btn>
                        <Input type="text" />
                    </InputGroup>
                    <InputGroup>
                        <Input type="text" placeholder="Recipient's username" />
                        <Btn color='primary'><span>&#8377;</span></Btn>
                        <Btn color='success'>{'500'}</Btn>
                    </InputGroup>
                </CardBody>
            </Card>
        </Col>
    )
}
