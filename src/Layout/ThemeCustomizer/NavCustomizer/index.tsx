import React from 'react'
import { NavCustomizerProps } from '../../../Types/Layout.type'
import { Nav, NavLink } from 'reactstrap'
import { Image } from '../../../AbstractElements'
import { dynamicImage } from '../../../Utils'
import { navCustomizerData } from '../../../Data/Layout/ThemeCustomizer'

export default function NavCustomizer({ callbackNav, selected }: NavCustomizerProps) {
    return (
        <Nav className='flex-column nac-pills' vertical>
            <NavLink className={selected === 'sidebar-type' ? 'active' : ''} onClick={() => callbackNav('sidebar-type', true)}>
                <div className='settings'>
                    <Image className="img-fluid" src={dynamicImage(`customizer/brush.png`)} alt="" />
                </div>
                <span>{'Quick option'}</span>
            </NavLink>
            {navCustomizerData.map((item) => (
                <NavLink key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>
                    <div>
                        <Image className="img-fluid" src={dynamicImage(`customizer/${item.image}`)} alt="" />
                    </div>
                    <span>{item.title}</span>
                </NavLink>
            ))}
        </Nav>
    )
}