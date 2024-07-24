import { useEffect, useState } from "react";
import { Col, BreadcrumbItem, Breadcrumb } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import H2 from "../Headings/H2Element";
import { menuList } from "../../Data/Layout/SidebarMenuList";
import { SidebarChildrenType, SidebarMenuType } from "../../Types/Layout.type";
import { Href } from "../../Utils/Constants";

export default function Breadcrumbs() {
    const location = useLocation();
    const [titles, setTitles] = useState<(string | undefined)[]>([]);

    useEffect(() => {
        const currentPath = location.pathname;
        const findPathTitle = (data: SidebarMenuType[], currentPath: string) => {
            let titles: (string | undefined)[] = [];
            data.forEach((item) => {
                const { menu, title } = item;
                menu.forEach((menuItem) => {
                    const { menu } = menuItem;
                    if (menu) {
                        const foundSubMenu = findSubMenuTitle(menu, currentPath);
                        if (foundSubMenu) {
                            titles = [title, menuItem.title, foundSubMenu[foundSubMenu.length - 1]];
                        }
                    } else {
                        if (menuItem.url === currentPath) {
                            titles = [title, menuItem.title];
                        }
                    }
                });
            });
            return titles;
        };
        const findSubMenuTitle = (subMenu: SidebarChildrenType[], currentPath: string): (string | undefined)[] | undefined => {
            let subMenuTitles: (string | undefined)[] = [];
            for (const subMenuItem of subMenu) {
                if (subMenuItem.url === currentPath) {
                    subMenuTitles = [subMenuItem.title];
                } else if (subMenuItem.menu) {
                    const foundSubMenu = findSubMenuTitle(subMenuItem.menu, currentPath);
                    if (foundSubMenu) {
                        subMenuTitles = [subMenuItem.title, ...foundSubMenu];
                    }
                }
            }
            return subMenuTitles.length ? subMenuTitles : undefined;
        };
        setTitles(findPathTitle(menuList, currentPath));
    }, [location.pathname]);

    return (
        <Col xs={'auto'} className="header-right-wrapper page-title">
            <div>
                <H2>{titles[titles.length - 1]}</H2>
                <Breadcrumb className="justify-content-sm-start align-items-center mb-0">
                    <BreadcrumbItem>
                        <Link to={Href}>{'Home'}</Link>
                    </BreadcrumbItem>
                    {titles.map((title: string | undefined, index: number) => (
                        index !== 0 && (
                            <BreadcrumbItem key={index} className="f-w-500">
                                {title}
                            </BreadcrumbItem>
                        )
                    ))}
                </Breadcrumb>
            </div>
        </Col>
    );
};