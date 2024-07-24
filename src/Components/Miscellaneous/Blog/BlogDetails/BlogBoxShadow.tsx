import React from 'react'
import { Card, Col } from 'reactstrap'
import { H4, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function BlogBoxShadow() {
    return (
        <Col xl={6} className="set-col-12 box-col-12">
            <Card>
                <div className="blog-box blog-shadow">
                    <Image className="img-fluid" src={dynamicImage(`blog/blog.jpg`)} alt="" />
                    <div className="blog-details">
                        <P>{'25 July 2024'}</P>
                        <H4>{"Experience lightning-fast load times and keep your visitors engaged."}</H4>
                        <UL className="simple-list flex-row blog-social">
                            <LI><i className="icofont icofont-user"></i>{'William G. Savard'}</LI>
                            <LI><i className="icofont icofont-thumbs-up"></i>{'03 Hits'}</LI>
                            <LI><i className="icofont icofont-ui-chat"></i>{'500 Comments'}</LI>
                        </UL>
                    </div>
                </div>
            </Card>
        </Col>
    )
}
