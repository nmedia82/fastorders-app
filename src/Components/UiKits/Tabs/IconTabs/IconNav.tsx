import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Contact, Home, Href, Profile } from '../../../../Utils/Constants'
import { SimpleNavProps } from '../../../../Types/UiKits.type'

export default function IconNav({ basicTab, setBasicTab }:SimpleNavProps) {
    return (
        <Nav tabs>
            <NavItem>
                <NavLink href={Href} className={`txt-secondary ${basicTab === '1' ? 'active' : ''}`} onClick={() => setBasicTab('1')}>
                    <i className="icofont icofont-ui-home"></i>{Home}
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={Href} className={`txt-secondary ${basicTab === '2' ? 'active' : ''}`} onClick={() => setBasicTab('2')}>
                    <i className="icofont icofont-man-in-glasses"></i>{Profile}
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={Href} className={`txt-secondary ${basicTab === '3' ? 'active' : ''}`} onClick={() => setBasicTab('3')}>
                    <i className="icofont icofont-contacts"></i>{Contact}
                </NavLink>
            </NavItem>
        </Nav>
    )
}
