import React from 'react'
import { Col, Row } from 'reactstrap'
import { Image, P } from '../../../../../../../AbstractElements'
import { dynamicImage, dynamicNumber } from '../../../../../../../Utils'
import { CommonProductSlideProp } from '../../../../../../../Types/ECommerce.type'

export default function CommonProductSlide({ data }: CommonProductSlideProp) {
    return (
        <Row className='product-box mb-4'>
            <Col md={5} className="product-img">
                <Image className="img-fluid img-100" src={dynamicImage(`ecommerce/${data.image}`)} alt="product" />
            </Col>
            <Col md={7} className="product-details text-start">
                <span>
                    {dynamicNumber(5).map((index) => (
                        <i className="fa fa-star font-warning me-1" key={index}></i>
                    ))}
                </span>
                <P className="mb-0">{data.title}</P>
                <div className="product-price">{data.text}</div>
            </Col>
        </Row>
    )
}

