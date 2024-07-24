import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Link } from 'react-router-dom'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Href, ImageGalleryDescriptionTitle, PortfolioTitle } from '../../../../Utils/Constants'
import { galleryData } from '../../../../Data/Miscellaneous/Gallery'
import { dynamicImage } from '../../../../Utils'
import { H4, P } from '../../../../AbstractElements'

export default function ImageGalleryDescription() {
    return (
        <Card>
            <CommonCardHeader title={ImageGalleryDescriptionTitle} />
            <CardBody className="my-gallery gallery-with-description mb-0">
                <Row>
                    <Gallery withCaption>
                        {galleryData.map((item, i) => (
                            <Col xl={3} sm={6} key={i}>
                                <figure itemProp="caption description">
                                    <Item original={dynamicImage(`big-lightgallry/${item}`)} caption="Using a camera's lens to record moments in time is the art form known as photography. To produce aesthetically striking photos, it entails the deft use of light, composition, and subject matter." width="802" height="476">
                                        {({ ref, open }) => (
                                            <Link to={Href} onClick={open}>
                                                <img className='img-thumbnail border-bottom-0 p-2 rounded-0 rounded-top-1' ref={ref as React.MutableRefObject<HTMLImageElement>} src={dynamicImage(`big-lightgallry/${item}`)} alt='Image_description' />
                                                <div className='caption border-top-0 p-2'>
                                                    <H4>{PortfolioTitle}</H4>
                                                    <P>{"Using a camera's lens to record moments in time is the art form known as photography. To produce aesthetically striking photos, it entails the deft use of light, composition, and subject matter."}</P>
                                                </div>
                                            </Link>
                                        )}
                                    </Item>
                                </figure>
                            </Col>
                        ))}
                    </Gallery>
                </Row>
            </CardBody>
        </Card>
    )
}