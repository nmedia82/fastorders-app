import { Direction } from "reactstrap/types/lib/Dropdown";
import { SubTitleObjectProps } from "./CommonComponent.type";

interface CommonButtonsDataType {
    id: string;
    color: string;
    title: string | React.ReactNode;
    size?: string;
    disabled?: boolean;
    outline?: boolean;
    btnClass?: string
}

export interface CommonButtonsProps {
    title: string;
    md?: number;
    xs?: number;
    subTitle: SubTitleObjectProps[];
    bodyClass?: string;
    commonButtonsData: CommonButtonsDataType[];
}

interface ButtonsItem {
    id: number;
    color: string;
    title: string | React.ReactNode;
    outline?: boolean;
    size?: string
}

interface ButtonGroupChildItems {
    id: number;
    btnClass?: string;
    buttons: ButtonsItem[];
}

export interface ButtonGroupItems {
    id: number;
    title: string;
    child: ButtonGroupChildItems[];
}

export interface BlockLevelButtonsItems {
    id: number;
    title: string;
    divClass?: string;
    buttons: ButtonsItem[];
}

export interface BasicDropdownType {
    toggleClass: string;
    groupClass?: string;
    bodyClass?: string;
    position?: Direction;
    text: string;
    menulist: string[];
}

export interface DropdownCommonProp {
    item: BasicDropdownType;
}

interface GradientButtonsItems {
    id: number;
    color: string;
    text: string;
    btnClass?: string;
}

export interface GradientButtonsTypes {
    id: number;
    sm: number;
    title: string;
    buttons: GradientButtonsItems[];
}