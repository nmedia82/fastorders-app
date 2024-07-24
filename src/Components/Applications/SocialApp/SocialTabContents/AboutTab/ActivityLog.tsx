import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CardHeaderSpan from '../../../../../Utils/CommonComponents/CardHeaderSpan'
import { ActivityLogTitle } from '../../../../../Utils/Constants'
import { H6, P } from '../../../../../AbstractElements'
import { activityLogData } from '../../../../../Data/Applications/SocialApp'

export default function ActivityLog() {
    return (
        <Col sm={12}>
            <Card>
                <CardHeaderSpan smallHeading={ActivityLogTitle} />
                <CardBody>
                    <div className="activity-log">
                        {activityLogData.map((data) => (
                            <div className="my-activity" key={data.id}>
                                <H6 className="f-w-600 mb-3">{data.title}</H6>
                                {data.child.map((item) => (
                                    <P key={item.id}>
                                        <span> {item.icon}</span>
                                        {item.text}
                                    </P>
                                ))}
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
