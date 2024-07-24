/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import { H4, H6, P } from '../../../../../AbstractElements'
import { imageTabData } from '../../../../../Data/Applications/SearchResult'
import { dynamicImage } from '../../../../../Utils'
import { Href } from '../../../../../Utils/Constants'
import PaginationCard from '../Common/PaginationCard'

export default function ImageTab() {
    return (
        <div>
            <H6 className="mb-2">{'About 12,120 results (0.50 seconds)'}</H6>
            <Row className="my-gallery gallery-with-description">
                <Gallery>
                    {imageTabData.map((item, index) => (
                        <Col xl={3} sm={6} key={index}>
                            <figure>
                                <Item original={dynamicImage(`big-lightgallry/${item}.jpg`)}>
                                    {({ ref, open }) => (
                                        <Link to={Href} onClick={open}>
                                            <img className="img-thumbnail border-bottom-0 p-2 rounded-0 rounded-top-1" ref={ref as React.MutableRefObject<HTMLImageElement>} src={dynamicImage(`big-lightgallry/${item}.jpg`)} alt="Image description" />
                                            <div className="caption border-top-0 p-2">
                                                <H4>{'Portfolio Title'}</H4>
                                                <P>{"An admin theme is a visually beautiful and practical design template created especially for a website's or application's backend."}</P>
                                            </div>
                                        </Link>
                                    )}
                                </Item>
                            </figure>
                        </Col>
                    ))}
                </Gallery>
            </Row>
            <PaginationCard />
        </div>
    )
}

