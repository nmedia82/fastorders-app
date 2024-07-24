import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Link } from 'react-router-dom'
import ProfileHead from '../../../../../Utils/CommonComponents/CommonUserProfile/ProfileHead'
import { dynamicImage } from '../../../../../Utils'
import { Href } from '../../../../../Utils/Constants'
import { P } from '../../../../../AbstractElements'
import UserFooter from '../Common/UserFooter'

export default function UserProfile5Style() {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style">
                    <ProfileHead month='05 Feb' time='5 min read' activeTime='10 Hours ago' />
                    <hr />
                    <Row>
                        <Col lg={12} xl={4}>
                            <div className="my-gallery" id="aniimated-thumbnials-3">
                                <Gallery>
                                    <figure>
                                        <Item original={dynamicImage(`blog/img.png`)}>
                                            {({ ref, open }) => (
                                                <Link to={Href} onClick={open}>
                                                    <img ref={ref as React.MutableRefObject<HTMLImageElement>} className='img-fluid rounded' src={dynamicImage(`blog/img.png`)} alt='gallery' />
                                                </Link>
                                            )}
                                        </Item>
                                    </figure>
                                </Gallery>
                            </div>
                            <UserFooter />
                        </Col>
                        <Col xl={8}>
                            <P className="block-ellipsis pt-xl-0 pt-3">{"The wind gives life to the planet. This unobservable, enigmatic energy has the power to revitalize a setting. Its absence can cause the world to become serenely motionless. Its strength is scarcely visible on bare mountain summits, but it becomes obvious in woods and on the water. Winds may be violent and even harmful. When we investigate it carefully Nature is not a destination. Home is here. Garry Snyder In a very real sense, our home, or natural environment, is made up of mountains and valleys, the seas and the sky, the sun and the soil, the trees and the flowers. Growing up in the contemporary, civilized environment, it's simple to start believing"}</P>
                        </Col>
                    </Row>
                </div>
            </Card>
        </Col>
    )
}
