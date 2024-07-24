import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { InfoAlertTitle, Informational } from '../../../../Utils/Constants'
import { infoAlertSubTitle } from '../../../../Data/BonusUi/SweetAlert'
import { Btn } from '../../../../AbstractElements'

export default function InfoAlert() {
    const handleAlert = () => {
        Swal.fire({
            text: "Please Click on this button it's big surprise for you.",
            confirmButtonText: 'ok',
        }).then((result) => {
            result.isConfirmed && Swal.fire({ text: 'Thank you for visit Yuri theme: true' })
        })
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal title-line">
                <CommonCardHeader title={InfoAlertTitle} subTitle={infoAlertSubTitle} />
                <CardBody className="btn-showcase">
                    <Btn color='info' className="sweet-4" onClick={handleAlert}>{Informational}</Btn>
                </CardBody>
            </Card>
        </Col>
    )
}

