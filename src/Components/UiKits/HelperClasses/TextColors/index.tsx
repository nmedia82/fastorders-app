import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { TextColorsBig } from '../../../../Utils/Constants'
import { borderColorData, textColorSubTitle } from '../../../../Data/UiKits/HelperClasses'

export default function TextColors() {
    return (
        <Col xl={6}>
            <Card className='height-equal title-line'>
                <CommonCardHeader title={TextColorsBig} subTitle={textColorSubTitle} />
                <CardBody>
                    {borderColorData && borderColorData.slice(0,7).map((item, index) => (
                        <Fragment key={index}>
                            <div className="helper-common-box"></div>
                            <div className={`font-${item.color}`}>
                                {'This is a '} <strong>{`font-${item.color}`}</strong> {`text used class as .font-${item.color}`}
                            </div>
                        </Fragment>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
