import { ApexOptions } from "apexcharts";
import { CustomComponentProps, RecentOrderTypes, StockReportTypes } from "../../Types/Dashboard.type";
import { Badges, Image } from "../../AbstractElements";
import { dynamicImage } from "../../Utils";
import { Href } from "../../Utils/Constants";
import { TableColumn } from "react-data-table-component";

//charts
export const revenueHeaderOption: ApexOptions = {
    series: [
        {
            name: "Earning",
            type: "line",
            data: [330, 60, 370, 240, 250, 70, 280, 60, 185, 60],
        },
        {
            name: "Order",
            type: "line",
            data: [70, 330, 60, 200, 100, 250, 100, 350, 110, 300],
        },
    ],
    chart: {
        height: 225,
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
        show: false,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "20%",
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
    ],
    xaxis: {
        type: "category",
        tickAmount: 8,
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

    markers: {
        discrete: [
            {
                seriesIndex: 0,
                dataPointIndex: 3,
                fillColor: "#009DB5",
                strokeColor: "var(--white)",
                size: 6,
                // sizeOffset: 2,
            },
        ],
        hover: {
            size: 6,
            sizeOffset: 0,
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
            breakpoint: 1365,
            options: {
                chart: {
                    height: 140,
                },
            },
        },
        {
            breakpoint: 1200,
            options: {
                chart: {
                    height: 225,
                },
            },
        },
        {
            breakpoint: 781,
            options: {
                chart: {
                    height: 235,
                },
            },
        },
        {
            breakpoint: 400,
            options: {
                chart: {
                    height: 170,
                },
            },
        },
    ],
};

export const weeklyVisitorOption: ApexOptions = {
    series: [
        {
            name: "Male",
            type: "line",
            data: [70, 90, 70, 90, 100],
        },
        {
            name: "Female",
            type: "line",
            data: [90, 40, 100, 50, 40],
        },
    ],
    chart: {
        height: 110,
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
        width: [2, 2],
        curve: "smooth",
    },
    grid: {
        show: false,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "20%",
        },
    },
    colors: ["#009DB5", "#83BF6E"],
    fill: {
        opacity: 1,
        type: "solid",
    },
    labels: ["1", "2", "3", "4", "5"],
    xaxis: {
        type: "category",
        tickAmount: 8,
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

    yaxis: {
        show: false,
    },

    legend: {
        show: false,
    },

    tooltip: {
        shared: false,
        intersect: false,
    },
    responsive: [
        {
            breakpoint: 1365,
            options: {
                chart: {
                    height: 90,
                },
            },
        },
        {
            breakpoint: 1200,
            options: {
                chart: {
                    height: 135,
                },
            },
        },
        {
            breakpoint: 768,
            options: {
                chart: {
                    height: 125,
                    width: "100%",
                },
            },
        },
    ],
};

export const earningChartOption: ApexOptions = {
    series: [14, 23, 21, 19, 17, 14, 12, 10],
    chart: {
        type: "polarArea",
        height: 250,
    },
    stroke: {
        colors: ["#fff"],
    },
    colors: ["#009DB5", "#F99B0D", "#83BF6E"],
    fill: {
        opacity: 0.8,
    },
    legend: {
        show: false,
    },
};

//data
export const squareLegendData = ['Male', 'Female'];
export const technologyDropdownList = ['Web designer', 'Development', 'Marketing']


export const activityDetailsData = [
    {
        id: 1,
        color: 'primary',
        subTitle: 'Optimize resource allocation for cost savings.',
        badgeText: '00:32'
    },
    {
        id: 2,
        color: 'warning',
        title: 'Products Meetings',
        badgeText: '12:34'
    },
    {
        id: 3,
        color: 'success',
        title: 'New Order placed ',
        anchor: '#xl-9087',
        badgeText: '13:59'
    },
    {
        id: 4,
        color: 'secondary',
        subTitle: 'Enhance productivity with advanced features',
        badgeText: '17:34'
    },
    {
        id: 5,
        color: 'primary',
        title: 'New Order placed ',
        anchor: '#xl-9090',
        badgeText: '19:40'
    },
    {
        id: 6,
        color: 'secondary',
        title: 'All Order delivered ',
        anchor: '#xl-7801',
        badgeText: '22:05'
    },
    {
        id: 7,
        color: 'success',
        subTitle: 'Increase sales and revenue with targeted marketing.',
        badgeText: '02:24'
    },
    {
        id: 8,
        color: 'primary',
        title: 'New Order placed ',
        anchor: '#xl-9088',
        badgeText: '15:35'
    },
];

export const deliveryCardData = [
    {
        id: 1,
        image: 'dashboard/product/2.png',
        title: 'Branded T-Shirts',
        subTitle: 'To : Jaksion Raio',
        badgeText: 'Delivered',
        color: 'primary'
    },
    {
        id: 2,
        image: 'dashboard-2/product/helmet.png',
        title: 'Stillbirth Helmet',
        subTitle: 'To : Jaksion Jawade',
        badgeText: 'Shipping',
        color: 'success'
    },
    {
        id: 3,
        image: 'dashboard-2/product/chair.png',
        title: 'Bentwood Chair',
        subTitle: 'To : Trushita Rai',
        badgeText: 'Delivered',
        color: 'primary'
    },
    {
        id: 4,
        image: 'dashboard-2/product/headphone.png',
        title: 'Wireless Headphone',
        subTitle: 'To : Jushkita Shrama',
        badgeText: 'Confirmed',
        color: 'warning'
    },
    {
        id: 5,
        image: 'dashboard-2/product/tube.png',
        title: 'Makeup Tube',
        subTitle: 'To : Sheezan Mahmed',
        badgeText: 'Delivered',
        color: 'primary'
    },
];

export const salesDetailsData = [
    {
        id: 1,
        color: 'warning',
        icon: 'sales',
        title: '24k USD',
        subTitle: 'Total Sales',
        rate: 34
    },
    {
        id: 2,
        color: 'success',
        icon: 'customer',
        title: '9.453k',
        subTitle: 'Customer',
        rate: 27
    },
    {
        id: 3,
        color: 'primary',
        icon: 'orders',
        title: '1.786k',
        subTitle: 'Orders',
        rate: 45
    },
    {
        id: 4,
        color: 'secondary',
        icon: 'transaction',
        title: '24k USD',
        subTitle: 'Transaction',
        rate: 27
    },
]

export const widget1CardData = [
    {
        id: 1,
        title: 'Today Orders',
        orders: '120k Orders',
        color: 'danger',
        rate: 10,
        image: '1.png'
    },
    {
        id: 2,
        title: 'Delivery Successful',
        orders: '390k',
        color: 'success',
        rate: 27,
        image: '2.png'
    },
];

export const customerCardData = [
    {
        id: 1,
        text: 'A'
    },
    {
        id: 2,
        image: '2.jpg'
    },
    {
        id: 3,
        image: '3.jpg'
    },
    {
        id: 4,
        text: 'R'
    },
    {
        id: 5,
        image: '6.jpg'
    }
];

const CustomOrderId = ({ span }: CustomComponentProps) => (
    <a className="f-w-500" href={Href}>{span}</a>
)

const CustomImage = ({ src, name }: CustomComponentProps) => (
    <div className="recent-profile">
        <Image className="img-30 rounded-circle img-fluid" src={dynamicImage(src)} alt="user" />
        <span className="f-light f-w-500">{name}</span>
    </div>
)

const CustomProduct = ({ span, spanClass }: CustomComponentProps) => (
    <span className={`f-light ${spanClass}`}>{span}</span>
)

const CustomAmount = ({ span }: CustomComponentProps) => (
    <span className="txt-success f-w-500">{'$'}{span}</span>
)

const CustomVendor = ({ span }: CustomComponentProps) => (
    <span className="f-light">{span}</span>
)

const CustomBadge = ({ span, color, spanClass }: CustomComponentProps) => (
    <Badges color={`light-${color}`} className={`txt-${color} ${spanClass}`}>{span}</Badges>
)

const CustomRating = ({ span, value }: CustomComponentProps) => (
    <span className="f-light f-w-600">{value}<span className="f-12 f-w-400">({span})</span></span>
)

export const recentOrderData: RecentOrderTypes[] = [
    {
        id: 1,
        orderId: '#0918765',
        image: 'dashboard/user/1.jpg',
        name: 'Alex Smith',
        product: 'Jacket',
        amount: '109.00',
        vendor: 'Shmetic Fashion',
        statusColor: 'primary',
        statusText: 'In Progress',
        ratingValue: 4.9,
        ratingText: '34 votes',
    },
    {
        id: 2,
        orderId: '#109346',
        image: 'dashboard-3/user/4.png',
        name: 'Jansh Brown',
        product: 'Clothes',
        amount: '178.00',
        vendor: 'iTech Factory',
        statusColor: 'warning',
        statusText: 'Pending',
        ratingValue: 5.0,
        ratingText: '90 votes',
    },
    {
        id: 3,
        orderId: '#209813',
        image: 'dashboard-3/user/7.png',
        name: 'Prezy Mark',
        product: 'Wallets & Bag',
        amount: '210.00',
        vendor: 'Micro Design',
        statusColor: 'success',
        statusText: 'Paid',
        ratingValue: 4.5,
        ratingText: '43 votes',
    },
    {
        id: 4,
        orderId: '#306754',
        image: 'dashboard/user/2.jpg',
        name: 'Vihan Hudda',
        product: 'Furniture',
        amount: '330.00',
        vendor: 'Nesta Technology',
        statusColor: 'warning',
        statusText: 'Pending',
        ratingValue: 4.6,
        ratingText: '30 votes',
    },
    {
        id: 5,
        orderId: '#107654',
        image: 'avtar/7.jpg',
        name: 'Biraj Shah',
        product: 'Kitchen Stole',
        amount: '187.00',
        vendor: 'Syntcy solutions',
        statusColor: 'primary',
        statusText: 'In Progress',
        ratingValue: 4.3,
        ratingText: '87 votes',
    }
];

export const recentOrderColumns: TableColumn<RecentOrderTypes>[] = [
    {
        name: "Order ID",
        selector: (row) => row.orderId,
        sortable: true,
        center: false,
        cell: (row) => <CustomOrderId span={row.orderId} />,
    },
    {
        name: "Customer",
        selector: (row) => row.name,
        sortable: true,
        center: false,
        cell: (row) => <CustomImage src={row.image} name={row.name} />,
    },
    {
        name: "Product",
        selector: (row) => row.product,
        sortable: true,
        center: false,
        cell: (row) => <CustomProduct span={row.product} />,
    },
    {
        name: "Amount",
        selector: (row) => row.amount,
        sortable: true,
        center: false,
        cell: (row) => <CustomAmount span={row.amount} />,
    },
    {
        name: "Vendor",
        selector: (row) => row.vendor,
        sortable: true,
        center: false,
        cell: (row) => <CustomVendor span={row.vendor} />,
    },
    {
        name: "Status",
        selector: (row) => row.statusText,
        sortable: true,
        center: false,
        cell: (row) => <CustomBadge span={row.statusText} color={row.statusColor} />,
    },
    {
        name: "Rating",
        selector: (row) => row.ratingText,
        sortable: true,
        center: false,
        cell: (row) => <CustomRating span={row.ratingText} value={row.ratingValue} />,
    },
];

export const stockReportData: StockReportTypes[] = [
    {
        id: 1,
        orderId: '#109346',
        item: 'Laptop',
        amount: '121.00',
        date: 'Feb 21, 2024',
        statusColor: 'primary',
        statusText: 'In Stock',
        quantity: '1 PCS'
    },
    {
        id: 2,
        orderId: '#905071',
        item: 'Apple iPod',
        amount: '230.00',
        date: 'Feb 19, 2024',
        statusColor: 'success',
        statusText: 'Low Stock',
        quantity: '90 PCS'
    },
    {
        id: 3,
        orderId: '#899306',
        item: 'MacBook',
        amount: '409.00',
        date: 'Mar 13, 2024',
        statusColor: 'warning',
        statusText: 'Out of Stock',
        quantity: '123 PCS'
    },
    {
        id: 4,
        orderId: '#509346',
        item: 'Speakers',
        amount: '908.00',
        date: 'Jan 11, 2024',
        statusColor: 'primary',
        statusText: 'In Stock',
        quantity: '230 PCS'
    },
    {
        id: 5,
        orderId: '#109346',
        item: 'Dispatched',
        amount: '309.00',
        date: 'Aug 18, 2024',
        statusColor: 'success',
        statusText: 'Low Stock',
        quantity: '309 PCS'
    }
];

export const stockReportColumns: TableColumn<StockReportTypes>[] = [
    {
        name: "Item",
        selector: (row) => row.item,
        sortable: true,
        center: false,
        cell: (row) => <CustomProduct span={row.item} spanClass="f-w-500" />,
    },
    {
        name: "Id",
        selector: (row) => row.orderId,
        sortable: true,
        center: false,
        cell: (row) => <CustomOrderId span={row.orderId} />,
    },
    {
        name: "Amount",
        selector: (row) => row.amount,
        sortable: true,
        center: false,
        cell: (row) => <CustomAmount span={row.amount} />,
    },
    {
        name: "Date",
        selector: (row) => row.date,
        sortable: true,
        center: false,
        cell: (row) => <CustomProduct span={row.date} spanClass="f-w-500" />,
    },
    {
        name: "Status",
        selector: (row) => row.statusText,
        sortable: true,
        center: false,
        cell: (row) => <CustomBadge span={row.statusText} color={row.statusColor} spanClass="f-w-500" />,
    },
    {
        name: "QLT",
        selector: (row) => row.quantity,
        sortable: true,
        center: false,
        cell: (row) => <CustomProduct span={row.quantity} spanClass="f-w-500" />,
    },
];

export const averageVisitorsData = [
    {
        id: 1,
        text: 'Average Male Visitors',
        visitors: '3,908',
        rate: '27',
        color: 'success'
    },
    {
        id: 2,
        text: 'Average Female Visitors',
        visitors: '1,204',
        rate: '0.10',
        color: 'danger'
    },
];
export const customerRateData = [
    {
        id: 1,
        text: 'First time buying',
        rate: '76.8'
    },
    {
        id: 2,
        text: 'Returning',
        rate: '25.4'
    }
]
