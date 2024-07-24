import React from 'react'
import { Card, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { H5, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { Href } from '../../../../../Utils/Constants'
import ProfileHead from '../../../../../Utils/CommonComponents/CommonUserProfile/ProfileHead'
import UserFooter from '../Common/UserFooter'

export default function UserProfile2Style() {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style">
                    <ProfileHead month='26 Jan' time='6 min read' activeTime='10 Hours ago' />
                    <hr />
                    <H5 className="pb-2">{'Wonderful piece that successfully conveys the magnificence of the mountains and the natural world.'}</H5>
                    <P className="block-ellipsis">{"English Romantic painter, printer, and watercolourist "}<em className="txt-danger">{'William C. Jennings'}</em>{" Is most renowned for his expressive colorization, creative landscapes, and stormy, sometimes violent maritime works. However, this moody image of the Devil's Bridge in Switzerland, close to the Gotthard Pass, feels incredibly authentic and accurately depicts historical occasions when Russian general Suvorov crossed the Alps and fought not only far larger enemy troops!"}</P>
                <div className="img-container">
                    <div className="my-gallery" id="aniimated-thumbnials">
                        <Gallery id="aniimated-thumbnials">
                            <figure>
                                <Item original={dynamicImage(`other-images/profile-style-img3.png`)}>
                                    {({ ref, open }) => (
                                        <Link to={Href} onClick={open}>
                                            <img className='img-fluid rounded' ref={ref as React.MutableRefObject<HTMLImageElement>} src={dynamicImage(`other-images/profile-style-img3.png`)} alt='gallery' />
                                        </Link>
                                    )}
                                </Item>
                            </figure>
                        </Gallery>
                    </div>
                </div>
                <UserFooter />
            </div>
        </Card>
        </Col>
    )
}

