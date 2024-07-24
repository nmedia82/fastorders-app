import React from 'react'
import { Col } from 'reactstrap'
import { SearchResultInitialState } from '../../../../../../Types/SearchResult.type'
import BlogShadow from './BlogShadow'
import { Href } from '../../../../../../Utils/Constants'
import { H6, LI, P, UL } from '../../../../../../AbstractElements'

export default function BlogBox({ allResult }: SearchResultInitialState) {
    return (
        <Col xxl={4} xl={6} className="box-col-12 mt-4">
            <BlogShadow />
            {allResult &&
                allResult.slice(0, 2).map((item) => (
                    <div className='info-block' key={item.id}>
                        <a href={Href}>{item.url}</a>
                        <H6>{item.title}</H6>
                        <P>{item.detail}</P>
                        <div className='star-ratings'>
                            <UL className='simple-list flex-row search-info'>
                                <LI>
                                    <i className='icofont icofont-ui-rating'></i>
                                    <i className='icofont icofont-ui-rating'></i>
                                    <i className='icofont icofont-ui-rating'></i>
                                    <i className='icofont icofont-ui-rate-blank'></i>
                                    <i className='icofont icofont-ui-rate-blank'></i>
                                </LI>
                                <LI>{item.star}</LI>
                                <LI>{item.vote}</LI>
                                <LI>{item.news}</LI>
                            </UL>
                        </div>
                    </div>
                ))
            }
        </Col>
    )
}
