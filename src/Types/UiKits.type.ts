import { Direction } from "reactstrap/types/lib/Dropdown";
export interface SimpleNavProps {
    basicTab: string;
    setBasicTab: (data: string) => void;
}

export interface SimpleTabContentProp {
    tabId: string;
}

export interface BasicDropdownType {
    class: string;
    divClass?: string;
    bodyClass?: string;
    position?: Direction
    text: string;
    menulist: string[];
}

export interface DropdownCommonProp {
    item: BasicDropdownType;
    toggleClass?: string;
}

export interface CollapseStateProp {
    collapse1: boolean;
    collapse2: boolean;
}

export interface CollapseBodyProp {
    collapseId: { collapse1: boolean, collapse2: boolean }
}
export enum Placement {
    Top = 'top',
    Bottom = 'bottom',
    Left = 'left',
    Right = 'right',
}

export interface PopoverItems {
    id?: string;
    placement: Placement;
    popoverHeader?: string;
    popoverBody?: string;
    btnColor?: string;
    btnText?: string;
    trigger?: string;
    size?: string;
}

export interface CommonPopoverProp {
    data: PopoverItems
}

export interface TooltipStateProps {
    tooltip1: boolean;
    tooltip2: boolean;
    tooltip3: boolean;
}
interface ModalDataTypes {
    isOpen: boolean;
    header?: boolean;
    class?: string;
    footer?: boolean;
    toggler: () => void
    title?: string;
    size?: string;
    bodyClass?: string;
    button?: string;
    center?: boolean;
}

export interface CommonModalProps {
    modalData: ModalDataTypes
    children: string | JSX.Element | JSX.Element[]
}

export interface CenterdModalBodyProps {
    modal: boolean;
    toggle: () => void;
}

export interface StaticModalFormProp {
    toggle: () => void;
}
export interface GridCardFooterProps {
    code: string;
    value: string;
}

export interface CommonYuriModalTitleType {
    heading: string;
    subHeading: string;
    text: string;
}

export interface CustomModalBodyType {
    modal: boolean;
    toggle: () => void;
}