import React from 'react'
import { ChevronDown } from 'react-feather'
import { Btn, Image, P } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Utils'
import InboxOptions from './InboxOptions'
import UserBody from './UserBody'
import UserFooter from './UserFooter'
import { MailPropsType } from '../../../../../../Types/LetterBox.type'

export default function UserMail({ handlePrint }: MailPropsType) {

    return (
        <div className="user-mail-wrapper">
            <div className="user-title">
                <div>
                    <div className="rounded-border">
                        <Image className="img-fluid" src={dynamicImage(`user/12.png`)} alt="user" />
                    </div>
                    <div className="dropdown-subtitle">
                        <P>{'Jacob Jones'}</P>
                        <div className="onhover-dropdown">
                            <Btn color='transparent' className="p-0 dropdown-button"> {'To me'} <ChevronDown /></Btn>
                            <div className="inbox-security onhover-show-div">
                                <P> {'From: '} <span>{'jones'} &lt;{'jacobjones3@gmail.com'}&gt;</span></P>
                                <P>{'to: '}<span>{'donut.horry@gmail.com'}</span></P>
                                <P>{'reply-to: '}<span>&lt;{'jacobjones3@gmail.com'}&gt;</span></P>
                                <P>{'date: '}<span>{'Jul 13, 2024, 7:10 AM'}</span></P>
                                <P>{'subject: '}<span>{'Important Account Security Update'}</span></P>
                                <P>{'security: '}<span>{'standard encryption (TLS)'}</span></P>
                            </div>
                        </div>
                    </div>
                </div>
                <InboxOptions handlePrint={handlePrint} />
            </div>
            <UserBody />
            <UserFooter />
            <div className="send-btn">
                <Btn color='primary'>{'Send'}<i className="fa fa-paper-plane"></i></Btn>
            </div>
        </div>
    )
}