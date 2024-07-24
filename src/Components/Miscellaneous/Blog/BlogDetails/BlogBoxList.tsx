import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { H6, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'
import { blogBoxListData } from '../../../../Data/Miscellaneous/Blog'

export default function BlogBoxList() {
    return (
        <Col xl={6} className="set-col-12 box-col-12">
            {blogBoxListData.map((data) => (
                <Card key={data.id}>
                    <Row className="blog-box blog-list">
                        <Col sm={5}><Image className="img-fluid sm-100-w" src={dynamicImage(`blog/blog-${data.src}`)} alt="" /></Col>
                        <Col sm={7}>
                            <div className="blog-details">
                                <div className="blog-date"><span>{data.date}</span> {data.month}</div>
                                <H6>{data.title}</H6>
                                <div className="blog-bottom-content">
                                    <UL className="simple-list flex-row blog-social">
                                        <LI>{'by: Admin'}</LI>
                                        <LI>{data.hits}</LI>
                                    </UL>
                                    <hr />
                                    <P className="mt-0">{data.text}</P>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card>
            ))}
        </Col>
    )
}
