import React, { useState } from 'react'
import { disableTouchSubTitle, disableTouchSwipingData } from '../../../../Data/BonusUi/OwlCarousel';
import { OwlCarouselItem } from '../../../../Types/BonusUi.type';
import { Card, CardBody, Carousel, CarouselControl, CarouselItem, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { DisableTouchSwipingTitle } from '../../../../Utils/Constants';
import { Image } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Utils';

export default function DisableTouchSwiping() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === disableTouchSwipingData.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? disableTouchSwipingData.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const slides = disableTouchSwipingData.map((item: OwlCarouselItem) => {
        return (
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.id}>
                <Image src={dynamicImage(`slider/${item.image}`)} alt='drawing-room' className='d-block w-100' />
            </CarouselItem>
        );
    });
    return (
        <Col xl={6} xs={12}>
            <Card className='height-e title-linequal title-line'>
                <CommonCardHeader title={DisableTouchSwipingTitle} subTitle={disableTouchSubTitle} />
                <CardBody>
                    <Carousel activeIndex={activeIndex} next={next} previous={previous} enableTouch={false}>
                        {slides}
                        <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
                        <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
                    </Carousel>
                </CardBody>
            </Card>
        </Col>
    )
}
