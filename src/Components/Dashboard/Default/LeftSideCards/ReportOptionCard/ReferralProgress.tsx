import React from 'react'
import { ProgressBar } from '../../../../../AbstractElements'
import { referralProgressData } from '../../../../../Data/Dashboard/Default'

export default function ReferralProgress() {
    return (
        <div className="progress-stacked referral-progress">
            {referralProgressData.map((item) => (
                <ProgressBar
                    style={{ width: item.width }}
                    value={item.value}
                    color={item.color}
                    key={item.id}
                />
            ))}
        </div>
    )
}
