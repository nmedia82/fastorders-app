import React from 'react'
import { Card, CardBody, Col, Input, InputGroup } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { Secondary, SegmentedButtonsTitle, Success } from '../../../../../Utils/Constants'
import { segmentedButtonsData1, segmentedButtonsData2, segmentedButtonsSubTitle } from '../../../../../Data/Forms/FormControls'
import { Btn } from '../../../../../AbstractElements'
import ButtonDropdownList from '../ButtonsWithDropdowns/ButtonDropdownList'

export default function SegmentedButtons() {
    return (
        <Col md={6}>
            <Card className="height-equal">
                <CommonCardHeader title={SegmentedButtonsTitle} subTitle={segmentedButtonsSubTitle} />
                <CardBody className="main-segment-btn card-wrapper input-group-wrapper">
                    <InputGroup>
                        <Btn color="success" outline> {Success}</Btn>
                        <ButtonDropdownList color="success" split={true} span={true} divider={true} options={segmentedButtonsData1} />
                        <Input type="text" />
                    </InputGroup>
                    <InputGroup>
                        <Input type="text" />
                        <Btn color="secondary" outline>{Secondary}</Btn>
                        <ButtonDropdownList color="secondary" split={true} span={true} divider={true} options={segmentedButtonsData2} />
                    </InputGroup>
                </CardBody>
            </Card>
        </Col>
    )
}
