import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BasicAlertTitle, ClickIt } from '../../../../Utils/Constants'
import { Btn } from '../../../../AbstractElements'
import { basicAlertSubTitle } from '../../../../Data/BonusUi/SweetAlert'

export default function BasicAlert() {
    const handleAlert = () => {
        Swal.fire('Welcome! to the Yuri theme')
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal title-line">
                <CommonCardHeader title={BasicAlertTitle} subTitle={basicAlertSubTitle} />
                <CardBody className="btn-showcase">
                    <Btn color='primary' className="sweet-1" onClick={handleAlert}>
                        {ClickIt}
                    </Btn>
                </CardBody>
            </Card>
        </Col>
    )
}
