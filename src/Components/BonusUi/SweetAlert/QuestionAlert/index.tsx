import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { QuestionAlertTitle, QuestionsState } from '../../../../Utils/Constants'
import { questionAlertSubTitle } from '../../../../Data/BonusUi/SweetAlert'
import { Btn } from '../../../../AbstractElements'

export default function QuestionAlert() {
    const buttonStyle = Swal.mixin({
        customClass: {
            cancelButton: 'btn-primary'
        },
        buttonsStyling: true
    })
    const handleAlert = () => {
        buttonStyle.fire({
            text: "Are you sure you want to do this?",
            showCancelButton: true,
            cancelButtonText: 'Aww yiss!',
            confirmButtonText: 'oh noez!',
            confirmButtonColor: 'gray'
        })
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal title-line">
                <CommonCardHeader title={QuestionAlertTitle} subTitle={questionAlertSubTitle} />
                <CardBody className="btn-showcase">
                    <Btn color='primary' className="sweet-11" onClick={handleAlert}>{QuestionsState}</Btn>
                </CardBody>
            </Card>
        </Col>
    )
}

