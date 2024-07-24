import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DangerAlertTitle, DangerMode } from '../../../../Utils/Constants'
import { dangerAlertSubTitle } from '../../../../Data/BonusUi/SweetAlert'
import { Btn } from '../../../../AbstractElements'

export default function DangerAlert() {
    const handleAlert = () => {
        Swal.fire({
            title: "it's danger",
            text: 'Something went wrong!',
            icon: 'error'
        })
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal title-line">
                <CommonCardHeader title={DangerAlertTitle} subTitle={dangerAlertSubTitle} />
                <CardBody className="btn-showcase">
                    <Btn color='danger' className="sweet-7" onClick={handleAlert}>{DangerMode}</Btn>
                </CardBody>
            </Card>
        </Col>
    )
}
