import React from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import { H5, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import CountdownData from '../Common/CountdownData'

export default function SimpleComingSoon() {
    return (
        <div className="page-wrapper compact-wrapper" id="pageWrapper">
            <Container className="p-0" fluid>
                <div className="comingsoon">
                    <div className="comingsoon-inner text-center">
                        <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                            <Image src={dynamicImage(`logo/logo.png`)} alt="logo" />
                        </Link>
                        <H5>{'WE ARE COMING SOON'}</H5>
                        <div className="countdown" id="clock-arrival">
                            <CountdownData/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
