import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Warning, WarningAlertTitle } from '../../../../Utils/Constants'
import { warningAlertSubTitle } from '../../../../Data/BonusUi/SweetAlert'
import { Btn } from '../../../../AbstractElements'

export default function WarningAlert() {
    const handleAlert = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: 'warning',
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({ text: 'Poof! Your imaginary file has been deleted!', icon: 'success' }
                )
            } else {
                Swal.fire({ text: 'Your imaginary file is safe!' })
            }
        })
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal title-line">
                <CommonCardHeader title={WarningAlertTitle} subTitle={warningAlertSubTitle} />
                <CardBody className="btn-showcase">
                    <Btn color='warning' className="sweet-5" onClick={handleAlert}>{Warning}</Btn>
                </CardBody>
            </Card>
        </Col>
    )
}
