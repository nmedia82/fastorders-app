import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { AutoCloseAlertTitle, Timer } from '../../../../Utils/Constants'
import { autoCloseAlertSubTitle } from '../../../../Data/BonusUi/SweetAlert'
import { Btn } from '../../../../AbstractElements'

export default function AutoCloseAlert() {
    const handleAlert = () => {
        Swal.fire({
            title: "Auto close alert!",
            text: 'just a wait! I will close in 30 second!',
            timer: 3000,
            showConfirmButton: false
        })
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal title-line">
                <CommonCardHeader title={AutoCloseAlertTitle} subTitle={autoCloseAlertSubTitle} />
                <CardBody className="btn-showcase">
                    <Btn color='primary' className="sweet-14" onClick={handleAlert}>{Timer}</Btn>
                </CardBody>
            </Card>
        </Col>
    )
}

