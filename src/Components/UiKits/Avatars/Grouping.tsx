import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader'
import { GroupingTitle } from '../../../Utils/Constants'
import { avatarGroupData, groupSubTitle } from '../../../Data/UiKits/Avatars'
import { Image, LI, UL } from '../../../AbstractElements'
import { dynamicImage } from '../../../Utils'

export default function Grouping() {
    return (
        <Col xl={6}>
            <Card className='title-line'>
                <CommonCardHeader title={GroupingTitle} subTitle={groupSubTitle} />
                <CardBody>
                    <div className="avatars avatar-showcase">
                        {avatarGroupData && avatarGroupData.map((data) => (
                            <div className="customers d-inline-block avatar-group" key={data.id}>
                                <UL className='simple-list'>
                                    {data.child && data.child.map((item) => (
                                        <LI className="d-inline-block" key={item.id}>
                                            <Image className={`img-${item.class}`} src={dynamicImage(`avtar/${item.image}`)} alt="user profile"/>
                                        </LI>
                                    ))}
                                </UL>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
