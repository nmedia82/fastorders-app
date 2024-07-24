import React from 'react'
import { TabContent, TabPane } from 'reactstrap'
import { SimpleTabContentProp } from '../../../../Types/UiKits.type'
import { leftTabData } from '../../../../Data/UiKits/Tabs'

export default function MaterialContent({ tabId }:SimpleTabContentProp) {
    return (
        <TabContent activeTab={tabId}>
            {leftTabData && leftTabData.map((item, index) => (
                <TabPane className={`fade ${tabId === item.id ? 'show' : ''}`} tabId={item.id} key={index}>
                    {item.text}
                </TabPane>
            ))}
        </TabContent>
    )
}
