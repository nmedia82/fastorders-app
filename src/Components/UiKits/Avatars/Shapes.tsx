import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader'
import { ShapesTitle } from '../../../Utils/Constants'
import { avatarShapeData, shapesSubTitle } from '../../../Data/UiKits/Avatars'
import { Image } from '../../../AbstractElements'
import { dynamicImage } from '../../../Utils'

export default function Shapes() {
    return (
        <Col xl={4} md={6}>
            <Card className='height-equal title-line'>
                <CommonCardHeader title={ShapesTitle} subTitle={shapesSubTitle} />
                <CardBody>
                    <div className="avatars avatar-showcase">
                        {avatarShapeData && avatarShapeData.map((item, index) => (
                            <div key={index} className="avatar">
                                <Image className={`img-${item.class}`} src={dynamicImage(`avtar/${item.image}`)} alt="user profile" />
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
