/** @format */

import { ApexOptions } from "apexcharts";

export interface CustomTeamProps {
  data: string[];
  extra: number;
}

export interface CustomComponentProps {
  src?: string;
  name?: string;
  span?: string;
  value?: number;
  color?: string;
  spanClass?: string;
}

export interface ProjectDataTypes {
  id: number;
  detail: string;
  project: string;
  team: string[];
  extraTeam: number;
  startDate: string;
  dueDate: string;
  progressValue: number;
  progressColor: string;
  status: string;
  action: boolean;
}

export interface MemberWrapperTable {
  id: number;
  image: string;
  name: string;
  subTitle: string;
  companyName: string;
  companySubTitle: string;
  progressValue: number;
  progressColor: string;
  action: boolean;
}

export interface RecentOrderTypes {
  id: number;
  orderId: string;
  image: string;
  name: string;
  product: string;
  amount: string;
  vendor: string;
  statusColor: string;
  statusText: string;
  ratingValue: number;
  ratingText: string;
}

export interface StockReportTypes {
  id: number;
  orderId: string;
  item: string;
  amount: string;
  date: string;
  statusColor: string;
  statusText: string;
  quantity: string;
}

export interface ProjectWidgetProp {
  colClass?: string;
  cardClass?: string;
  height?: number;
  height2?: number;
}

interface RevenueSaleCardItems {
  id: number;
  colClass?: string;
  title: string;
  cardClass?: string;
  span: string;
  span2: string;
  chartClass: string;
  chart: any;
  chartId: string;
}

export interface RevenueSaleCardProps {
  data: RevenueSaleCardItems[];
}

export interface TotalProfitCardProps {
  colClass?: string;
  cardClass?: string;
  height: number;
  options: any;
}

interface AverageDataItems {
  id: number;
  text: string;
  visitors?: string;
  color: string;
  rate: string;
}
export interface WeeklyVisitorsProps {
  averageData: AverageDataItems[];
  colClass?: string;
  cardClass?: string;
  bodyClass?: string;
  chartColClass?: string;
  avgColClass?: string;
}

export interface TotalProfitCardProps {
  colClass?: string;
  cardClass?: string;
  height: number;
  options: any;
}

export interface DealTimerType {
  hours: number;
  minutes: number;
  seconds: number;
}
