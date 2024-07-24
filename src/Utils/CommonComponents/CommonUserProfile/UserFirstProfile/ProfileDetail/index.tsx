import React from 'react'
import { Col, Row } from 'reactstrap'
import ProfileMail from './ProfileMail'
import { Link } from 'react-router-dom'
import ProfileContact from './ProfileContact'
import ProfileFollower from './ProfileFollower'
import { WebDesigner, WilliamJennings } from '../../../../Constants'
import SocialMedia from '../../SocialMedia'

export default function ProfileDetail() {
    return (
        <div className="info">
            <Row className="g-3 step3">
                <ProfileMail />
                <Col sm={12} xl={4} className="order-sm-0 order-xl-1">
                    <div className="user-designation tour-email">
                        <div className="title">
                            <Link to={`${process.env.PUBLIC_URL}/components/bonus-ui/tour`}> {WilliamJennings} </Link>
                        </div>
                        <div className="desc"> {WebDesigner}</div>
                    </div>
                </Col>
                <ProfileContact />
            </Row>
            <hr />
            <SocialMedia />
            <ProfileFollower />
        </div>
    )
}

