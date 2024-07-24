import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CardHeaderSpan from '../../../../../Utils/CommonComponents/CardHeaderSpan'
import { RevenueIndustry } from '../../../../../Utils/Constants'
import { ProgressBar } from '../../../../../AbstractElements';
import { revenueColumnData } from '../../../../../Data/Dashboard/Default';

export default function RevenueColumn() {
    return (
        <Col xl={6} sm={6} xxl={100} className="revenue-column box-col-12">
            <Card className="title-line widget-1">
                <CardHeaderSpan headerClass='card-no-border' heading={RevenueIndustry} />
                <CardBody className="pt-0">
                    <div className="revenue-slider-wrapper">
                        <Swiper className="revenue-swiper" modules={[Pagination]} spaceBetween={50} slidesPerView={1} pagination={{ clickable: true }}>
                            <div className="swiper-wrapper">
                                {revenueColumnData.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="light-card satisfaction-box progrees-widget">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="social-content">
                                                    <i className={`txt-${item.color} fa fa-${item.icon} me-1`} />
                                                    <span className="f-w-500 f-light">{item.text}</span>
                                                </span>
                                                <span className="f-12 f-w-500 f-light">{item.value}{'%'}</span>
                                            </div>
                                            <ProgressBar style={{height: "5px"}} value={item.value} className={`progress-stripe-${item.color} with-light-background mt-2`} animated striped />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </div>
                        </Swiper>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
