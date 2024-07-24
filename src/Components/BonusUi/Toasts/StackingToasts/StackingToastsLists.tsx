import React from 'react'
import CommonToast from '../Common/CommonToast'
import { stackingToastsData } from '../../../../Data/BonusUi/Toasts'

export default function StackingToastsLists() {
    return (
        <>
            {stackingToastsData.map((data) => (
                <CommonToast key={data.id} icon={data.icon}
                    strongText={data.strongText}
                    smallClass='txt-muted' smallText={data.smallText} bodyText={data.bodyText}
                />
            ))}
        </>
    )
}
