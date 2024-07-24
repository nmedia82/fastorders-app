import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Href, IotDeveloper, UXDesigner, WebDesigner } from '../../../../Utils/Constants'
import { SimpleNavProps } from '../../../../Types/UiKits.type'

export default function JustifyNav({ basicTab, setBasicTab }: SimpleNavProps) {
    return (
        <Nav className='border-0 nav-primary' color='primary' pills>
            <NavItem>
                <NavLink href={Href} className={`${basicTab === '1' ? 'active' : ''}`} onClick={() => setBasicTab('1')}>{WebDesigner}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={Href} className={`${basicTab === '2' ? 'active' : ''}`} onClick={() => setBasicTab('2')}>{UXDesigner}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={Href} className={`${basicTab === '3' ? 'active' : ''}`} onClick={() => setBasicTab('3')}>{IotDeveloper}</NavLink>
            </NavItem>
        </Nav>
    )
}

