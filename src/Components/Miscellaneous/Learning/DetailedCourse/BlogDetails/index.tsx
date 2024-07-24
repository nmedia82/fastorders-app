import React from 'react'
import { Col } from 'reactstrap'
import { H3, H4, Image, LI, P, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { Comment } from '../../../../../Utils/Constants'
import CommentSection from './CommentSection'
import { commentBoxData, singleBlogContentTop } from '../../../../../Data/Miscellaneous/Learning'

export default function BlogDetails() {
    return (
        <Col xl={9} className="xl-60 order-xl-0 order-1 box-col-12">
            <div className="blog-single">
                <div className="blog-box blog-details">
                    <Image className="img-fluid w-100" src={dynamicImage(`faq/learning-1.png`)} alt="blog-main" />
                    <div className="blog-details pb-0">
                        <UL className="simple-list flex-row blog-social">
                            <LI>{'25 July 2024'}</LI>
                            <LI><i className="icofont icofont-user"></i>{'Mark '}<span>{'Jecno'}</span></LI>
                            <LI><i className="icofont icofont-thumbs-up"></i>{'02 '}<span>{'Hits'}</span></LI>
                            <LI><i className="icofont icofont-ui-chat"></i>{'598 Comments'}</LI>
                        </UL>
                        <H4 className="mt-3">{'Knowledge can be defined as awareness of facts or as practical skills. there is wide agreement among philosophers that it is a form of true belief.Internet.'}</H4>
                        <div className="single-blog-content-top">
                            {singleBlogContentTop.map((item, index)=>(
                                <P key={index}>{item}</P>
                            ))}
                        </div>
                    </div>
                </div>
                <section className="comment-box">
                    <H3 className="f-w-600">{Comment}</H3>
                    <hr />
                    <UL className='simple-list'>
                        {commentBoxData.map((item) => (
                            <LI key={item.id}>
                                {item.id !== 2 ? (
                                    <CommentSection item={item} colClass='col-md-4 xl-100' socialComment={true} />
                                ) : (
                                    <UL>
                                        <LI><CommentSection item={item} colClass='col-xl-12' /></LI>
                                    </UL>
                                )}
                            </LI>
                        ))}
                    </UL>
                </section>
            </div>
        </Col>
    )
}
