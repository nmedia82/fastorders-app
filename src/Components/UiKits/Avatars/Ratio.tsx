import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader'
import { RatioTitle } from '../../../Utils/Constants'
import { avatarRatioData, ratioSubTitle } from '../../../Data/UiKits/Avatars'
import { Image } from '../../../AbstractElements'
import { dynamicImage } from '../../../Utils'

export default function Ratio() {
    return (
        <Col md={6}>
            <Card className='title-line'>
                <CommonCardHeader title={RatioTitle} subTitle={ratioSubTitle} />
                <CardBody>
                    <div className="avatars avatar-showcase">
                        {avatarRatioData && avatarRatioData.map((item, index) => (
                            <div className="avatar ratio" key={index}>
                                <Image className={`b-r-8 img-${item.class}`} src={dynamicImage(item.image)} alt="user profile" />
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
