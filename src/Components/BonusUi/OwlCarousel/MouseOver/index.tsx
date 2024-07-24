import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Slider from 'react-slick'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { MouseOverTitle } from '../../../../Utils/Constants'
import { mouseOverSubTitle, mouseWheelSliderOptions } from '../../../../Data/BonusUi/OwlCarousel'
import { dynamicImage, dynamicNumber } from '../../../../Utils'
import { Image } from '../../../../AbstractElements'

export default function MouseOver() {
    return (
        <Col xl={6} xs={12}>
            <Card className='title-line'>
                <CommonCardHeader title={MouseOverTitle} subTitle={mouseOverSubTitle} />
                <CardBody className='custom-padding-slider'>
                    <Slider {...mouseWheelSliderOptions}>
                        {dynamicNumber(11).map((item, index) => (
                            <div className='item px-1' key={index}>
                                <Image src={dynamicImage(`slider/${item}.jpg`)} alt='Drawing-room' className='img-fluid rounded' />
                            </div>
                        ))}
                    </Slider>
                </CardBody>
            </Card>
        </Col>
    )
}

