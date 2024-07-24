import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import ProfileHead from '../../../../../Utils/CommonComponents/CommonUserProfile/ProfileHead'
import { Image, P } from '../../../../../AbstractElements'
import { Href } from '../../../../../Utils/Constants'
import { dynamicImage } from '../../../../../Utils'
import ProfileLike from '../Common/ProfileLike'

export default function UserThirdProfile() {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style profile-img1-style">
                    <ProfileHead month={'25 Jan'} time={'1 min read'} activeTime={'10 Hours ago'} /><hr />
                    <P className="block-ellipsis">
                        {"you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."}
                    </P>
                    <Row className="g-3 mt-4 pictures step7">
                        <Col sm={6}>
                            <a href={Href}>
                                <div className="tour-blog">
                                    <Image className="img-fluid rounded" src={dynamicImage(`other-images/mountain.jpg`)} alt="mountain" />
                                </div>
                            </a>
                        </Col>
                        <Col sm={6}>
                            <a href={Href}>
                                <div className="tour-blog">
                                    <Image className="img-fluid rounded" src={dynamicImage(`other-images/sea.jpg`)} alt="sea" />
                                </div>
                            </a>
                        </Col>
                    </Row>
                    <ProfileLike />
                </div>
            </Card>
        </Col>
    )
}
