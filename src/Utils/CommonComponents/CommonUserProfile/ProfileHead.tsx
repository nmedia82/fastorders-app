import React from 'react'
import { Col, Row } from 'reactstrap'
import { ProfileHeadProps } from '../../../Types/BonusUi.type'
import { H5, Image } from '../../../AbstractElements'
import { dynamicImage } from '../..'
import { WilliamJennings } from '../../Constants'
import SocialMedia from './SocialMedia'

export default function ProfileHead({ month, time, activeTime }: ProfileHeadProps) {
    return (
        <Row className="g-2">
            <Col sm={8}>
                <div className="d-flex">
                    <Image className="img-thumbnail rounded-circle me-3" src={dynamicImage(`user/7.jpg`)} alt="Generic placeholder image" />
                    <div className="flex-grow-1 align-self-center">
                        <H5 className="mt-0 user-name">{WilliamJennings}</H5>
                        <div className="tour-wrapper">
                            <span>{month}</span>
                            <i className="tour-dot fa fa-circle"></i>
                            <span className="txt-danger">{time}</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col sm={4} className="align-self-center mt-0 text-end">
                <SocialMedia className='social-tour' />
                <div className="float-sm-end">
                    <small>{activeTime}</small>
                </div>
            </Col>
        </Row>

    )
}
