import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Surprise, TitleWithTextTitle } from '../../../../Utils/Constants'
import { titleWithTextSubTitle } from '../../../../Data/BonusUi/SweetAlert'
import { Btn } from '../../../../AbstractElements'

export default function TitleWithText() {
    const handleAlert = () => {
        Swal.fire(
            "It's Magic!",
            'Thank you for visiting Yuri Theme'
        )
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal title-line">
                <CommonCardHeader title={TitleWithTextTitle} subTitle={titleWithTextSubTitle} />
                <CardBody className="btn-showcase">
                    <Btn color='secondary' className="sweet-2" onClick={handleAlert}>{Surprise}</Btn>
                </CardBody>
            </Card>
        </Col>
    )
}

