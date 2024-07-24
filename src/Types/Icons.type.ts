interface IconItem {
    feathericon?: string;
    icon?: string;
}

export interface IconMarkUpProps {
    icon: IconItem;
    iconTag: { iconTag: string; };
    iconFClass: { iconFClass: string; };
}

export interface AbbreviationIconType {
    getIconTag: (tag: { abbreviation: string }) => void
}

export interface IconsBodyProps {
    title: string;
    iconType: string[];
    parentCallback: (tag: string) => void;
}

export interface GetIconTagType {
    getIconTag: (tag: string) => void
}