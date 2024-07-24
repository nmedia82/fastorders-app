import { ChangeEvent } from "react";

export interface SubChildrenType {
    title: string;
    type: string;
    url: string;
}

export interface SidebarChildrenType {
    url?: string;
    title: string;
    type: string;
    menu?: SubChildrenType[]
    bookmark?: boolean
}

export interface SidebarItemType {
    id?: number
    title?: string;
    icon?: string;
    badge?: boolean;
    badgeName?: string;
    badgeColor?: string
    type?: string;
    active?: boolean;
    url?: string;
    bookmark?: boolean;
    menu?: SidebarChildrenType[]
}

export interface SidebarMenuType {
    title?: string;
    menu: SidebarItemType[]
}

export interface LayoutStateProps {
    isSearchBarOpen: boolean;
    bookMarkClass: boolean;
    pinedMenu: string[];
    sideBarToggle: boolean;
    sidebarSearchTerm: string;
}

export interface MenuListType {
    menu: SidebarItemType[],
    setActiveMenu: (temp: SidebarItemType[]) => void,
    activeMenu: any,
    level: number
}

export interface SearchInputProp {
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchResultProp {
    suggestion: SidebarItemType[];
}

export interface BookMarkContainerProps {
    bookmarkList: SidebarItemType[];
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    handleBookmark: (event: React.MouseEvent<HTMLElement, MouseEvent>, data: SidebarItemType) => void;
    bookmarkItems: SidebarItemType[];
}

export interface FlipBackContentProps {
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    handleBookmark: (event: React.MouseEvent<HTMLElement, MouseEvent>, data: SidebarItemType) => void;
    bookmarkItems: SidebarItemType[];
}

export interface BookmarkListProps {
    bookmarkList: SidebarItemType[];
};
export interface CallbackNavType {
    (select: string, open: boolean): void;
}
export interface NavCustomizerProps {
    callbackNav: CallbackNavType;
    selected: string;
};

export interface ConfigurationProps {
    modal: boolean;
    toggle: () => void;
}

export interface ColorsType {
    colorBackground1: string;
    colorBackground2: string;
}

export interface ChangeLngType {
    data: string;
    language: string;
}
