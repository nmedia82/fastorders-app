import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { AboutUs, Blog, ContactUs, Href } from '../../../../Utils/Constants'
import { SimpleNavProps } from '../../../../Types/UiKits.type'

export default function PillNav({ basicTab, setBasicTab }:SimpleNavProps) {
    return (
        <Nav tabs className='nav-success border-0' pills>
            <NavItem>
                <NavLink href={Href} className={basicTab === '1' ? 'active' : ''} onClick={() => setBasicTab('1')}>{AboutUs}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={Href} className={basicTab === '2' ? 'active' : ''} onClick={() => setBasicTab('2')}>{ContactUs}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={Href} className={basicTab === '3' ? 'active' : ''} onClick={() => setBasicTab('3')}>{Blog}</NavLink>
            </NavItem>
        </Nav>
    )
}
