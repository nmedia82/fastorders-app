import React from 'react'
import { learningGridData } from '../../../../Data/Miscellaneous/Learning'
import { Card, Col } from 'reactstrap'
import { H6, Image, LI, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function BlogBoxGrid() {
    return (
        <>
            {learningGridData.map((item) => (
                <Col xl={4} sm={6} className="xl-50 box-col-6" key={item.id}>
                    <Card>
                        <div className="blog-box blog-grid text-center product-box">
                            <div className="product-img">
                                <Image className="img-fluid top-radius-blog" src={dynamicImage(`faq/${item.src}`)} alt="" />
                                <div className="product-hover">
                                    <UL className='simple-list flex-row'>
                                        <LI><i className="icon-link"></i></LI>
                                        <LI><i className="icon-import"></i></LI>
                                    </UL>
                                </div>
                            </div>
                            <div className="blog-details-main">
                                <UL className="blog-social simple-list flex-row justify-content-center">
                                    <LI>{item.date}</LI>
                                    <LI>{'by: Admin'}</LI>
                                    <LI>{'0 Hits'}</LI>
                                </UL>
                                <hr />
                                <H6 className="blog-bottom-details">{item.title}</H6>
                            </div>
                        </div>
                    </Card>
                </Col>
            ))}
        </>
    )
}
