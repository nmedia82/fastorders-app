import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ImageSizeTitle } from '../../../../Utils/Constants'
import { imageData, imageSubTitle } from '../../../../Data/UiKits/HelperClasses'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function ImageSize() {
    return (
        <Col xl={6}>
            <Card className='height-equal title-line'>
                <CommonCardHeader headClass="pb-0" title={ImageSizeTitle} subTitle={imageSubTitle} />
                <CardBody>
                    <div className='gradient-border gap-3'>
                        {imageData && imageData.map((item, index) => (
                            <Image className={`img-${item} img-h-${item}`} src={dynamicImage(`blog/comment.jpg`)} alt="img-size" key={index} />
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
