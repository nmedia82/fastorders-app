import React, { useRef } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Grid } from "swiper/modules";
import CardHeaderSpan from '../../../../Utils/CommonComponents/CardHeaderSpan'
import { RecentProjectUpdateTitle } from '../../../../Utils/Constants'
import { Swiper, SwiperSlide } from 'swiper/react';
import SvgIcon from '../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons';
import { recentSliderData } from '../../../../Data/Dashboard/Project';
import { H6, Image, LI, ProgressBar, UL } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Utils';

export default function RecentProjectUpdate() {
    const swiperRef = useRef<any>();

    return (
        <Col xl={5} className="box-col-5">
            <Card className="title-line">
                <CardHeaderSpan headerClass='card-no-border' heading={RecentProjectUpdateTitle} />
                <CardBody className="pt-0">
                    <div className="recent-update">
                        <Swiper className="mySwiper recent-slider" modules={[Grid]} grid={{ rows: 2, fill: "row", }} spaceBetween={20} onSwiper={(swiper: any) => { swiperRef.current = swiper; }} slidesPerView={2} navigation={{ nextEl: '.swiper-next-arrow', prevEl: '.swiper-prev-arrow' }} breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 5, grid: { rows: 2, fill: "row" } },
                            500: { slidesPerView: 2, spaceBetween: 20, grid: { rows: 2, fill: "row" } },
                            1200: { slidesPerView: 1, spaceBetween: 20, grid: { rows: 2, fill: "row" } },
                            1730: { slidesPerView: 2, spaceBetween: 20, grid: { rows: 2, fill: "row" } }
                        }}>
                            <div className="swiper-wrapper">
                                {recentSliderData.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="light-card-2 recent-project-wrapper">
                                            <div className={`recent-icon ${item.color}`}>
                                                <SvgIcon iconId={item.icon} />
                                            </div>
                                            <div className="recent-content">
                                                <div className="d-flex">
                                                    <div>
                                                        <H6>{item.title} </H6><span className="f-12 f-w-500 f-light">{'Design'}</span>
                                                    </div>
                                                    <div className="customers">
                                                        <UL className='simple-list flex-row'>
                                                            {item.customers.map((list) => (
                                                                <LI className="d-inline-block" key={list.id}>
                                                                    {list.image ? <Image className="img-30 rounded-circle" src={dynamicImage(list.image)} alt="user" /> :
                                                                        <div className="light-card"><span className="f-w-500 f-light f-12">{'+'}{list.number}</span></div>
                                                                    }
                                                                </LI>
                                                            ))}
                                                        </UL>
                                                    </div>
                                                </div>
                                                <div className="recent-progress">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="f-light f-w-500 f-12">{'Progress'}</span>
                                                        <span className="f-light f-w-500 f-12">{item.progress}{'%'}</span>
                                                    </div>
                                                    <ProgressBar animated striped className={`progress-stripe-${item.color} ${item.title === 'Marketing' ? 'with-light-background' : ''}`} style={{ height: "5px" }} value={item.progress} />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </div>
                        </Swiper>
                        <div className="arrow-group">
                            <div className="prev"><SvgIcon iconId='swiper-prev-arrow' onClick={() => swiperRef.current.slidePrev()} /></div>
                            <div className="next"><SvgIcon iconId='swiper-next-arrow' onClick={() => swiperRef.current.slideNext()} /></div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}