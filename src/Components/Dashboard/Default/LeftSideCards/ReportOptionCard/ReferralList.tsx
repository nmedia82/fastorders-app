import React from 'react'
import { Link } from 'react-router-dom'
import { LI, UL } from '../../../../../AbstractElements'
import { referralListData } from '../../../../../Data/Dashboard/Default'

export default function ReferralList() {
    return (
        <UL className="referral-list simple-list">
            {referralListData.map((item) => (
                <LI key={item.id}>
                    <div className={`activity-dot-${item.color}`} />
                    <Link className="f-light f-w-500" to={`${process.env.PUBLIC_URL}/applications/search`}>
                        {item.website}
                    </Link>
                    <span className="f-12 f-w-500">{item.value}{'%'}</span>
                </LI>
            ))}
        </UL>
    )
}
