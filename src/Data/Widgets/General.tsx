import { ApexOptions } from "apexcharts";

//charts
const widgetRevenueOption: ApexOptions = {
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

    responsive: [
        {
            breakpoint: 1296,
            options: {
                chart: {
                    width: "100%",
                },
                xaxis: {
                    labels: {
                        show: false,
                    },
                },
                yaxis: {
                    labels: {
                        show: false,
                    },
                },
            },
        },
        {
            breakpoint: 1200,
            options: {
                chart: {
                    width: "100%",
                    height: 120,
                },
            },
        },
    ],
};

const widgetPipelineOptions: ApexOptions = {
    series: [10, 60, 30],
    labels: ["Store", "Ad", "Search"],
    chart: {
        width: 270,
        height: 270,
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
                        fontSize: "12px",
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
            breakpoint: 680,
            options: {
                chart: {
                    width: "100%",
                    height: 155,
                },
                legend: {
                    show: false,
                },
            },
        },
        {
            breakpoint: 735,
            options: {
                chart: {
                    width: 165,
                    height: 165,
                },
                legend: {
                    show: false,
                },
            },
        },
        {
            breakpoint: 1263,
            options: {
                chart: {
                    offsetX: 10,
                    width: 150,
                    height: 150,
                },
                legend: {
                    show: false,
                },
            },
        },
        {
            breakpoint: 1466,
            options: {
                chart: {
                    offsetX: 10,
                    width: 140,
                    height: 140,
                },
                legend: {
                    show: false,
                },
            },
        },
    ],
};

export const widgetsTotalProfitOption: ApexOptions = {
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
        height: 300,
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
        {
            breakpoint: 992,
            options: {
                chart: {
                    height: 255,
                },
            },
        },
        {
            breakpoint: 1221,
            options: {
                chart: {
                    height: 290,
                },
            },
        },
        {
            breakpoint: 1378,
            options: {
                chart: {
                    height: 300,
                },
            },
        },
        {
            breakpoint: 1576,
            options: {
                chart: {
                    height: 270,
                },
            },
        },
    ],
};

//data
export const generalSmallChartsData = [
    {
        id: 1,
        colClass: 'col-xl-3 col-md-5 col-sm-4 order-md-v',
        cardClass: 'sales-pipeline pipeline-chart1',
        title: 'Sales Pipeline',
        span: 'Special Discount',
        span2: '60% OFF',
        chartClass: 'pipeline',
        chartId: 'pipeline-chart1',
        chart: {
            ...widgetPipelineOptions,
            series: widgetPipelineOptions.series,
            type: widgetPipelineOptions.chart?.type,
            height: widgetPipelineOptions.chart?.height,
            width: widgetPipelineOptions.chart?.width
        },
    },
    {
        id: 2,
        colClass: 'col-xl-2 col-sm-6 col-md-3 order-md-i',
        cardClass: 'revenue-wrapper',
        title: 'Revenue',
        span: 'Today Revenue ',
        span2: '30% OFF',
        chartClass: 'revenue',
        chartId: 'revenue-chart1',
        chart: {
            ...widgetRevenueOption,
            series: widgetRevenueOption.series,
            type: widgetRevenueOption.chart?.type,
            height: widgetRevenueOption.chart?.height,
            width: widgetRevenueOption.chart?.width
        },
    },
];

export const widgetAverageVisitorsData = [
    {
        id: 1,
        text: 'Average Male Visitors',
        rate: '27',
        color: 'success'
    },
    {
        id: 2,
        text: 'Average Female Visitors',
        rate: '0.10',
        color: 'danger'
    },
];
