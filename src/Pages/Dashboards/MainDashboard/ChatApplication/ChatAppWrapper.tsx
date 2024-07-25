import React from 'react'
import { CardBody } from 'reactstrap'
import { Btn, H3, H4, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage, dynamicNumber } from '../../../../Utils'
import { budgetDetailsList } from '../../../../Data/Dashboard/Project'
import { Href } from '../../../../Utils/Constants'
import SvgIcon from '../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'

export default function ChatAppWrapper() {
    return (
        <CardBody className="pt-0 chat-app-wrapper">
            <div className="project-details">
                <div className="d-flex gap-2">
                    <Image src={dynamicImage(`dashboard-3/user/13.png`)} alt="user" />
                    <div>
                        <H4 className="f-w-500">{'Brooklyn Simmons'}</H4><span className="f-12 f-light f-w-500">{'Web Manager'}</span>
                    </div>
                </div>
                <P className="f-w-500 f-light">{'Bring your teams, work, and apps together from anywhere in one tool with github. Customize Workflows.'}</P>
                <UL className="light-card budget-details simple-list flex-row">
                    {budgetDetailsList.map((item) => (
                        <LI key={item.id}>
                            <H3 className="f-w-600">{item.title}</H3>
                            <span className="f-12 f-w-500 f-light">{item.subTitle}</span>
                        </LI>
                    ))}
                </UL>
                <div className="d-flex gap-sm-2 gap-1">
                    <Btn color='lighten-primary' className="link-with-icon" href={Href}>{'View Project'}
                        <SvgIcon iconId='arrow-two-tone' />
                    </Btn>
                    <div className="customers">
                        <UL className='simple-list flex-row'>
                            {dynamicNumber(3).map((item, index) => (
                                <LI className="d-inline-block" key={index}>
                                    <Image className="img-30 rounded-circle" src={dynamicImage(`dashboard-3/user/${item}.png`)} alt="user" />
                                </LI>
                            ))}
                        </UL>
                    </div>
                </div>
            </div>
        </CardBody>
    )
}
