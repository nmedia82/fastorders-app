import React from 'react'
import { Card, CardBody, Col, Modal } from 'reactstrap'
import { H3, Image, LI, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import SvgIcon from '../../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'
import { Link } from 'react-router-dom'
import { BrooklynSimmons } from '../../../../../Utils/Constants'
import { demoModalData } from '../../../../../Data/UiKits/Modal'
import { CustomModalBodyType } from '../../../../../Types/UiKits.type'

export default function CustomModal1Body({ modal, toggle }: CustomModalBodyType) {
    return (
        <Modal fade centered isOpen={modal} toggle={toggle}>
            <Col xl={12}>
                <Card className="social-profile mb-0 rounded-0">
                    <CardBody>
                        <div className="social-img-wrap">
                            <div className="social-img">
                                <Image src={dynamicImage(`avtar/1.jpg`)} alt="profile" />
                            </div>
                            <div className="edit-icon">
                                <SvgIcon iconId='profile-check' />
                            </div>
                        </div>
                        <div className="social-details">
                            <H3 className="mb-1 f-w-600">
                                <Link to={`${process.env.PUBLIC_URL}/applications/social-app`}>{BrooklynSimmons}</Link>
                            </H3>
                            <span className="f-light">{'@brookly.simmons'}</span>
                            <UL className="social-follow simple-list flex-row">
                                {demoModalData && demoModalData.map((item, index) => (
                                    <LI key={index}>
                                        <H3 className="mb-0 f-w-600">{item.class}</H3>
                                        <span className="f-light">{item.text}</span>
                                    </LI>
                                ))}
                            </UL>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Modal>
    )
}