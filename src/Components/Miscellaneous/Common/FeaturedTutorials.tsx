import React from 'react'
import { Card, CardBody, CardFooter, Col, Row } from 'reactstrap'
import { Rating } from 'react-simple-star-rating'
import { H2, H4, Image, LI, P, UL } from '../../../AbstractElements'
import { FeaturedTutorialsTitle } from '../../../Utils/Constants'
import { dynamicImage } from '../../../Utils'
import { featuredTutorialsData } from '../../../Data/Miscellaneous/FAQ'

export default function FeaturedTutorials() {
    return (
        <Col lg={12}>
            <div className="header-faq"><H2 className="mb-0">{FeaturedTutorialsTitle}</H2></div>
            <Row>
                {featuredTutorialsData.map((data) => (
                    <Col xxl={3} md={6} className="box-col-6" key={data.id}>
                        <Card className="features-faq product-box">
                            <div className="faq-image product-img">
                                <Image className="img-fluid" src={dynamicImage(`faq/${data.image}`)} alt="featured image" />
                                <div className="product-hover">
                                    <UL className='simple-list flex-row'>
                                        <LI><i className="icon-link"></i></LI>
                                        <LI><i className="icon-import"></i></LI>
                                    </UL>
                                </div>
                            </div>
                            <CardBody>
                                <H4 className="f-w-600 pb-1">{data.title}</H4>
                                <P>{data.description}</P>
                            </CardBody>
                            <CardFooter>
                                <span>{data.date}</span>
                                <span className="pull-right"><Rating fillColor="#7366ff" initialValue={Math.random() * 5} size={14} /></span>
                            </CardFooter>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>
    )
}
