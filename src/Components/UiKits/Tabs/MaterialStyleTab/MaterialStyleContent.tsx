import React from 'react'
import { TabContent, TabPane } from 'reactstrap'
import { SimpleTabContentProp } from '../../../../Types/UiKits.type'
import { materialData } from '../../../../Data/UiKits/Tabs'

export default function MaterialStyleContent({ tabId }:SimpleTabContentProp) {
    return (
        <TabContent activeTab={tabId}>
            {materialData && materialData.map((item, index) => (
                <TabPane className={`fade ${tabId === item.id ? 'show' : ''}`} tabId={item.id} key={index}>
                    {item.text}
                </TabPane>
            ))}
        </TabContent>
    )
}
