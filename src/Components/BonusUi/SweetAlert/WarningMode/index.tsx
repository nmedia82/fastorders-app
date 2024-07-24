import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { AlertMode, WarningModeTitle } from '../../../../Utils/Constants'
import { warningModeSubTitle } from '../../../../Data/BonusUi/SweetAlert'
import { Btn } from '../../../../AbstractElements'

export default function WarningMode() {
    const handleAlert = () => {
        Swal.fire({
            title: "Good job!",
            text: 'You clicked the button!',
            icon: 'warning'
        })
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal title-line">
                <CommonCardHeader title={WarningModeTitle} subTitle={warningModeSubTitle} />
                <CardBody className="btn-showcase">
                    <Btn color='warning' className="sweet-6" onClick={handleAlert}>{AlertMode}</Btn>
                </CardBody>
            </Card>
        </Col>
    )
}

