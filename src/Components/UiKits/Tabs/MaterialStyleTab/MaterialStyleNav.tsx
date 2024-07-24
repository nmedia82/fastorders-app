import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Description, Href, Review, User } from '../../../../Utils/Constants'
import { SimpleNavProps } from '../../../../Types/UiKits.type'

export default function MaterialStyleNav({ basicTab, setBasicTab }: SimpleNavProps) {
    return (
        <Nav tabs className='border-tab border-0 mb-0 nav-danger'>
            <NavItem>
                <NavLink href={Href} className={`nav-border txt-danger nav-danger ${basicTab === '1' ? 'active' : ''}`} onClick={() => setBasicTab('1')}><i className="icofont icofont-man-in-glasses" />{User}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={Href} className={`nav-border txt-danger nav-danger ${basicTab === '2' ? 'active' : ''}`} onClick={() => setBasicTab('2')}><i className="icofont icofont-file-document" />{Description}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={Href} className={`nav-border txt-danger nav-danger ${basicTab === '3' ? 'active' : ''}`} onClick={() => setBasicTab('3')}><i className="icofont icofont-star" />{Review}</NavLink>
            </NavItem>
        </Nav>
    )
}

