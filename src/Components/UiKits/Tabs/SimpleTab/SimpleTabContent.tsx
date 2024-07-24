import React from 'react'
import { SimpleTabContentProp } from '../../../../Types/UiKits.type'
import { TabContent, TabPane } from 'reactstrap'
import { simpleTabData } from '../../../../Data/UiKits/Tabs'

export default function SimpleTabContent({ tabId }:SimpleTabContentProp) {
    return (
        <TabContent activeTab={tabId}>
            {simpleTabData && simpleTabData.map((item, index) => (
                <TabPane className={`fade ${tabId === item.id ? 'show' : ''}`} tabId={item.id} key={index}>
                    {item.text}
                </TabPane>
            ))}
        </TabContent>
    )
}
