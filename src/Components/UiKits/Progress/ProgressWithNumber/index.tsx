import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ProgressWithNumberTitle } from '../../../../Utils/Constants'
import { progressNumberSubTitle } from '../../../../Data/UiKits/Progress'
import { Btn, ProgressBar } from '../../../../AbstractElements'

export default function ProgressWithNumber() {
    return (
        <Col xl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={ProgressWithNumberTitle} subTitle={progressNumberSubTitle} />
                <CardBody>
                    <div className="position-relative m-3 progress-number">
                        <ProgressBar className="progress-wrapper" value={50}/>
                        <Btn color="primary" size="sm" className="position-absolute top-0 start-0 translate-middle rounded-circle">{'1'}</Btn>
                        <Btn color="primary" size="sm" className="position-absolute top-0 start-50 translate-middle rounded-circle">{'2'}</Btn>
                        <Btn color="transparent" size="sm" className="progress-btn position-absolute top-0 start-100 translate-middle rounded-circle">{'3'}</Btn>
                    </div>
                </CardBody>
            </Card>
        </Col>
  )
}
