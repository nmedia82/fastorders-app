import React from 'react'
import { CardBody, Col } from 'reactstrap'
import { FollowDataType } from '../../../../../../../Types/SocialApp.type'
import CommonCard from '../../CommonCard'
import { H6, Image } from '../../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../../Utils'
import { Href } from '../../../../../../../Utils/Constants'
import { followCardData } from '../../../../../../../Data/Applications/SocialApp'

export default function FollowData({ heading }: FollowDataType) {
    return (
        <Col xl={12} className='xl-50 box-col-12'>
            <CommonCard title={heading}>
                <CardBody className="social-list filter-cards-view">
                    {followCardData.map((data) => (
                        <div className="d-flex" key={data.id}>
                            <Image className="img-50 img-fluid m-r-20 rounded-circle" alt="" src={dynamicImage(`user/${data.image}`)} />
                            <div className="flex-grow-1">
                                <H6>{data.name}</H6>
                                <a href={Href}>{'Add Friend'}</a>
                            </div>
                        </div>
                    ))}
                </CardBody>
            </CommonCard>
        </Col>
    )
}
