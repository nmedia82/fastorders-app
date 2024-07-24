import { ApexOptions } from "apexcharts";
import { TrendingDown, TrendingUp } from "react-feather";
import { TableColumn } from "react-data-table-component";
import { FormGroup, Input } from "reactstrap";
import { H6, Image, ProgressBar } from "../../AbstractElements";
import { dynamicImage } from "../../Utils";
import { CustomComponentProps, MemberWrapperTable } from "../../Types/Dashboard.type";
import { Href } from "../../Utils/Constants";
import SvgIcon from "../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";

//charts
const revenueOption: ApexOptions = {
    series: [
        {
            name: "Sales",
            data: [5, 25, 3, 20, 15],
        },
        {
            name: "Revenue",
            data: [5, 15, 3, 14, 15],
        },
    ],
    chart: {
        height: 140,
        type: "line",
        toolbar: {
            show: false,
        },
    },
    stroke: {
        width: 2,
        curve: "smooth",
    },
    xaxis: {
        type: "category",
        categories: ["Sat", "Sun", "Mon", "Tue", "Wed"],
        tickAmount: 6,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            style: {
                colors: ["var(--body-light-font-color)"],
            },
        },
    },
    grid: {
        show: true,
        borderColor: "var(--chart-border)",
        strokeDashArray: 6,
        position: "back",
    },
    colors: ["#80be70", "#c8e7e5"],
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            gradientToColors: ["#029eb4"],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100],
        },
    },
    legend: {
        show: false,
    },
    yaxis: {
        min: 0,
        max: 30,
        tickAmount: 3,
    },
};

const pipelineOptions: ApexOptions = {
    series: [10, 60, 30],
    labels: ["Store", "Ad", "Search"],
    chart: {
        width: 290,
        height: 290,
        type: "donut",
    },
    plotOptions: {
        pie: {
            startAngle: -90,
            endAngle: 270,
            donut: {
                labels: {
                    show: true,
                    name: {
                        offsetY: 4,
                    },
                    total: {
                        show: true,
                        fontSize: "14px",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        label: "88%",
                        color: "#000",
                    },
                },
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    colors: ["#f99b0d", "#009DB5", "#7fbe71"],
    fill: {
        type: "gradient",
    },
    legend: {
        formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
    },
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,
                },
                legend: {
                    position: "bottom",
                },
            },
        },
        {
            breakpoint: 1750,
            options: {
                chart: {
                    offsetX: 10,
                },
                legend: {
                    show: false,
                },
            },
        },
        {
            breakpoint: 1800,
            options: {
                chart: {
                    width: 154,
                    height: 154,
                    offsetX: 40,
                },
                legend: {
                    show: false,
                },
            },
        },
    ],
};

export const totalProfitOption: ApexOptions = {
    series: [
        {
            name: "Income",
            type: "line",
            data: [60, 80, 30, 60, 30, 90],
        },
        {
            name: "Earnings",
            type: "line",
            data: [55, 65, 55, 80, 40, 65],
        },
        {
            name: "Profit",
            type: "line",
            data: [50, 40, 70, 40, 100, 70],
        },
    ],
    chart: {
        height: 255,
        type: "line",
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 4,
            left: 0,
            blur: 2,
            opacity: 0.02,
        },
    },
    grid: {
        show: true,
        borderColor: "var(--chart-border)",
        strokeDashArray: 6,
        position: "back",
        xaxis: {
            lines: {
                show: false,
            },
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
    colors: ["#009DB5", "#83BF6E", "#F99B0D"],
    stroke: {
        width: 3,
        curve: "smooth",
    },
    markers: {
        discrete: [
            {
                seriesIndex: 1,
                dataPointIndex: 3,
                fillColor: "#54BA4A",
                strokeColor: "var(--white)",
                size: 6,
            },
        ],
    },
    tooltip: {
        shared: false,
        intersect: false,
    },
    xaxis: {
        type: "category",
        categories: ["Jan 02", "Jan 05", "Jan 08", "Jan 11", "Jan 14", "Jan 17"],
        min: 0.9,
        max: undefined,
        crosshairs: {
            show: false,
        },
        labels: {
            style: {
                colors: "var(--chart-text-color)",
                fontSize: "12px",
                fontFamily: "Rubik, sans-serif",
                fontWeight: 400,
            },
        },
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
    },
    fill: {
        opacity: 1,
        type: "gradient",
        gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 1,
            opacityFrom: 0.95,
            opacityTo: 1,
            stops: [0, 90, 100],
        },
    },
    yaxis: {
        tickAmount: 5,
    },
    legend: {
        show: false,
    },
    responsive: [
        {
            breakpoint: 651,
            options: {
                chart: {
                    height: 210,
                },
            },
        },
    ],
};

export const earningReportsOption: ApexOptions = {
    series: [
        {
            name: "Net Profit",
            data: [90, 40, 114, 56, 90, 80, 90],
        },
        {
            name: "Revenue",
            data: [60, 75, 90, 80, 61, 30, 70],
        },
    ],
    chart: {
        type: "bar",
        height: 245,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: false,
            columnWidth: "40%",
        },
    },
    grid: {
        show: true,
        borderColor: "var(--chart-border)",
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
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: false,
        width: 0,
    },
    xaxis: {
        categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            show: false,
        },
    },
    colors: ["#009DB5", "#F99B0D"],
    fill: {
        type: ["solid", "gradient"],
        opacity: 1,
    },
    legend: {
        show: false,
    },
    responsive: [
        {
            breakpoint: 1531,
            options: {
                chart: {
                    height: 255,
                },
            },
        },
        {
            breakpoint: 1200,
            options: {
                chart: {
                    height: 272,
                },
            },
        },
        {
            breakpoint: 992,
            options: {
                chart: {
                    height: 265,
                },
            },
        },
        {
            breakpoint: 963,
            options: {
                chart: {
                    height: 272,
                },
            },
        },
    ],
};

export const totalTransactionOption: ApexOptions = {
    series: [
        {
            name: "transaction",
            data: [1.5, 2.1, 2.9, 3.8, 3.2, 2.1],
        },
        {
            name: "traffic",
            data: [-1.4, -2.2, -2.85, -3.7, -3, -2.2],
        },
    ],
    chart: {
        type: "bar",
        height: 200,
        stacked: true,
        toolbar: {
            show: false,
        },
    },
    colors: ["#83BF6E", "#009DB5"],
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: "40%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 1,
        colors: ["#fff"],
    },

    grid: {
        borderColor: "var(--chart-border)",
        strokeDashArray: 2,
        xaxis: {
            lines: {
                show: true,
            },
        },
        yaxis: {
            lines: {
                show: false,
            },
        },
    },
    yaxis: {
        min: -5,
        max: 5,
        labels: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
    },
    xaxis: {
        categories: ["85+", "80-84", "75-79", "70-74", "65-69", "60-64"],
        position: "top",
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
    },
    legend: {
        show: false,
    },

    responsive: [
        {
            breakpoint: 1441,
            options: {
                chart: {
                    height: 180,
                },
            },
        },
    ],
};


//data
export const treadCardsData = [
    {
        id: 1,
        color: 'primary',
        icon: 'crown',
        title: 'User Profile',
        subTitle: 'Consectetur adipiscing'
    },
    {
        id: 2,
        color: 'success',
        icon: 'flash',
        title: 'Latest Trends',
        subTitle: 'Minim veniam'
    },
    {
        id: 3,
        color: 'warning',
        icon: 'blend-2',
        title: 'New Arrivals',
        subTitle: 'Excepteur sint'
    },
    {
        id: 4,
        color: 'secondary',
        icon: 'color-filter',
        title: 'Best Referrals',
        subTitle: 'Quis nostrud exercitation'
    },
];

export const dailyDropdownList = ['Today', 'Tomorrow', 'Yesterday']
export const monthlyDropdownList = ['Monthly', 'weekly', 'yearly']
export const statusDropdownList = ['Pending', 'Success', 'Deliver']

export const smallChartsData = [
    {
        id: 1,
        colClass: 'col-xl-6 col-sm-6',
        title: 'Revenue',
        span: 'Today Revenue ',
        span2: '30% OFF',
        chartClass: 'revenue',
        chartId: 'revenue-chart',
        chart: {
            ...revenueOption,
            series: revenueOption.series,
            type: revenueOption.chart?.type,
            height: revenueOption.chart?.height,
            width: revenueOption.chart?.width
        },
    },
    {
        id: 2,
        colClass: 'col-xl-6 col-sm-6',
        cardClass: 'sales-pipeline',
        title: 'Sales Pipeline ',
        span: 'Special Discount',
        span2: '60% OFF',
        chartClass: 'pipeline',
        chartId: 'pipeline-chart',
        chart: {
            ...pipelineOptions,
            series: pipelineOptions.series,
            type: pipelineOptions.chart?.type,
            height: pipelineOptions.chart?.height,
            width: pipelineOptions.chart?.width
        },
    },
];

export const revenueColumnData = [
    {
        id: 1,
        color: 'primary',
        icon: 'facebook-square',
        text: 'Facebook',
        value: 45
    },
    {
        id: 2,
        color: 'secondary',
        icon: 'instagram',
        text: 'Instagram',
        value: 70
    },
    {
        id: 3,
        color: 'success',
        icon: 'twitter',
        text: 'Twitter',
        value: 30
    },
]


export const earningReportsData = [
    {
        id: 1,
        icon: 'status-up',
        text: 'Profit',
        rate: '98.50',
        badgeIcon: <TrendingUp className="me-1" />,
        color: 'light-primary',
        badgeText: '13.5'
    },
    {
        id: 2,
        icon: 'expense',
        text: 'Expense',
        rate: '109.90',
        badgeIcon: <TrendingDown className="me-1" />,
        color: 'light-warning',
        badgeText: '1.05'
    },
]


export const transactionHeaderData = [
    {
        id: 1,
        date: "Today",
        entries: [
            {
                color: "primary",
                icon: "bill",
                title: "Water Bill",
                status: "Unsuccessfully",
                amount: "-$120",
                amountColor: "txt-danger"
            }
        ]
    },
    {
        id: 2,
        date: "Tomorrow",
        entries: [
            {
                color: "success",
                icon: "payment",
                title: "Income : Salary Oct",
                status: "Successfully",
                amount: "+$1200"
            },
            {
                color: "warning",
                icon: "invoice",
                title: "Electric Bill",
                status: "Successfully",
                amount: "-$191",
                amountColor: "txt-danger"
            },
            {
                color: "secondary",
                icon: "transfer",
                title: "Income : Jane transfers",
                status: "Successfully",
                amount: "+$540"
            },
        ]
    }
]

const CommonImage = ({ src, name, span }: CustomComponentProps) => (
    <div className="d-flex gap-2">
        <Image src={dynamicImage(`dashboard/user/${src}`)} alt="user" />
        <div>
            <H6 className="f-w-500">{name}</H6>
            <span className="f-light f-12 f-w-500">{span}</span>
        </div>
    </div>
);

const CommonCompany = ({ name, span }: CustomComponentProps) => (
    <>
        <H6 className="f-w-500">{name}</H6>
        <span className="f-light f-12 f-w-500">{span}</span>
    </>
)

const CommonProgress = ({ value, color }: CustomComponentProps) => (
    <>
        <span className="f-w-500 f-12 f-light">{value}{'%'}</span>
        <ProgressBar animated striped className={`progress-stripe-${color} mt-2`} value={value} style={{ height: "5px", width: value }} />
    </>
)

export const memberWrapperData: MemberWrapperTable[] = [
    {
        id: 1,
        image: '2.jpg',
        name: 'Jerome Bell',
        subTitle: 'UX designer',
        companyName: 'Louis',
        companySubTitle: 'UX designer',
        progressValue: 70,
        progressColor: 'primary',
        action: true
    },
    {
        id: 2,
        image: '4.jpg',
        name: 'Ralph Edwa',
        subTitle: 'Web, Laravel',
        companyName: 'IBM',
        companySubTitle: 'Development',
        progressValue: 50,
        progressColor: 'success',
        action: true
    },
    {
        id: 3,
        image: '5.jpg',
        name: 'Esther Kit',
        subTitle: 'Laravel',
        companyName: 'Johnson',
        companySubTitle: 'Unity Game',
        progressValue: 83,
        progressColor: 'secondary',
        action: true
    },
    {
        id: 4,
        image: '1.jpg',
        name: 'Leslie Jolly',
        subTitle: 'Designer',
        companyName: 'Card',
        companySubTitle: 'Marketing',
        progressValue: 79,
        progressColor: 'warning',
        action: true
    },
]

export const memberWrapperColumns: TableColumn<MemberWrapperTable>[] = [
    {
        name: "",
        sortable: false,
        center: false,
        cell: () => {
            return (
                <div className="checkbox-checked">
                    <FormGroup check>
                        <Input type="checkbox" value="" />
                    </FormGroup>
                </div>
            );
        },
        width: '7%'
    },
    {
        name: "Authors",
        selector: (row) => row.name,
        sortable: true,
        center: false,
        cell: (row) => <CommonImage src={row.image} name={row.name} span={row.subTitle} />,
        width: '25%'
    },
    {
        name: "Company",
        selector: (row) => row.companyName,
        sortable: true,
        center: false,
        cell: (row) => <CommonCompany name={row.companyName} span={row.companySubTitle} />,
        width: '30%'
    },
    {
        name: "Progress",
        selector: (row) => row.progressValue,
        sortable: true,
        center: false,
        cell: (row) => <CommonProgress value={row.progressValue} color={row.progressColor} />,
    },
    {
        name: "Action",
        selector: (row) => row.action,
        sortable: true,
        center: false,
        cell: () => {
            return (
                <div className="d-flex action-buttons">
                    <a className="light-card" href={Href}>
                        <SvgIcon iconId='edit-2' />
                    </a>
                    <a className="light-card" href={Href}>
                        <SvgIcon iconId='trash-fill' />
                    </a>
                </div>
            );
        },
    },
];

export const referralProgressData = [
    {
        id: 1,
        color: 'primary',
        value: '40px',
        width: '30%'
    },
    {
        id: 2,
        color: 'success',
        value: '20px',
        width: '20%'
    },
    {
        id: 3,
        color: 'warning',
        value: '10px',
        width: '15%'
    },
    {
        id: 4,
        color: 'secondary',
        value: '10px',
        width: '15%'
    },
    {
        id: 5,
        color: 'info',
        value: '20px',
        width: '20%'
    }
];

export const referralListData = [
    {
        id: 1,
        color: 'primary',
        website: 'www.google.com',
        value: '35.89'
    },
    {
        id: 2,
        color: 'success',
        website: 'www.youtube.com',
        value: '19.12'
    },
    {
        id: 3,
        color: 'warning',
        website: 'www.media.com',
        value: '14.75'
    },
    {
        id: 4,
        color: 'secondary',
        website: 'www.pixelstrap.com',
        value: '19.76'
    },
    {
        id: 5,
        color: 'secondary',
        website: 'www.facebook.com',
        value: '18.98'
    }
];

export const reportContentData = [
    {
        id: 1,
        value: '+78.32',
        color: 'primary'
    },
    {
        id: 2,
        value: '-34.52',
        color: 'success'
    }
];

export const customerOrderData = [
    {
        id: 1,
        image: '1.png',
        name: 'Apple PC',
        badge: 10988,
        item: 3,
        rate: '5,098'
    },
    {
        id: 2,
        image: '2.png',
        name: 'T-Shirts',
        badge: 10980,
        item: 2,
        rate: '6,010'
    },
    {
        id: 3,
        image: '3.png',
        name: 'Macbook',
        badge: 101098,
        item: 5,
        rate: '12,000'
    },
    {
        id: 4,
        image: '4.png',
        name: 'Shoes',
        badge: 101098,
        item: 3,
        rate: '2,000'
    },
    {
        id: 5,
        image: '5.png',
        name: 'Wall Watch',
        badge: 101098,
        item: 1,
        rate: '2,000'
    }
];

export const todoWrapperData = [
    {
        id: 1,
        color: 'primary',
        title: 'Products',
        time: 'Today 2:00pm Clock',
        status: 'In Progress'
    },
    {
        id: 2,
        color: 'warning',
        title: 'Web developing..',
        time: 'Due in 4 Days',
        status: 'Pending'
    },
    {
        id: 3,
        color: 'success',
        title: 'UI/UX Design',
        time: 'Due in 3 Days',
        status: 'Completed'
    },
    {
        id: 4,
        color: 'primary',
        title: 'Client Meeting ..',
        time: 'Today 1:00pm Clock',
        status: 'In Progress'
    },
    {
        id: 5,
        color: 'success',
        title: 'Wed layout',
        time: 'Due in 10 Days',
        status: 'Completed'
    },
    {
        id: 6,
        color: 'warning',
        title: 'Web developing..',
        time: 'Due in 4 Days',
        status: 'Pending'
    },
    {
        id: 7,
        color: 'success',
        title: 'UI/UX Design',
        time: 'Due in 3 Days',
        status: 'Completed'
    },
];

