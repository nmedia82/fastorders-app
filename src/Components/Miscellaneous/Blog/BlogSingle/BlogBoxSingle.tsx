import React from 'react'
import { H3, H4, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'
import { Comment } from '../../../../Utils/Constants'
import CommentSection from './CommentSection'
import { blogSingleData, singleBlogContent } from '../../../../Data/Miscellaneous/Blog'

export default function BlogBoxSingle() {
    return (
        <div className="blog-single">
            <div className="blog-box blog-details">
                <Image className="img-fluid w-100" src={dynamicImage(`blog/blog-single.jpg`)} alt="blog-main" />
                <div className="blog-details">
                    <UL className="blog-social flex-row simple-list">
                        <LI>{'25 July 2024'}</LI>
                        <LI><i className="icofont icofont-user"></i><span>{'William C. Jennings'}</span></LI>
                        <LI><i className="icofont icofont-thumbs-up"></i>{'2 '}<span>{'Hits'}</span></LI>
                        <LI><i className="icofont icofont-ui-chat"></i>{'692 Comments'}</LI>
                    </UL>
                    <H4>{"Using a camera's lens to record moments in time is the art form known as photography."}</H4>
                    <div className="single-blog-content-top">
                        {singleBlogContent.map((item, index)=>(
                            <P key={index}>{item}</P>
                        ))}
                    </div>
                </div>
            </div>
            <section className="comment-box">
                <H3 className="f-w-600">{Comment}</H3>
                <hr />
                <UL className='simple-list'>
                    {blogSingleData.map((item) => (
                        <LI key={item.id}>
                            {item.id !== 2 ? (
                                <CommentSection item={item} colClass='col-md-4' socialComment={true} />
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
    )
}

