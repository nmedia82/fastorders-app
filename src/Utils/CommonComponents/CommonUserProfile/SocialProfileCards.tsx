import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardBody, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { AppDispatch, RootState } from '../../../ReduxToolkit/Store';
import { fetchUsersData } from '../../../ReduxToolkit/Reducers/UsersReducer';
import { H3, H5, Image, LI, UL } from '../../../AbstractElements';
import { dynamicImage } from '../..';
import SvgIcon from '../CommonIcons/CommonSvgIcons';
import { socialCardLinkList } from '../../../Data/Applications/Users';

export default function SocialProfileCards() {
    const { allUsers } = useSelector((state: RootState) => state.userCards);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => { dispatch(fetchUsersData()); }, [dispatch]);

    return (
        <>
            {allUsers.map((item) => (
                <Col sm={6} xxl={3} xl={4} className='col-ed-4 box-col-4' key={item.id}>
                    <Card className="social-profile">
                        <CardBody>
                            <div className="social-img-wrap">
                                <div className="social-img"><Image src={dynamicImage(item.avatar)} alt="profile" /></div>
                                <div className="edit-icon"><SvgIcon iconId='profile-check' /></div>
                            </div>
                            <div className="social-details">
                                <H5 className="mb-1 f-w-600">
                                    <Link to={`${process.env.PUBLIC_URL}/applications/social_app`}>{item.name}</Link>
                                </H5>
                                <span className="f-light">{item.email}</span>
                                <UL className="card-social simple-list flex-row">
                                    {socialCardLinkList.map((item) => (
                                        <LI key={item.id}>
                                            <a href={item.link} target="_blank" rel="noreferrer"><i className={`fa fa-${item.icon}`}></i></a>
                                        </LI>
                                    ))}
                                </UL>
                                <UL className="social-follow simple-list flex-row justify-content-center">
                                    <LI><H3 className="f-w-600 mb-0">{item.totalPost}</H3><span className="f-light">{'Posts'}</span></LI>
                                    <LI><H3 className="f-w-600 mb-0">{item.follower}</H3><span className="f-light">{'Followers'}</span></LI>
                                    <LI><H3 className="f-w-600 mb-0">{item.following}</H3><span className="f-light">{'Following'}</span></LI>
                                </UL>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}

