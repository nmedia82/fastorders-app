import React, { Fragment } from 'react'
import { CardBody, Col } from 'reactstrap'
import CommonCard from '../CommonCard'
import { ProfileIntroTitle } from '../../../../../../Utils/Constants'
import { Btn, H6, P } from '../../../../../../AbstractElements'
import { profileIntroList } from '../../../../../../Data/Applications/SocialApp'

export default function ProfileIntro() {
    return (
        <Col xl={12} className='xl-50 box-col-12'>
            <CommonCard cardClass='profile-intro' title={ProfileIntroTitle}>
                <CardBody className="filter-cards-view">
                    {profileIntroList.map((item) => (
                        <Fragment key={item.id}>
                            <span className="f-w-600 mb-2 d-block">{item.text}:</span>
                            <P>{item.paragraph}</P>
                        </Fragment>
                    ))}
                    <div className="social-network theme-form">
                        <H6>{'Social Networks'}</H6>
                        <Btn color='transparent' className="social-btn btn-fb text-center"><i className="fa fa-facebook m-r-5"></i>{'Facebook'}</Btn>
                        <Btn color='transparent' className="social-btn btn-twitter text-center"><i className="fa fa-twitter m-r-5"></i>{'Twitter'}</Btn>
                        <Btn color='transparent' className="social-btn btn-google text-center"><i className="fa fa-dribbble m-r-5"></i>{'Dribbble'}</Btn>
                    </div>
                </CardBody>
            </CommonCard>
        </Col>
    )
}

