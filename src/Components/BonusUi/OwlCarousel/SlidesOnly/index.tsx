import React, { useState } from 'react'
import { Card, CardBody, Carousel, CarouselItem, Col } from 'reactstrap';
import { owlCarouselData, slidesOnlySubTitle } from '../../../../Data/BonusUi/OwlCarousel';
import { OwlCarouselItem } from '../../../../Types/BonusUi.type';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { SlidesOnlyTitle } from '../../../../Utils/Constants';
import { Image } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Utils';

export default function SlidesOnly() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === owlCarouselData.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? owlCarouselData.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const slides = owlCarouselData.map((item: OwlCarouselItem) => {
        return (
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.id}>
                <Image src={dynamicImage(`slider/${item.image}`)} alt='drawing-room' className='d-block w-100' />
            </CarouselItem>
        );
    });
    return (
        <Col xl={6} xs={12}>
            <Card className='title-line'>
                <CommonCardHeader title={SlidesOnlyTitle} subTitle={slidesOnlySubTitle} />
                <CardBody>
                    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                        {slides}
                    </Carousel>
                </CardBody>
            </Card>
        </Col>
    )
}
