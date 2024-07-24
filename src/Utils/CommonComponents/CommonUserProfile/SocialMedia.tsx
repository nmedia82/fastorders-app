import React from 'react'
import { Link } from 'react-router-dom'
import { SocialMediaProp } from '../../../Types/BonusUi.type'
import { LI, UL } from '../../../AbstractElements'
import { tourSocialData } from '../../../Data/BonusUi/Tour'

export default function SocialMedia({ className }: SocialMediaProp) {
    return (
        <div className={`social-media ${className} step4`}>
            <UL className="list-inline simple-list flex-row">
                {tourSocialData && tourSocialData.map((item, index) => (
                    <LI className="list-inline-item" key={index}>
                        <Link to={item.link} target="_blank" rel='noreferrer'>
                            <i className={`fa fa-${item.icon}`} />
                        </Link>
                    </LI>
                ))}
            </UL>
        </div>
    )
}

