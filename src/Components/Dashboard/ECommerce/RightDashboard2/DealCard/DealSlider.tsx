import React from 'react'
import { Pagination } from 'swiper/modules';
import { Col } from 'reactstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { dynamicImage } from '../../../../../Utils';
import { Image } from '../../../../../AbstractElements';

export default function DealSlider() {
    
    return (
        <Col xl={4} md={12}>
            <div className="deal-slider">
                <Swiper pagination={{clickable: true}} modules={[Pagination]} slidesPerView={1} spaceBetween={10} className="mySwiper deal-swiper">
                    <div className="swiper-wrapper">
                        <SwiperSlide> <Image className="img-fluid" src={dynamicImage(`product/product-categories/phone.png`)} alt="phone" /></SwiperSlide>
                        <SwiperSlide> <Image className="img-fluid" src={dynamicImage(`dashboard-2/product/headphone.png`)} alt="headphone" /></SwiperSlide>
                        <SwiperSlide> <Image className="img-fluid" src={dynamicImage(`dashboard-2/product/chair.png`)} alt="chair" /></SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </Col>
    )
}
