import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader'
import { Image } from '../../../AbstractElements'
import { dynamicImage } from '../../../Utils'
import { avatarSizeData, sizesSubTitle } from '../../../Data/UiKits/Avatars'
import { Sizes } from '../../../Utils/Constants'

export default function AvatarSizes() {
    return (
        <Col xl={4} md={6}>
            <Card className="height-equal title-line">
                <CommonCardHeader title={Sizes} subTitle={sizesSubTitle} />
                <CardBody>
                    <div className="avatars avatar-showcase">
                        {avatarSizeData && avatarSizeData.map((item, index) => (
                            <div key={index} className="avatar">
                                <Image className={`img-${item.class} rounded-circle`} src={dynamicImage(`avtar/${item.image}`)} alt="user profile" />
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
