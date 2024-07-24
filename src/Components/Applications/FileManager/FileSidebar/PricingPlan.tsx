import React from 'react'
import { Grid } from 'react-feather'
import { Btn, H5, H6, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'
import { pricingPlanData } from '../../../../Data/Applications/FileManager'

export default function PricingPlan() {
    return (
        <UL className='simple-list'>
            <LI>
                <Btn color='primary' outline><Grid /> {'Pricing plan'}</Btn>
            </LI>
            {pricingPlanData.map((item) => (
                <LI key={item.id}>
                    <div className="pricing-plan">
                        <H6>{item.title}</H6>
                        <H5>{item.subTitle}</H5>
                        <P>{item.text}</P>
                        <Btn size='xs' color='primary' outline>{item.buttonText}</Btn>
                        <Image className="bg-img" src={dynamicImage(`dashboard/${item.image}`)} alt="" />
                    </div>
                </LI>
            ))}
        </UL>
    )
}