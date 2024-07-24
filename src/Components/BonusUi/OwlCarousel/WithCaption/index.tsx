import React, { useState } from 'react'
import { captionCarouselData, withCaptionSubTitle } from '../../../../Data/BonusUi/OwlCarousel';
import { GoToIndexProp, OwlCarouselItem } from '../../../../Types/BonusUi.type';
import { Card, CardBody, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { WithCaptionTitle } from '../../../../Utils/Constants';
import { Image } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Utils';

export default function WithCaption() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === captionCarouselData.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? captionCarouselData.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const goToIndex: GoToIndexProp = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };
    const slides = captionCarouselData.map((item: OwlCarouselItem) => {
        return (
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.id}>
                <Image src={dynamicImage(`slider/${item.image}`)} alt='drawing-room' className='d-block w-100' />
                <CarouselCaption className='d-none d-md-block txt-white' captionText={item.captionText} captionHeader={item.captionHeader} />
            </CarouselItem>
        );
    });

    return (
        <Col xl={6} xs={12}>
            <Card className='title-line'>
                <CommonCardHeader title={WithCaptionTitle} subTitle={withCaptionSubTitle} />
                <CardBody>
                    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                        <CarouselIndicators items={captionCarouselData} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
                        <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
                    </Carousel>
                </CardBody>
            </Card>
        </Col>
    );
};

