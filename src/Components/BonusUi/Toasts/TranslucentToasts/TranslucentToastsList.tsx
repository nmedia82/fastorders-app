import React from 'react'
import CommonToast from '../Common/CommonToast'
import { translucentToastsData } from '../../../../Data/BonusUi/Toasts'

export default function TranslucentToastsList() {
    return (
        <>
            {translucentToastsData.map((data) => (
                <CommonToast key={data.id} icon={data.icon} 
                    strongText={data.strongText}
                    smallClass={`d-sm-block d-none ${data.smallClass}`}
                    smallText={data.smallText}
                    bodyText={data.bodyText}
                />
            ))}
        </>
    )
}
