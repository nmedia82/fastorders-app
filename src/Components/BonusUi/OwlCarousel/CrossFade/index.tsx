import React, { useState } from 'react'
import { Card, CardBody, Carousel, CarouselControl, CarouselItem, Col } from 'reactstrap';
import { crossFadeCarouselData, crossFadeSubTitle } from '../../../../Data/BonusUi/OwlCarousel';
import { OwlCarouselItem } from '../../../../Types/BonusUi.type';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { CrossFadeTitle } from '../../../../Utils/Constants';
import { Image } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Utils';

export default function CrossFade() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === crossFadeCarouselData.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? crossFadeCarouselData.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const slides = crossFadeCarouselData.map((item: OwlCarouselItem) => {
        return (
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.id}>
                <Image src={dynamicImage(`slider/${item.image}`)} alt='drawing-room' className='d-block w-100' />
            </CarouselItem>
        );
    });
    return (
        <Col xl={6} xs={12}>
            <Card className='height-e title-linequal title-line'>
                <CommonCardHeader title={CrossFadeTitle} subTitle={crossFadeSubTitle} />
                <CardBody>
                    <Carousel activeIndex={activeIndex} next={next} previous={previous} fade={true}>
                        {slides}
                        <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
                        <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
                    </Carousel>
                </CardBody>
            </Card>
        </Col>
    );
}

