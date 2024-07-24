import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ToggleModalTitle } from '../../../../Utils/Constants'
import { toggleModalSubTitle } from '../../../../Data/UiKits/Modal'
import ToggleModalBody from './ToggleModalBody'

export default function ToggleModal() {
    return (
        <Col xl={4}>
            <Card className='title-line'>
                <CommonCardHeader title={ToggleModalTitle} subTitle={toggleModalSubTitle} />
                <CardBody>
                    <ToggleModalBody />
                </CardBody>
            </Card>
        </Col>
    )
}
