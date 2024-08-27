export interface CardHeaderSpanType {
  headerClass?: string;
  heading?: string;
  smallHeading?: string;
  span?: string;
  headingClass?: string;
  span2?: string;
  spanClass?: string;
  span2Class?: string;
}
export interface CommonHeaderWithDropdownProps {
  heading?: string;
  dropDownList: string[];
  headerClass?: string;
  dropDownTitle?: string;
  caret?: boolean;
  dropDownClass?: string;
  dropDownIcon?: boolean;
  span?: string;
  headingClass?: string;
  span2?: string;
  spanClass?: string;
  span2Class?: string;
  mainDivClass?: string;
  headerIconClass?: string;
  start?: boolean;
  end?: boolean;
  onReportRangeChange?: any;
}
export interface SubTitleObjectProps {
  text?: string;
  code?: string;
}
export interface CommonCardHeaderProps {
  headClass?: string;
  title: string;
  subTitle?: SubTitleObjectProps[];
  titleClass?: string;
}

export interface CommonChartProps {
  title: string;
  bodyClass?: string;
  data: any;
  colClass?: string;
  divClass?: string;
}
export interface TableHeadItems {
  class?: string;
  name: string;
}

export interface TableHeaderProp {
  headeData: TableHeadItems[];
}

export interface AboutDetailTypes {
  id: number;
  title: string;
  child: AboutDetailChild[];
}

interface AboutDetailChild {
  id: number;
  details: AboutDetailDetails[];
}

interface AboutDetailDetails {
  id: number;
  text: string;
  year?: string;
  paragraph: string;
}

export interface SocialProfileCardProps {
  id: number;
  avatar: string;
  icon: string;
  name: string;
  email: string;
  totalPost: string;
  follower: string;
  following: string;
}

export interface UsersInitialStateType {
  allUsers: SocialProfileCardProps[];
}
export interface CommonHeaderWithDropdownProps {
  heading?: string;
  dropDownList: string[];
  headerClass?: string;
  dropDownTitle?: string;
  caret?: boolean;
  dropDownClass?: string;
  dropDownIcon?: boolean;
  span?: string;
  headingClass?: string;
  span2?: string;
  spanClass?: string;
  span2Class?: string;
  mainDivClass?: string;
  headerIconClass?: string;
  start?: boolean;
  end?: boolean;
}
