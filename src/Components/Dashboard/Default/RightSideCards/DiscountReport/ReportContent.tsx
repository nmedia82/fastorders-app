import React from 'react'
import { H5, H6, LI, ProgressBar, UL } from '../../../../../AbstractElements'
import { Report } from '../../../../../Utils/Constants'
import { reportContentData } from '../../../../../Data/Dashboard/Default'

export default function ReportContent() {
    return (
        <div className="report-content">
            <H5>{Report}</H5>
            <UL className='simple-list flex-row'>
                {reportContentData.map((item) => (
                    <LI key={item.id}>
                        <span className="f-12 f-light f-w-500">{'This Week'}</span>
                        <H6>{item.value}{'%'}</H6>
                        <ProgressBar style={{height: "5px"}} className={`with-light-background progress-stripe-${item.color}`} animated striped value={70} />
                    </LI>
                ))}
            </UL>
        </div>
    )
}
