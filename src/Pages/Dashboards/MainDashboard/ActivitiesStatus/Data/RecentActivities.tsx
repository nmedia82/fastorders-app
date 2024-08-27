/** @format */

import { ApexOptions } from "apexcharts";
import {
  Badges,
  Image,
  LI,
  ProgressBar,
  UL,
} from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Utils";
import {
  CustomComponentProps,
  CustomTeamProps,
  ProjectDataTypes,
} from "../../../../../Types/Dashboard.type";

import { TableColumn } from "react-data-table-component";
import CommonDropdown from "../../../../../Utils/CommonComponents/CommonDropdown";

//charts
export const projectsEarningsOptions: ApexOptions = {
  series: [
    {
      name: "Earning",
      data: [4, 3, 3, 3, 4, 3, 3, 4, 5, 3.5, 2.5, 2.5],
    },
  ],
  chart: {
    height: 100,
    type: "bar",
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 10,
      left: 0,
      blur: 3,
      color: "var(--theme-default)",
      opacity: 0.25,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 2,
      borderRadiusApplication: "around",
      borderRadiusWhenStacked: "last",
      columnWidth: "25%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["S", "M", "T", "W", "T", "F", "S", "s", "m", "t", "w", "t"],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  colors: ["var(--theme-default)"],
};

export const totalClientsOption: ApexOptions = {
  series: [
    {
      data: [0, 15, 15, 10, 10, 20, 20, 25, 25, 25],
    },
  ],
  chart: {
    type: "area",
    height: 145,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
    type: "category",
    categories: [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "july",
      "aug",
      "sep",
      "oct",
    ],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  grid: {
    show: false,
    padding: {
      left: -60,
    },
  },
  yaxis: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    hover: {
      sizeOffset: 4,
    },
  },
  colors: ["#F99B0D"],
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.1,
      inverseColors: true,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 100],
    },
  },
};

export const projectOverviewOption: ApexOptions = {
  series: [
    {
      name: "Earning",
      type: "line",
      data: [120, 250, 70, 330, 140, 230, 90, 280, 40, 150, 350, 150, 350],
    },
    {
      name: "Order",
      type: "line",
      data: [80, 200, 150, 200, 100, 150, 110, 200, 110, 200, 150, 80, 30],
    },
  ],
  chart: {
    height: 240,
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 2,
      left: 0,
      blur: 4,
      color: "#000",
      opacity: 0.08,
    },
  },
  stroke: {
    width: [2, 2, 2],
    curve: "smooth",
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    strokeDashArray: 0,
    position: "back",
    xaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  colors: ["#009DB5", "#83BF6E"],
  fill: {
    opacity: 1,
    type: "solid",
  },
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
  ],
  xaxis: {
    type: "category",
    tickAmount: 4,
    tickPlacement: "between",
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      color: "var(--chart-border)",
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    min: 0,
    tickAmount: 4,
    // tickPlacement: "between",
    labels: {
      formatter: function (val) {
        return val + "K";
      },
      offsetX: -5,
    },
  },
  tooltip: {
    shared: false,
    intersect: false,
  },
  responsive: [
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 250,
        },
      },
    },
    {
      breakpoint: 1023,
      options: {
        chart: {
          height: 260,
        },
      },
    },
    {
      breakpoint: 1008,
      options: {
        chart: {
          height: 268,
        },
      },
    },
    {
      breakpoint: 1007,
      options: {
        chart: {
          height: 250,
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 240,
        },
      },
    },
  ],
};

export const projectbarOption: ApexOptions = {
  series: [
    {
      name: "Revenue",
      data: [
        30, 40, 18, 25, 18, 10, 20, 35, 22, 40, 30, 38, 20, 35, 11, 28, 40, 11,
        28, 40, 11, 28, 40, 11, 28, 40, 11, 11, 28, 40, 11, 28, 40, 11, 28, 40,
        11,
      ],
    },
  ],
  chart: {
    type: "bar",
    height: 180,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
    },
  },
  colors: ["var(--chart-dashed-border)"],
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  fill: {
    opacity: 0.7,
  },
  tooltip: {
    enabled: false,
  },
  states: {
    normal: {
      filter: {
        type: "none",
      },
    },
    hover: {
      filter: {
        type: "none",
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none",
      },
    },
  },
  responsive: [
    {
      breakpoint: 405,
      options: {
        chart: {
          height: 150,
        },
      },
    },
  ],
};

export const earningAverageOption: ApexOptions = {
  series: [
    {
      data: [20, 40, 60, 20, 100, 60, 20, 80, 40, 10, 80, 100, 100],
    },
  ],
  chart: {
    type: "line",
    height: 160,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 0,
      left: 0,
      blur: 20,
      color: "var(--theme-default)",
      opacity: 0.5,
    },
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    strokeDashArray: 6,
    position: "back",
    xaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  stroke: {
    curve: "stepline",
    width: 2,
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
    min: 0,
    tickAmount: 5,
  },
  markers: {
    size: 3,
    colors: "var(--white)",
    strokeColors: "#009DB5",
    strokeWidth: 2,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    shape: "circle",
    offsetX: 2,
    offsetY: 2,
    // radius: 2,
    hover: {
      size: 3,
    },
  },
  colors: ["#009DB5"],

  responsive: [
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 122,
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 160,
        },
      },
    },
  ],
};

//data
export const progressDetailsData = [
  {
    id: 1,
    color: "secondary",
    icon: "car-white",
  },
  {
    id: 2,
    color: "success",
    icon: "game",
  },
  {
    id: 3,
    color: "primary",
    icon: "home-white",
  },
];

export const widget1CardsData = [
  {
    id: 1,
    title: "Projects Earnings",
    subTitle: "From last Week",
    price: "$202",
    percent: 60,
    chart: {
      ...projectsEarningsOptions,
      series: projectsEarningsOptions.series,
      type: projectsEarningsOptions.chart?.type,
      height: projectsEarningsOptions.chart?.height,
    },
  },
  {
    id: 2,
    title: "Total Clients",
    subTitle: "Compare to last month",
    price: "930",
    percent: 20,
    chart: {
      ...totalClientsOption,
      series: totalClientsOption.series,
      type: totalClientsOption.chart?.type,
      height: totalClientsOption.chart?.height,
    },
  },
];

export const calendarDateList = [
  {
    id: 1,
    text: "Mon",
    date: 14,
  },
  {
    id: 2,
    text: "Tue",
    date: 15,
  },
  {
    id: 3,
    text: "Wed",
    date: 16,
  },
  {
    id: 4,
    text: "Thu",
    date: 17,
  },
  {
    id: 5,
    text: "Fri",
    date: 18,
  },
  {
    id: 6,
    text: "Sat",
    date: 19,
  },
  {
    id: 7,
    text: "Sun",
    date: 20,
  },
  {
    id: 8,
    text: "Mon",
    date: 21,
  },
  {
    id: 9,
    text: "Tue",
    date: 22,
  },
  {
    id: 10,
    text: "Wed",
    date: 23,
  },
  {
    id: 11,
    text: "Thu",
    date: 24,
  },
];

export const clientContentList = [
  {
    id: 1,
    image: "1.png",
    title: "Meeting with Client",
    name: "Jaskion Raio",
  },
  {
    id: 2,
    image: "2.png",
    title: "Deal with New Client",
    name: "Ashkista Jain",
  },
];

const CustomTeam = ({ data, extra }: CustomTeamProps) => (
  <div className="customers">
    <UL className="simple-list flex-row">
      {data.map((item, index) => (
        <LI className="d-inline-block" key={index}>
          <Image
            className="img-30 rounded-circle"
            src={dynamicImage(`dashboard-3/user/${item}`)}
            alt="user"
          />
        </LI>
      ))}
      <LI className="d-inline-block">
        <div className="light-card">
          <span className="f-w-500 f-light f-12">
            {"+"}
            {extra}
          </span>
        </div>
      </LI>
    </UL>
  </div>
);

const CustomDate = ({ span }: CustomComponentProps) => (
  <span className="f-light">{span}</span>
);

const CommonProgress = ({ value, color }: CustomComponentProps) => (
  <div className="d-flex">
    <ProgressBar
      animated
      striped
      className={`progress-stripe-${color}`}
      value={value}
      style={{ height: "5px", width: value }}
    />
    <span className="f-12 f-light">
      {value}
      {"%"}
    </span>
  </div>
);

const CustomBadge = ({ span, color, spanClass }: CustomComponentProps) => (
  <Badges color={`light-${color}`} className={`txt-${color} ${spanClass}`}>
    {span}
  </Badges>
);

const actionDropdownList = ["Edit", "Delete"];

export const RecentActivitiesData: ProjectDataTypes[] = [
  {
    id: 1,
    detail: "Order Details Here",
    project: "Development",
    team: ["1.png", "2.png", "3.png"],
    extraTeam: 3,
    startDate: "12 Jan 2024",
    dueDate: "15 Jan 2024",
    progressValue: 70,
    progressColor: "primary",
    status: "In Progress",
    action: true,
  },
  {
    id: 2,
    detail: "Order Details Here",
    project: "Web Landing",
    team: ["4.png", "5.png"],
    extraTeam: 9,
    startDate: "5 Feb 2024",
    dueDate: "25 Feb 2024",
    progressValue: 25,
    progressColor: "warning",
    status: "Pending",
    action: true,
  },
  {
    id: 3,
    detail: "Order Details Here",
    project: "Development",
    team: ["6.png", "7.png", "8.png"],
    extraTeam: 3,
    startDate: "12 Feb 2024",
    dueDate: "1 Mar 2024",
    progressValue: 100,
    progressColor: "success",
    status: "Done",
    action: true,
  },
  {
    id: 4,
    detail: "Order Details Here",
    project: "Marketing",
    team: ["9.png", "10.png", "11.png"],
    extraTeam: 4,
    startDate: "25 Feb 2024",
    dueDate: "10 Mar 2024",
    progressValue: 40,
    progressColor: "warning",
    status: "Pending",
    action: true,
  },
];

export const RecentActivities: TableColumn<ProjectDataTypes>[] = [
  {
    name: "Date",
    selector: (row) => row.dueDate,
    sortable: true,
    center: false,
    cell: (row) => <CustomDate span={row.dueDate} />,
    style: {
      width: "10%", // Set a fixed width
    },
  },
  {
    name: "Detail",
    selector: (row) => row.detail,
    sortable: true,
    center: false,
    cell: (row) => row.detail,
  },
  {
    //   name: "Type",
    //   selector: (row) => row.dueDate,
    //   sortable: true,
    //   center: false,
    //   cell: (row) => <CustomDate span={row.dueDate} />,
  },
  //   {
  //     name: "Progress",
  //     selector: (row) => row.progressValue,
  //     sortable: true,
  //     center: false,
  //     cell: (row) => (
  //       <CommonProgress value={row.progressValue} color={row.progressColor} />
  //     ),
  //   },
  //   {
  //     name: "Status",
  //     selector: (row) => row.status,
  //     sortable: true,
  //     center: false,
  //     cell: (row) => (
  //       <CustomBadge span={row.status} color={row.progressColor} spanClass="" />
  //     ),
  //   },
  //   {
  //     name: "Action",
  //     selector: (row) => row.action,
  //     sortable: true,
  //     center: false,
  //     cell: () => {
  //       return (
  //         <CommonDropdown
  //           dropDownList={actionDropdownList}
  //           dropDownClass="icon-dropdown text-center"
  //           dropDownIcon
  //           end
  //         />
  //       );
  //     },
  //   },
];

export const budgetDetailsList = [
  {
    id: 1,
    title: "21 Oct",
    subTitle: "Due Date",
  },
  {
    id: 2,
    title: "$78,320",
    subTitle: "Budget",
  },
];

export const recentSliderData = [
  {
    id: 1,
    color: "primary",
    icon: "game-icon",
    title: "Marketing",
    customers: [
      {
        id: 1,
        image: "avtar/4.jpg",
      },
      {
        id: 2,
        image: "dashboard-3/user/12.png",
      },
      {
        id: 3,
        number: 2,
      },
    ],
    progress: 45,
  },
  {
    id: 2,
    color: "success",
    icon: "pen-scale",
    title: "NFT Design",
    customers: [
      {
        id: 1,
        image: "dashboard-3/user/14.png",
      },
      {
        id: 2,
        image: "dashboard-3/user/15.png",
      },
      {
        id: 3,
        number: 6,
      },
    ],
    progress: 70,
  },
  {
    id: 3,
    color: "secondary",
    icon: "programming",
    title: "Development",
    customers: [
      {
        id: 1,
        image: "dashboard-3/user/16.png",
      },
      {
        id: 2,
        image: "dashboard-3/user/17.png",
      },
      {
        id: 3,
        number: 1,
      },
    ],
    progress: 80,
  },
  {
    id: 4,
    color: "warning",
    icon: "apple-ios",
    title: "iOS App UI",
    customers: [
      {
        id: 1,
        image: "dashboard-3/user/18.png",
      },
      {
        id: 2,
        image: "dashboard-3/user/19.png",
      },
      {
        id: 3,
        number: 1,
      },
    ],
    progress: 30,
  },
  {
    id: 5,
    color: "secondary",
    icon: "programming",
    title: "Development",
    customers: [
      {
        id: 1,
        image: "dashboard-3/user/16.png",
      },
      {
        id: 2,
        image: "dashboard-3/user/17.png",
      },
      {
        id: 3,
        number: 1,
      },
    ],
    progress: 80,
  },
  {
    id: 6,
    color: "primary",
    icon: "game-icon",
    title: "Marketing",
    customers: [
      {
        id: 1,
        image: "avtar/4.jpg",
      },
      {
        id: 2,
        image: "dashboard-3/user/12.png",
      },
      {
        id: 3,
        number: 2,
      },
    ],
    progress: 45,
  },
  {
    id: 7,
    color: "secondary",
    icon: "programming",
    title: "Development",
    customers: [
      {
        id: 1,
        image: "dashboard-3/user/16.png",
      },
      {
        id: 2,
        image: "dashboard-3/user/17.png",
      },
      {
        id: 3,
        number: 1,
      },
    ],
    progress: 80,
  },
];

export const earningRightContent = [
  {
    id: 1,
    time: "10:45 PM",
    earning: "+732.67",
    color: "success",
  },
  {
    id: 2,
    time: "03:20 AM",
    earning: "-108.09",
    color: "danger",
  },
];

export const earningButtons = ["1d", "10d", "1m", "6m", "1y"];

export const dailyTaskData = [
  {
    id: 1,
    color: "primary",
    title: "iOS App UI/UX Meet..",
    time: "9:00 am",
  },
  {
    id: 2,
    color: "warning",
    title: "Start Web developing..",
    time: "10:00 am",
  },
  {
    id: 3,
    color: "success",
    title: "IOS App ui",
    time: "10:00 am",
  },
];
