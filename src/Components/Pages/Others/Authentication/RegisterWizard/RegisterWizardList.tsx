import React from 'react'
import { H3, Image, LI, UL } from '../../../../../AbstractElements'
import CommonLogo from '../Common/CommonLogo'
import { dynamicImage } from '../../../../../Utils'
import { stepperHorizontalData } from '../../../../../Data/Pages/Others'
import { RegisterWizardProp } from '../../../../../Types/Others.type'

export default function RegisterWizardList({ level }: RegisterWizardProp) {
    return (
        <UL className="simple-list anchor">
            <LI><CommonLogo logoClass='text-start ps-0' /></LI>
            {stepperHorizontalData.map((item) => (
                <LI key={item.id}>
                    <div className="progresscont">
                        <div className="circleblocks">
                            <div className="user-profile">
                                <div className={item.divClass}>
                                    <div className={`circulo text-center ${level === item.id ? "activecirculo" : level > item.id ? "activecirculo" : ""}`}>
                                        <i className={`icofont icofont-${item.icon}`}></i>
                                    </div>
                                    <div className="user-content">
                                        <H3 className="font-primary">{item.title}</H3>
                                        <span className="f-light">{item.detail}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </LI>
            ))}
            <LI>
                <Image className="img-fluid w-100" src={dynamicImage(`login/icon.png`)} alt="loogin page" />
            </LI>
        </UL>
    )
}