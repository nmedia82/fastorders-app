import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader'
import { Image } from '../../../AbstractElements'
import { dynamicImage } from '../../../Utils'
import { StatusIndicatorTitle } from '../../../Utils/Constants'
import { avatarStatusData, statusSubTitle } from '../../../Data/UiKits/Avatars'

export default function StatusIndicator() {
    return (
        <Col xl={4} md={6}>
            <Card className='height-equal title-line'>
                <CommonCardHeader title={StatusIndicatorTitle} subTitle={statusSubTitle} />
                <CardBody>
                    <div className='avatars avatar-showcase'>
                        {avatarStatusData && avatarStatusData.map((item, index) => (
                            <div className="avatar" key={index}>
                                <Image className={`img-${item.class} rounded-circle`} src={dynamicImage(`avtar/${item.image}`)} alt="user profile" />
                                <div className={`status bg-${item.status}`} />
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
