import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BorderColorTitle } from '../../../../Utils/Constants'
import { borderColorSubTitle, borderSideColorData } from '../../../../Data/UiKits/HelperClasses'

export default function BorderColor() {
    return (
        <Col xs={12}>
            <Card className='title-line'>
                <CommonCardHeader title={BorderColorTitle} subTitle={borderColorSubTitle} />
                <CardBody>
                    <div className='gradient-border'>
                        {borderSideColorData && borderSideColorData.map((item, index) => (
                            <div className="helper-common-box" key={index}>
                                <div className={`helper-box ${item} border fill-wrapper`} /><span>{`.${item}`}</span>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
