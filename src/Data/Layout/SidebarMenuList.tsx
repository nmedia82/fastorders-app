import { SidebarMenuType } from "../../Types/Layout.type";

export const menuList: SidebarMenuType[] = [
  {
    title: "- General",
    menu: [
      {
        title: "Pages",
        icon: "home",
        type: "sub",
        menu: [
          {
            title: "Dashboard",
            url: `${process.env.PUBLIC_URL}/dashboard`,
            type: "link",
          },
          {
            title: "Sample Page",
            url: `${process.env.PUBLIC_URL}/pages/sample_page`,
            type: "link",
          },
        ],
      },
      {
        title: "Ecommerce",
        icon: "shop",
        type: "sub",
        menu: [
          {
            title: "Products",
            url: `${process.env.PUBLIC_URL}/products`,
            type: "link",
          },
          // {
          //   title: "Orders",
          //   url: `${process.env.PUBLIC_URL}/orders`,
          //   type: "link",
          // },
          // {
          //   title: "Categories",
          //   url: `${process.env.PUBLIC_URL}/categories`,
          //   type: "link",
          // },
        ],
      },
    ],
  },
];
