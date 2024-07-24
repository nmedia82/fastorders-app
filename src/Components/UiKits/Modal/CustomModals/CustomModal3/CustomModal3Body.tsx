import React from 'react'
import { Card, CardBody, Col, Modal } from 'reactstrap'
import { H3, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { Link } from 'react-router-dom'
import SvgIcon from '../../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'
import BalanceIconWrap from './BalanceIconWrap'
import { CustomModalBodyType } from '../../../../../Types/UiKits.type'

export default function CustomModal3Body({ modal, toggle }: CustomModalBodyType) {
    return (
        <Modal fade centered isOpen={modal} toggle={toggle}>
            <Col xl={12}>
                <Card className="balance-box mb-0 rounded-0">
                    <CardBody>
                        <div className="balance-profile">
                            <div className="balance-img">
                                <Image src={dynamicImage(`avtar/user.png`)} alt="user vector" />
                                <Link to={`${process.env.PUBLIC_URL}/applications/users/user-profile`} className='edit-icon'>
                                    <SvgIcon iconId='pencil' />
                                </Link>
                            </div>
                            <span className="f-light d-block">{'Your Balance '}</span>
                            <H3 className="mt-1 f-w-600">{'$768,987.90'}</H3>
                            <BalanceIconWrap />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Modal>
    )
}