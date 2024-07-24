import React from 'react'
import { SearchResultInitialState } from '../../../../../Types/SearchResult.type'
import { Col } from 'reactstrap'
import { H6, LI, P, UL } from '../../../../../AbstractElements'
import { Href } from '../../../../../Utils/Constants'

export default function PixelstarpSearch({ allResult }: SearchResultInitialState) {
    return (
        <Col xxl={8} xl={6} className="box-col-12">
            <H6 className="mb-2">{'Search result for "Pixelstrap"'}</H6>
            {allResult &&
                allResult.slice(0, 4).map((item) => (
                    <div className='info-block' key={item.id}>
                        <a href={Href}>{item.url}</a>
                        <H6>{item.title}</H6>
                        <P>{item.detail}</P>
                        <div className='star-ratings'>
                            <UL className='search-info simple-list flex-row mt-1'>
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
                )
                )}
        </Col>
    )
}

