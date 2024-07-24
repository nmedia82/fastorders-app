import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BadgeHeadingText, BadgeHeadingsExample } from '../../../../Utils/Constants'
import { badgeHeadingSubTitle } from '../../../../Data/UiKits/Tag&Pills'
import { Badges, H1, H2, H3, H4, H5, H6 } from '../../../../AbstractElements'

export default function BadgeHeading() {
    return (
        <Col sm={12} xl={6}>
            <Card className='height-equal title-line'>
                <CommonCardHeader title={BadgeHeadingsExample} subTitle={badgeHeadingSubTitle} />
                <CardBody>
                    <H1 className="badge-heading">{BadgeHeadingText} {'1'}
                        <Badges color="primary">{'Latest'}</Badges>
                    </H1>
                    <H2 className="badge-heading">{BadgeHeadingText} {'2'}
                        <Badges color="secondary">{'Trending'}</Badges>
                    </H2>
                    <H3 className="badge-heading">{BadgeHeadingText} {'3'}
                        <Badges color="success">{'Checkout'}</Badges>
                    </H3>
                    <H4 className="badge-heading">{BadgeHeadingText} {'4'}
                        <Badges color="warning">{'Inbox'}</Badges>
                    </H4>
                    <H5 className="badge-heading">{BadgeHeadingText} {'5'}
                        <Badges color="danger">{'Login'}</Badges>
                    </H5>
                    <H6 className="badge-heading">{BadgeHeadingText} {'6'}
                        <Badges color="dark">{'Logout'}</Badges>
                    </H6>
                </CardBody>
            </Card>
        </Col>
    )
}
