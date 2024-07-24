import React from 'react'
import LayoutType from './LayoutType'
import SidebarType from './SidebarType'
import SideBarIconType from './SideBarIconType'
import ColorsComponent from './ColorsComponent'
import LightLayout from './LightLayout'
import DarkLayout from './DarkLayout'
import MixLayout from './MixLayout'

export default function SidebarCusmizer() {
    return (
        <>
            <LayoutType />
            <SidebarType />
            <SideBarIconType />
            <ColorsComponent />
            <LightLayout />
            <DarkLayout />
            <MixLayout />
        </>
    )
}
