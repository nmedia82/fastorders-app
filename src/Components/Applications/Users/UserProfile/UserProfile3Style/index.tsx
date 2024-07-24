import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Link } from 'react-router-dom'
import ProfileHead from '../../../../../Utils/CommonComponents/CommonUserProfile/ProfileHead'
import { P } from '../../../../../AbstractElements'
import { dynamicImage, dynamicNumber } from '../../../../../Utils'
import { Href } from '../../../../../Utils/Constants'
import UserFooter from '../Common/UserFooter'

export default function UserProfile3Style() {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style">
                    <ProfileHead month='22 Feb' time='5 min read' activeTime='4 Hours ago' />
                    <hr />
                    <P className="block-ellipsis">{'A person who interacts with a given system, platform, or gadget in order to carry out a particular activity or obtain specific data is referred to as a user. A user is someone who interacts with software, websites, or electronic gadgets in the context of technology.'}</P>
                    <Row className="mt-3 pictures my-gallery" id="aniimated-thumbnials-2">
                        {dynamicNumber(2).map((index) => (
                            <Gallery key={index}>
                                <Col sm={6}>
                                    <figure>
                                        <Item original={dynamicImage(`other-images/profile-style-img3.png`)}>
                                            {({ ref, open }) => (
                                                <Link to={Href} onClick={open}>
                                                    <img className='img-fluid rounded' ref={ref as React.MutableRefObject<HTMLImageElement>} src={dynamicImage(`other-images/profile-style-img.png`)} alt='gallery' />
                                                </Link>
                                            )}
                                        </Item>
                                    </figure>
                                </Col>
                            </Gallery>
                        ))}
                    </Row>
                    <UserFooter />
                </div>
            </Card>
        </Col>
    )
}

