/** @format */

import { SidebarMenuType } from "../../Types/Layout.type";
export const menuList: SidebarMenuType[] = [
  {
    title: "- General",
    menu: [
      {
        id: 1,
        title: "Dashboard",
        icon: "home",
        badge: false,
        badgeName: "3",
        badgeColor: "light-primary",
        type: "link",
        active: false,
        url: `${process.env.PUBLIC_URL}/dashboard`,
      },
    ],
  },
  {
    // title: "- Applications",
    menu: [
      {
        id: 4,
        title: "Orders",
        url: `${process.env.PUBLIC_URL}/orders`,
        icon: "widget",
        type: "link",
        menu: [
          {
            title: "History",
            type: "link",
            url: `/orders-history`,
          },
        ],
      },
      {
        id: 4,
        title: "Products",
        url: `${process.env.PUBLIC_URL}/products`,
        icon: "ecommerce",
        type: "link",
      },
      {
        id: 4,
        title: "Categories",
        url: `${process.env.PUBLIC_URL}/categories`,
        icon: "categories",
        type: "link",
      },
      // {
      //   id: 4,
      //   title: "Employees",
      //   url: `${process.env.PUBLIC_URL}/employees`,
      //   icon: "home",
      //   type: "link",
      // },

      // {
      //   id: 4,
      //   title: "Customers",
      //   url: `${process.env.PUBLIC_URL}/customers`,
      //   icon: "user",
      //   type: "link",
      // },
      // {
      //   id: 4,
      //   title: "Tables",
      //   url: `${process.env.PUBLIC_URL}/tables`,
      //   icon: "table",
      //   type: "link",
      // },
      // {
      //   id: 4,
      //   title: "Reports",
      //   icon: "sale",
      //   type: "sub",
      //   active: false,
      //   menu: [
      //     {
      //       title: "Sales Reports",
      //       type: "link",
      //       url: `${process.env.PUBLIC_URL}/#`,
      //     },
      //     {
      //       title: "Sales by Customers",
      //       type: "link",
      //       url: `${process.env.PUBLIC_URL}/#`,
      //     },
      //     {
      //       title: "Sales by Tables",
      //       type: "link",
      //       url: `${process.env.PUBLIC_URL}/#`,
      //     },
      //     {
      //       title: "Sales by Orders",
      //       type: "link",
      //       url: `${process.env.PUBLIC_URL}/#`,
      //     },
      //   ],
      // },
    ],
  },
];
