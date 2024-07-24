import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Components, Home, Href, Pages, Settings } from '../../../../Utils/Constants'
import { SimpleNavProps } from '../../../../Types/UiKits.type'

export default function VerticalNav({ basicTab, setBasicTab }:SimpleNavProps) {
    return (
        <Nav className='flex-column nav-warning' pills>
            <NavItem>
                <NavLink href={Href} className={`f-w-600 ${basicTab === '1' ? 'active' : ''}`} onClick={() => setBasicTab('1')}>{Home}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={Href} className={`f-w-600 ${basicTab === '2' ? 'active' : ''}`} onClick={() => setBasicTab('2')}>{Components}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={Href} className={`f-w-600 ${basicTab === '3' ? 'active' : ''}`} onClick={() => setBasicTab('3')}>{Pages}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={Href} className={`f-w-600 ${basicTab === '4' ? 'active' : ''}`} onClick={() => setBasicTab('4')}>{Settings}</NavLink>
            </NavItem>
        </Nav>
    )
}