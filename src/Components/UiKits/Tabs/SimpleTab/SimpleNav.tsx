import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Contact, Home, Href, Profile } from '../../../../Utils/Constants'
import { SimpleNavProps } from '../../../../Types/UiKits.type'

export default function SimpleNav({ basicTab, setBasicTab }:SimpleNavProps) {
    return (
        <Nav tabs className='simple-wrapper'>
            <NavItem>
                <NavLink href={Href} className={`txt-primary ${basicTab === '1' ? 'active' : ''}`} onClick={() => setBasicTab('1')}>{Home}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={Href} className={`txt-primary ${basicTab === '2' ? 'active' : ''}`} onClick={() => setBasicTab('2')}>{Profile}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={Href} className={`txt-primary ${basicTab === '3' ? 'active' : ''}`} onClick={() => setBasicTab('3')}>{Contact}</NavLink>
            </NavItem>
        </Nav>
    )
}
