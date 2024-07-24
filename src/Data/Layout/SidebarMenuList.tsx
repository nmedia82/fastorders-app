import { SidebarMenuType } from "../../Types/Layout.type";

export const menuList: SidebarMenuType[] = [
    {
        title: '- General',
        menu: [
            {
                id: 1,
                title: 'Dashboard',
                icon: 'home',
                badge: true,
                badgeName: "3",
                badgeColor: "light-primary",
                type: 'sub',
                active: false,
                menu: [
                    {
                        title: 'Default',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/dashboard/default`,
                    },
                    {
                        title: 'Ecommerce',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/dashboard/ecommerce`,
                    },
                    {
                        title: 'Project',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/dashboard/project`,
                    },
                ],
            },
            {
                id: 2,
                title: 'Widgets',
                icon: 'widget',
                type: 'sub',
                active: false,
                menu: [
                    {
                        title: 'General',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/widgets/general_widget`,
                    },
                    {
                        title: 'Chart',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/widgets/chart_widget`,
                    },
                ],
            },
        ],
    },
    {
        title: '- Applications',
        menu: [
            {
                id: 3,
                title: 'Project',
                type: 'sub',
                icon: 'project',
                badge: true,
                badgeName: "New",
                badgeColor: "light-secondary",
                active: false,
                menu: [
                    {
                        title: 'Project List',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/applications/project/project_list`,
                    },
                    {
                        title: 'Project Create',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/applications/project/create_project`,
                    },
                ],
            },
            {
                id: 4,
                title: 'File Manager',
                url: `${process.env.PUBLIC_URL}/applications/file_manager`,
                icon: 'file',
                type: 'link'
            },
            {
                id: 5,
                title: 'Ecommerce',
                icon: 'ecommerce',
                type: 'sub',
                active: false,
                menu: [
                    {
                        title: 'Add Products',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/applications/ecommerce/add_products`,
                    },
                    {
                        title: 'Product',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/applications/ecommerce/product`,
                    },
                    {
                        title: 'Category Page',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/applications/ecommerce/category_page`,
                    },
                    {
                        title: 'Product Page',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/applications/ecommerce/product_page`,
                    },
                    {
                        title: 'Product list',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/applications/ecommerce/product_list`,
                    },
                    {
                        title: 'Payment Details',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/applications/ecommerce/payment_details`,
                    },
                    {
                        title: 'Order History',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/applications/ecommerce/order_history`,
                    },
                    {
                        title: 'Invoices',
                        type: 'sub',
                        menu: [
                            {
                                title: 'Invoice-1',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/invoice/invoice_1`,
                            },
                            {
                                title: 'Invoice-2',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/invoice/invoice_2`,
                            },
                            {
                                title: 'Invoice-3',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/invoice/invoice_3`,
                            },
                            {
                                title: 'Invoice-4',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/invoice/invoice_4`,
                            },
                            {
                                title: 'Invoice-5',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/invoice/invoice_5`,
                            },
                            {
                                title: 'Invoice-6',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/invoice/invoice_6`,
                            },
                        ]
                    },
                    {
                        title: 'Cart',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/applications/ecommerce/cart`,
                    },
                    {
                        title: 'Wishlist',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/applications/ecommerce/wishlist`,
                    },
                    {
                        title: 'Checkout',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/applications/ecommerce/checkout`,
                    },
                    {
                        title: 'Pricing',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/applications/ecommerce/pricing`,
                    },
                ],
            },
            {
                id: 6,
                title: 'Letter Box',
                url: `${process.env.PUBLIC_URL}/applications/email/letter_box`,
                icon: 'email',
                type: 'link',
            },
            {
                id: 7,
                title: 'Chats',
                icon: 'chat',
                type: 'sub',
                active: false,
                menu: [
                    {
                        title: 'Private Chat',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/applications/chat/chat_private`,
                    },
                    {
                        title: 'Group chat',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/applications/chat/chat_group`,
                    },
                ],
            },
            {
                id: 8,
                title: 'Users',
                icon: 'user',
                type: 'sub',
                bookmark: true,
                active: false,
                menu: [
                    {
                        title: 'Users Profile',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/applications/users/user_profile`,
                    },
                    {
                        title: 'Users Edit',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/applications/users/edit_profile`,
                    },
                    {
                        title: 'Users Cards',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/applications/users/user_cards`,
                    },
                ],
            },
            {
                id: 9,
                title: 'Bookmarks',
                url: `${process.env.PUBLIC_URL}/applications/bookmark`,
                bookmark: true,
                type: 'link',
                icon: 'bookmark',
            },
            {
                id: 10,
                title: 'Contacts',
                icon: 'contact',
                url: `${process.env.PUBLIC_URL}/applications/contacts`,
                type: 'link',
            },
            {
                id: 11,
                title: 'Tasks',
                url: `${process.env.PUBLIC_URL}/applications/task`,
                icon: 'task',
                type: 'link',
            },
            {
                id: 12,
                title: 'Calendar',
                url: `${process.env.PUBLIC_URL}/applications/calendar_basic`,
                icon: 'calendar',
                type: 'link',
            },
            {
                id: 13,
                title: 'Social App',
                url: `${process.env.PUBLIC_URL}/applications/social_app`,
                bookmark: true,
                icon: 'social',
                type: 'link'
            },
            {
                id: 14,
                title: 'To-Do',
                url: `${process.env.PUBLIC_URL}/applications/to_do`,
                bookmark: true,
                icon: 'to-do',
                type: 'link',
            },
            {
                id: 15,
                title: 'Search Result',
                url: `${process.env.PUBLIC_URL}/applications/search`,
                icon: 'search',
                type: 'link'
            },
        ],
    },
    {
        title: '- Forms & Table',
        menu: [
            {
                id: 16,
                title: 'Forms',
                icon: 'form',
                type: 'sub',
                active: false,
                menu: [
                    {
                        title: 'Form Controls',
                        type: 'sub',
                        menu: [
                            {
                                title: 'Form Validation',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/forms/form_controls/form_validation`,
                            },
                            {
                                title: 'Base Inputs',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/forms/form_controls/base_input`,
                            },
                            {
                                title: 'Checkbox & Radio',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/forms/form_controls/radio_checkbox_control`,
                            },
                            {
                                title: 'Input Groups',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/forms/form_controls/input_group`,
                            },
                            {
                                title: 'Input Mask',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/forms/form_controls/input_mask`,
                            },
                            {
                                title: 'Mega Options',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/forms/form_controls/mega_options`,
                            },
                        ],
                    },
                    {
                        title: 'Form Widgets',
                        type: 'sub',
                        menu: [
                            {
                                title: 'Datepicker',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/forms/form_widgets/datepicker`,
                            },
                            {
                                title: 'Touchspin',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/forms/form_widgets/touchspin`,
                            },
                            {
                                title: 'Switch',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/forms/form_widgets/switch`,
                            },
                            {
                                title: 'Typeahead',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/forms/form_widgets/typeahead`,
                            },
                            {
                                title: 'Clipboard',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/forms/form_widgets/clipboard`,
                            },
                        ],
                    },
                    {
                        title: 'Form Layout',
                        type: 'sub',
                        menu: [
                            {
                                title: 'Form Wizard 1',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/forms/form_layout/form_wizard_1`,
                            },
                            {
                                title: 'Form Wizard 2',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/forms/form_layout/form_wizard_2`,
                            },
                            {
                                title: 'Two Factor',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/forms/form_layout/two_factor`,
                            },
                        ],
                    },
                ],
            },
            {
                id: 17,
                title: 'Tables',
                icon: 'table',
                type: 'sub',
                active: false,
                menu: [
                    {
                        title: 'Reactstrap Tables',
                        type: "sub",
                        menu: [
                            {
                                title: 'Basic Tables',
                                type: "link",
                                url: `${process.env.PUBLIC_URL}/table/reactstrap_tables/basic_table`,
                            },
                            {
                                title: 'Table Components',
                                type: "link",
                                url: `${process.env.PUBLIC_URL}/table/reactstrap_tables/table_components`,
                            },
                        ],
                    },
                    {
                        title: 'Data Tables',
                        type: "sub",
                        menu: [
                            {
                                title: 'Basic Init',
                                type: "link",
                                url: `${process.env.PUBLIC_URL}/table/data_tables/basic_init`,
                            },
                            {
                                title: 'Advance Init',
                                type: "link",
                                url: `${process.env.PUBLIC_URL}/table/data_tables/advance_init`,
                            },
                            {
                                title: 'API',
                                type: "link",
                                url: `${process.env.PUBLIC_URL}/table/data_tables/api`,
                            },
                            {
                                title: 'Data Sources',
                                type: "link",
                                url: `${process.env.PUBLIC_URL}/table/data_tables/data_sources`,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: '- Components',
        menu: [
            {
                id: 18,
                title: 'Ui Kits',
                icon: 'ui-kits',
                type: 'sub',
                active: false,
                menu: [
                    {
                        title: 'Typography',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/ui_kits/typography`,
                    },
                    {
                        title: 'Avatars',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/ui_kits/avatars`,
                    },
                    {
                        title: 'Helper Classes',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/ui_kits/helper_classes`,
                    },
                    {
                        title: 'Grid',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/ui_kits/grid`,
                    },
                    {
                        title: 'Tag & pills',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/ui_kits/tag_pills`,
                    },
                    {
                        title: 'Progress',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/ui_kits/progress_bar`,
                    },
                    {
                        title: 'Modal',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/ui_kits/modal`,
                    },
                    {
                        title: 'Alert',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/ui_kits/alert`,
                    },
                    {
                        title: 'Popover',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/ui_kits/popover`,
                    },
                    {
                        title: 'Tooltip',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/ui_kits/tooltip`,
                    },
                    {
                        title: 'Dropdown',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/ui_kits/dropdown`,
                    },
                    {
                        title: 'Accordion',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/ui_kits/accordion`,
                    },
                    {
                        title: 'Tabs',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/ui_kits/tabs`,
                    },
                    {
                        title: 'Lists',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/ui_kits/lists`,
                    },
                ],
            },
            {
                id: 19,
                title: 'Bonus Ui',
                icon: 'bonus-kit',
                type: 'sub',
                active: false,
                menu: [
                    {
                        title: 'Scrollable',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/bonus_ui/scrollable`,
                    },
                    {
                        title: 'Tree View',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/bonus_ui/tree`,
                    },
                    {
                        title: 'Toasts',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/bonus_ui/toasts`,
                    },
                    {
                        title: 'Rating',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/bonus_ui/rating`,
                    },
                    {
                        title: 'Dropzone',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/bonus_ui/dropzone`,
                    },
                    {
                        title: 'Tour',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/bonus_ui/tour`,
                    },
                    {
                        title: 'SweetAlert2',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/bonus_ui/sweet_alert_2`,
                    },
                    {
                        title: 'Owl Carousel',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/bonus_ui/owl_carousel`,
                    },
                    {
                        title: 'Ribbons',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/bonus_ui/ribbons`,
                    },
                    {
                        title: 'Pagination',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/bonus_ui/pagination`,
                    },
                    {
                        title: 'Breadcrumb',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/bonus_ui/breadcrumb`,
                    },
                    {
                        title: 'Range Slider',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/bonus_ui/range_slider`,
                    },
                    {
                        title: 'Image Cropper',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/bonus_ui/image_cropper`,
                    },
                    {
                        title: 'Basic Card',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/bonus_ui/basic_card`,
                    },
                    {
                        title: 'Creative Card',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/bonus_ui/creative_card`,
                    },
                    {
                        title: 'Timeline',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/bonus_ui/timeline`,
                    },
                ],
            },
            {
                title: 'Icons',
                icon: 'icons',
                id: 20,
                type: 'sub',
                active: false,
                menu: [
                    {
                        title: 'Flag icon',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/icons/flag_icon`,
                    },
                    {
                        title: 'Fontawesome Icon',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/icons/font_awesome`,
                    },
                    {
                        title: 'Ico Icon',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/icons/ico_icon`,
                    },
                    {
                        title: 'Themify Icon',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/icons/themify_icon`,
                    },
                    {
                        title: 'Feather Icon',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/icons/feather_icon`,
                    },
                    {
                        title: 'Whether Icon',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/icons/whether_icon`,
                    },
                ],
            },
            {
                id: 21,
                title: 'Buttons',
                url: `${process.env.PUBLIC_URL}/components/buttons`,
                icon: 'button',
                type: 'link',
            },
            {
                title: 'Charts',
                icon: 'charts',
                type: 'sub',
                id: 22,
                active: false,
                menu: [
                    {
                        title: 'Apex Chart',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/charts/chart_apex`,
                    },
                    {
                        title: 'Google Chart',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/charts/chart_google`,
                    },
                    {
                        title: 'Chartjs Chart',
                        type: "link",
                        url: `${process.env.PUBLIC_URL}/components/charts/chartjs`,
                    },
                ],
            },
        ],
    },
    {
        title: '- Pages',
        menu: [
            {
                id: 23,
                title: 'Sample Page',
                url: `${process.env.PUBLIC_URL}/pages/sample_page`,
                icon: 'sample-page',
                type: "link",
            },
            {
                id: 24,
                title: 'Others',
                icon: 'others',
                type: 'sub',
                active: false,
                menu: [
                    {
                        title: 'Error Page',
                        type: 'sub',
                        menu: [
                            {
                                title: 'Error 400',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/others/error_page_400`,
                            },
                            {
                                title: 'Error 401',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/others/error_page_401`,
                            },
                            {
                                title: 'Error 403',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/others/error_page_403`,
                            },
                            {
                                title: 'Error 404',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/others/error_page_404`,
                            },
                            {
                                title: 'Error 500',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/others/error_page_500`,
                            },
                            {
                                title: 'Error 503',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/others/error_page_503`,
                            },
                        ],
                    },
                    {
                        title: 'Authentication',
                        type: 'sub',
                        menu: [
                            {
                                title: 'Login Simple',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/auth/login`,
                            },
                            {
                                title: 'Visual Login',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/auth/login_bg_img`,
                            },
                            {
                                title: 'Visual Login 2',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/auth/login_bg_img2`,
                            },
                            {
                                title: 'Validate Login',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/auth/login_bs_validation`,
                            },
                            {
                                title: 'Tooltip Login',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/auth/login_bs_tooltip`,
                            },
                            {
                                title: 'Alert Login',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/auth/login_sa_validation`,
                            },
                            {
                                title: 'Register',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/auth/sign_up`,
                            },
                            {
                                title: 'Register Image',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/auth/sign_up_one`,
                            },
                            {
                                title: 'Visual Reg 2',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/auth/sign_up_two`,
                            },
                            {
                                title: 'Reg Wizard',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/auth/sign_up_wizard`,
                            },
                            {
                                title: 'Unlock User',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/auth/unlock`,
                            },
                            {
                                title: 'Pwd Forget',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/auth/forget_password`,
                            },
                            {
                                title: 'Pwd Reset',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/auth/reset_password`,
                            },
                            {
                                title: 'Maintenance',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/auth/maintenance`,
                            },
                        ],
                    },
                    {
                        title: 'Coming Soon',
                        type: 'sub',
                        menu: [
                            {
                                title: 'Coming Simple',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/coming_soon/coming_simple`,
                            },
                            {
                                title: 'Coming Bg Vid',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/coming_soon/coming_bg_video`,
                            },
                            {
                                title: 'Coming Bg Img',
                                type: 'link',
                                url: `${process.env.PUBLIC_URL}/coming_soon/coming_bg_img`,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: '- Miscellaneous',
        menu: [
            {
                id: 25,
                title: 'Gallery',
                icon: 'gallery',
                type: 'sub',
                active: false,
                menu: [
                    {
                        title: 'Gallery Grid',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/miscellaneous/gallery/grid_gallery`,
                    },
                    {
                        title: 'Gallery Grid Desc',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/miscellaneous/gallery/grid_gallery_description`,
                    },
                    {
                        title: 'Masonry Gallery',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/miscellaneous/gallery/masonry_gallery`,
                    },
                    {
                        title: 'Masonry With Desc',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/miscellaneous/gallery/masonry_gallery_description`,
                    },
                    {
                        title: 'Hover Effects',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/miscellaneous/gallery/gallery_hover`,
                    },
                ],
            },
            {
                id: 26,
                title: 'Blog',
                icon: 'blog',
                type: 'sub',
                active: false,
                menu: [
                    {
                        title: 'Blog Details',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/miscellaneous/blog/blog_detail`,
                    },
                    {
                        title: 'Blog Single',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/miscellaneous/blog/blog_single`,
                    },
                    {
                        title: 'Add Post',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/miscellaneous/blog/add_post`,
                    },
                ],
            },
            {
                id: 27,
                title: 'FAQ',
                type: 'link',
                icon: 'faq',
                url: `${process.env.PUBLIC_URL}/miscellaneous/faq`,
            },
            {
                id: 28,
                title: 'Job Search',
                icon: 'job-search',
                type: 'sub',
                active: false,
                menu: [
                    {
                        title: 'Cards view',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/miscellaneous/job_search/job_cards_view`,
                    },
                    {
                        title: 'List View',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/miscellaneous/job_search/job_list_view`,
                    },
                    {
                        title: 'Job Details',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/miscellaneous/job_search/job_details`,
                    },
                    {
                        title: 'Apply',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/miscellaneous/job_search/job_apply`,
                    },
                ],
            },
            {
                id: 29,
                title: 'Learning',
                icon: 'learning',
                type: 'sub',
                active: false,
                menu: [
                    {
                        title: 'Learning List',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/miscellaneous/learning/learning_list_view`,
                    },
                    {
                        title: 'Detailed Course',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/miscellaneous/learning/course_details`,
                    },
                ],
            },
            {
                id: 30,
                title: 'Maps',
                icon: 'maps',
                type: 'sub',
                active: false,
                menu: [
                    {
                        title: 'Google Maps',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/miscellaneous/maps/google_map`,
                    },
                    {
                        title: 'Leaflet Maps',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/miscellaneous/maps/leaflet_map`,
                    },
                ],
            },
            {
                id: 31,
                title: 'Editors',
                icon: 'editors',
                type: 'sub',
                active: false,
                menu: [
                    {
                        title: 'Quill Editor',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/miscellaneous/editors/quill_editor`,
                    },
                    {
                        title: 'ACE Code Editor',
                        type: 'link',
                        url: `${process.env.PUBLIC_URL}/miscellaneous/editors/ace_code_editor`,
                    },
                ],
            },
            {
                id: 32,
                title: 'Knowledgebase',
                icon: 'knowledgebase',
                type: 'link',
                active: false,
                url: `${process.env.PUBLIC_URL}/miscellaneous/knowledgebase`,
            },
            {
                id: 33,
                title: 'Support Ticket',
                icon: 'support-tickets',
                type: 'link',
                active: false,
                url: `${process.env.PUBLIC_URL}/miscellaneous/support_ticket`,
            },
        ],
    },
];