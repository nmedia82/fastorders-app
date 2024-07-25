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
        icon: "order",
        type: "link",
      },
      {
        id: 4,
        title: "Products",
        url: `${process.env.PUBLIC_URL}/products`,
        icon: "home",
        type: "link",
      },
      {
        id: 4,
        title: "Categories",
        url: `${process.env.PUBLIC_URL}/foodypk/products/Categories`,
        icon: "home",
        type: "link",
      },
      {
        id: 4,
        title: "Employees",
        url: `${process.env.PUBLIC_URL}/add-product`,
        icon: "home",
        type: "link",
      },

      {
        id: 4,
        title: "Customers",
        url: `${process.env.PUBLIC_URL}/auth/sign_up`,
        icon: "customers",
        type: "link",
      },
      {
        id: 4,
        title: "Tables",
        url: `${process.env.PUBLIC_URL}/tables`,
        icon: "table",
        type: "link",
      },
      {
        id: 4,
        title: "Reports",
        icon: "reports",
        type: "sub",
        active: false,
        menu: [
          {
            title: "Sales Reports",
            type: "link",
            url: `${process.env.PUBLIC_URL}/#`,
          },
          {
            title: "Sales by Customers",
            type: "link",
            url: `${process.env.PUBLIC_URL}/#`,
          },
          {
            title: "Sales by Tables",
            type: "link",
            url: `${process.env.PUBLIC_URL}/#`,
          },
          {
            title: "Sales by Orders",
            type: "link",
            url: `${process.env.PUBLIC_URL}/#`,
          },
        ],
      },
    ],
  },
];
