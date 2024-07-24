import React, { Fragment, useMemo, useState } from 'react'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { H6, LI, UL } from '../../AbstractElements'
import { RootState } from '../../ReduxToolkit/Store';
import { Pinned } from '../../Utils/Constants';
import { menuList } from '../../Data/Layout/SidebarMenuList';
import { SidebarItemType, SidebarMenuType } from '../../Types/Layout.type';
import SidebarSubMenu from './SidebarSubMenu';
import BackButton from './BackButton';

export default function SidebarNav() {
    const [activeMenu, setActiveMenu] = useState<SidebarItemType[]>([]);
    const { t } = useTranslation();
    const { pinedMenu, sidebarSearchTerm } = useSelector((state: RootState) => state.layout);
    const filteredMenuList = useMemo(() => {
        if (!sidebarSearchTerm) return menuList;
        return menuList.map((mainMenu) => {
            const filteredSubMenu = mainMenu.menu.filter((submenu) => {
                if (submenu.title) {
                    return submenu.title.toLowerCase().includes(sidebarSearchTerm.toLowerCase());
                }
                return false;
            });
            return {
                ...mainMenu, menu: filteredSubMenu,
            };
        });
    }, [sidebarSearchTerm]);
    const shouldHideMenu = (mainMenu: SidebarMenuType) => {
        return mainMenu.menu.map((data) => data.title).every((tittles) => pinedMenu.includes(tittles as string));
    }
    return (
        <UL className='sidebar-links simple-list custom-scrollbar' id='simple-bar' >
            <div data-simplebar="init" className='simplebar-scrollable-x simplebar-scrollable-y'>
                <div className="simplebar-wrapper">
                    <div className="simplebar-mask">
                        <div className="simplebar-offset">
                            <div className="simplebar-content-wrapper">
                                <div className="simplebar-content">
                                    <BackButton />
                                    <LI className={`pin-title sidebar-main-title ${pinedMenu.length > 0 ? "show" : ""} `}>
                                        <div>
                                            <H6>{Pinned}</H6>
                                        </div>
                                    </LI>
                                    {filteredMenuList && filteredMenuList.map((mainMenu, i) => (
                                        <Fragment key={i}>
                                            <LI className={`sidebar-main-title ${shouldHideMenu(mainMenu) ? 'd-none' : ''}`}>
                                                <div>
                                                    <H6 className='lan-1'>{t(`${mainMenu.title}`)}</H6>
                                                </div>
                                            </LI>
                                            <SidebarSubMenu menu={mainMenu.menu} activeMenu={activeMenu} setActiveMenu={setActiveMenu} level={0} />
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UL>
    )
}
