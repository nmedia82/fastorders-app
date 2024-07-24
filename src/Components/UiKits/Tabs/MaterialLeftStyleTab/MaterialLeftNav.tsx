import React from 'react'
import { Nav, NavLink } from 'reactstrap'
import { Home, Href, Inbox, Profile, Settings } from '../../../../Utils/Constants'
import { SimpleNavProps } from '../../../../Types/UiKits.type'

export default function MaterialLeftNav({ basicTab, setBasicTab }: SimpleNavProps) {
    return (
        <div className='d-flex'>
            <Nav className='flex-column nav-secondary nav-left border-tab'>
                <NavLink href={Href} className={`nav-effect ${basicTab === '1' ? 'active' : ''}`} onClick={() => setBasicTab('1')}>{Home}</NavLink>
                <NavLink href={Href} className={`nav-effect ${basicTab === '2' ? 'active' : ''}`} onClick={() => setBasicTab('2')}>{Profile}</NavLink>
                <NavLink href={Href} className={`nav-effect ${basicTab === '3' ? 'active' : ''}`} onClick={() => setBasicTab('3')}>{Inbox}</NavLink>
                <NavLink href={Href} className={`nav-effect ${basicTab === '4' ? 'active' : ''}`} onClick={() => setBasicTab('4')}>{Settings}</NavLink>
            </Nav>
        </div>
    )
}
