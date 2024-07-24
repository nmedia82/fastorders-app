import React from 'react'
import { Badges, H6, Image, LI, P, UL } from '../../../AbstractElements'
import SvgIcon from '../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'
import { CheckAll, Href, Notifications } from '../../../Utils/Constants'
import { dynamicImage } from '../../../Utils'
import { notiticationsData } from '../../../Data/Layout/RightHeader'

export default function NotificationBox() {
    return (
        <LI className="onhover-dropdown">
            <div className="notification-box onhover-click">
                <SvgIcon iconId='notification' />
                <Badges color='success' pill>{'3 '}</Badges>
            </div>
            <div className="onhover-show-div notification-dropdown">
                <H6 className="f-18 mb-0 dropdown-title">{Notifications} </H6>
                <UL className='simple-list'>
                    {notiticationsData.map((item) => (
                        <LI className="d-flex" key={item.id}>
                            <div className="notification-image">
                                <Image className="img-fluid" src={dynamicImage(`avtar/${item.image}`)} alt="user" />
                                <div className={`notification-icon bg-${item.color}`}><i className={`fa fa-${item.icon}`}></i></div>
                            </div>
                            <div>
                                <P><span className="f-w-500 me-1">{item.name}</span>{item.text}</P>
                                <span className="f-light">{item.time}</span>
                            </div>
                        </LI>
                    ))}
                    <LI><a className="f-w-700" href={Href}>{CheckAll}</a></LI>
                </UL>
            </div>
        </LI>
    )
}
