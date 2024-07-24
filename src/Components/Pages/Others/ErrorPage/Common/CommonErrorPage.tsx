import React from 'react'
import { Col, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Btn, H2, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { CommonErrorPageProps } from '../../../../../Types/Others.type'

export default function CommonErrorPage({error1, color, title}: CommonErrorPageProps ) {
    return (
        <div className="page-wrapper compact-wrapper" id="pageWrapper">
            <div className="error-wrapper">
                <Container>
                    <Image className="img-100" src={dynamicImage(error1 ? `gif/sad.gif`: `other-images/sad.png`)} alt="400 error" />
                    <div className="error-heading">
                        <H2 className={`headline font-${color}`}>{title}</H2>
                    </div>
                    <Col md={8} className="offset-md-2">
                        <P className="sub-content">{'The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.'}</P>
                    </Col>
                    <div>
                        <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                            <Btn size="lg" color={`${color}-gradien`}>{'BACK TO HOME PAGE'}</Btn>
                        </Link>
                    </div>
                </Container>
            </div>
        </div>
    )
}
