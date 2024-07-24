import React from 'react'
import { CardBody } from 'reactstrap'
import CommonCard from '../CommonCard'
import { ActivityFeedTitle, Href } from '../../../../../../Utils/Constants'
import { H6, Image, P } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Utils'
import { activityFeedData } from '../../../../../../Data/Applications/SocialApp'

export default function ActivityFeed() {
    return (
        <CommonCard title={ActivityFeedTitle}>
            <CardBody className="social-status filter-cards-view">
                {activityFeedData.map((data) => (
                    <div className="d-flex" key={data.id}>
                        <Image className="img-50 rounded-circle m-r-15" src={dynamicImage(`user/${data.image}`)} alt="" />
                        <div className="flex-grow-1">
                            <H6>{data.name}</H6>
                            <P>{"Commented on Shaun Park's"}<a href={Href}> {'Photo'}</a></P>
                            <span className="light-span">{data.time}</span>
                        </div>
                    </div>
                ))}
            </CardBody>
        </CommonCard>
    )
}
