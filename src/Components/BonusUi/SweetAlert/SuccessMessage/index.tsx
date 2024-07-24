import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { LoginSuccessfully, SuccessMessageTitle } from '../../../../Utils/Constants'
import { successMessageSubTitle } from '../../../../Data/BonusUi/SweetAlert'
import { Btn } from '../../../../AbstractElements'

export default function SuccessMessage() {
    const handleAlert = () => {
        Swal.fire({
            title: "Good job!",
            text: 'You clicked the button!',
            icon: 'success'
        })
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal title-line">
                <CommonCardHeader title={SuccessMessageTitle} subTitle={successMessageSubTitle} />
                <CardBody className="btn-showcase">
                    <Btn color='success' className="sweet-8" onClick={handleAlert}>{LoginSuccessfully}</Btn>
                </CardBody>
            </Card>
        </Col>
    )
}

