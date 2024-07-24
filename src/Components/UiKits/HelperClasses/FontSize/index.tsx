import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { FontSizeText, FontSizeTitle } from '../../../../Utils/Constants'
import { fontSizeData, fontSizeSubTitle } from '../../../../Data/UiKits/HelperClasses'

export default function FontSize() {
    return (
        <Col xs={12}>
            <Card className='title-line'>
                <CommonCardHeader title={FontSizeTitle} subTitle={fontSizeSubTitle} />
                <CardBody>
                    <div className='gradient-border'>
                        {fontSizeData && fontSizeData.map((item, index) => (
                            <div className="font-wrapper border" key={index}>
                                <div className={`f-${item}`}>{FontSizeText} {`.f-${item}`}</div>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
