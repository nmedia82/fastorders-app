import { AlignCenter, AlignLeft, AlignRight, ArrowLeft, ArrowLeftCircle, ArrowRight, ArrowRightCircle, ArrowUp, ArrowUpCircle, Clock, HelpCircle, Loader, Radio } from "react-feather";
import { BasicDropdownType, BlockLevelButtonsItems, ButtonGroupItems, GradientButtonsTypes } from "../../Types/Buttons.type";

export const squareButtonsSubTitle = [
    {
        text: 'Used',
        code: ' .btn-square '
    },
    {
        text: 'class to square button.'
    }
];

export const defaultButtonSubTitle = [
    {
        text: 'Use the',
        code: ' .btn '
    },
    {
        text: 'class for set default buttons and set background color like this : ',
        code: '.bg-* [primary/secondary..]. '
    }
];

export const buttonSizesSubTitle = [
    {
        text: 'Use the',
        code: ' .btn-lg,.btn-sm,.btn-xs '
    },
    {
        text: 'for sizes of buttons'
    }
];

export const roundedButtonsSubTitle = [
    {
        text: 'Add',
        code: ' .btn-pill '
    },
    {
        text: 'class for rounded buttons.'
    }
];

export const outlineRoundedButtonsSubTitle = [
    {
        text: 'Add',
        code: ' .btn-pill '
    },
    {
        text: 'and',
        code: ' .btn-outline-* '
    },
    {
        text: 'class for outline with buttons.'
    }
];

export const disabledButtonSubTitle = [
    {
        text: 'Add',
        code: ' .disabled '
    },
    {
        text: 'class or',
        code: ' disabled="disabled" '
    },
    {
        text: 'attribute for disabled button'
    }
];

export const iconsButtonSubTitle = [
    {
        text: 'Used all variation of icons. like this : ',
        code: ' .btn-square/.btn-pill '
    },
    {
        text: '.'
    }
];

export const blockLevelButtonsSubTitle = [
    {
        code: ' .btn '
    },
    {
        text: 'className used for buttons. and ',
        code: '.d-grid '
    },
    {
        text: 'used for block level buttons.'
    }
];


export const buttonGroupSubTitle = [
    {
        text: 'Wrap a series of buttons with',
        code: ' .btn  '
    },
    {
        text: 'in',
        code: ' .btn-group '
    },
    {
        text: '. & custom class used for sizes:',
        code: '.btn-lg / .btn-sm .'
    }
];

export const buttonVariationsSubTitle = [
    {
        code: ' .btn  '
    },
    {
        text: 'class used for buttons and',
        code: ' .btn-group-vertical '
    },
    {
        text: 'for vertical buttons and made different types of design using ',
        code: '.btn-group .'
    }
];

export const boldBorderOutlineButtonsSubTitle = [
    {
        text: 'Add',
        code: ' .btn-outline-*-2x '
    },
    {
        text: 'class for bold outline buttons.'
    }
];

export const radioCheckboxGroupSubTitle = [
    {
        text: 'Add radio for ',
        code: ' .radio '
    },
    {
        text: 'class & checkbox for',
        code: ' .checkbox '
    },
    {
        text: 'class used.'
    }
];

export const gradientButtonsSubTitle = [
    {
        text: 'Add',
        code: ' .btn-*-gradien '
    },
    {
        text: 'class for gradien buttons.'
    }
];

export const squareButtonsData = [
    {
        id: '1',
        btnClass: 'btn-square',
        color: "primary",
        title: "Primary Button",
    },
    {
        id: '2',
        btnClass: 'btn-square',
        color: "secondary",
        title: "Secondary Button",
    },
    {
        id: '3',
        btnClass: 'btn-square',
        color: "success",
        title: "Success Button",
    },
    {
        id: '4',
        btnClass: 'btn-square',
        color: "info",
        title: "Info Button",
    },
    {
        id: '5',
        btnClass: 'btn-square',
        color: "warning",
        title: "Warning Button",
    },
    {
        id: '6',
        btnClass: 'btn-square',
        color: "danger",
        title: "Danger Button",
    },
    {
        id: '7',
        btnClass: 'btn-square',
        color: "light",
        title: "Light Button",
    },
];

export const defaultButtonData = [
    {
        id: '1',
        color: "primary",
        title: "Primary Button",
    },
    {
        id: '2',
        color: "secondary",
        title: "Secondary Button",
    },
    {
        id: '3',
        color: "success",
        title: "Success Button",
    },
    {
        id: '4',
        color: "info",
        title: "Info Button",
    },
    {
        id: '5',
        color: "warning",
        title: "Warning Button",
    },
    {
        id: '6',
        color: "danger",
        title: "Danger Button",
    },
    {
        id: '7',
        color: "light",
        title: "Light Button",
    },
];

export const buttonSizesData = [
    {
        id: '1',
        color: "light-primary",
        size: 'lg',
        btnClass: 'b-r-8',
        title: "Large button",
    },
    {
        id: '2',
        btnClass: 'b-r-8',
        color: "light-secondary",
        title: "Default button",
    },
    {
        id: '3',
        btnClass: 'b-r-8',
        size: 'sm',
        color: "light-warning",
        title: "Small button",
    },
    {
        id: '4',
        btnClass: 'b-r-6',
        size: 'xs',
        color: "light-success",
        title: "Extra small button",
    },
];

export const outlineButtonSizesData = [
    {
        id: '1',
        color: "primary",
        outline: true,
        size: 'lg',
        btnClass: 'b-r-8',
        title: "Large button",
    },
    {
        id: '2',
        btnClass: 'b-r-8',
        outline: true,
        color: "secondary",
        title: "Default button",
    },
    {
        id: '3',
        btnClass: 'b-r-8',
        outline: true,
        size: 'sm',
        color: "warning",
        title: "Small button",
    },
    {
        id: '4',
        btnClass: 'b-r-6',
        outline: true,
        size: 'xs',
        color: "success",
        title: "Extra small button",
    },
];

export const roundedButtonsData = [
    {
        id: '1',
        btnClass: 'btn-pill',
        color: "light-primary",
        title: "Contacts",
    },
    {
        id: '2',
        btnClass: 'btn-pill',
        color: "light-dark",
        title: "Users",
    },
    {
        id: '3',
        btnClass: 'btn-pill',
        color: "light-success",
        title: "Chats",
    },
    {
        id: '4',
        btnClass: 'btn-pill',
        color: "light-info",
        title: "Animation",
    },
    {
        id: '5',
        btnClass: 'btn-pill',
        color: "light-warning",
        title: "Widgets",
    },
    {
        id: '6',
        btnClass: 'btn-pill',
        color: "light-danger",
        title: "Project",
    },
    {
        id: '7',
        btnClass: 'btn-pill',
        color: "light-light",
        title: "Icons",
    },
];

export const outlineRoundedButtonsData = [
    {
        id: '1',
        btnClass: 'btn-pill',
        outline: true,
        color: "primary",
        title: "Contacts",
    },
    {
        id: '2',
        btnClass: 'btn-pill',
        outline: true,
        color: "secondary",
        title: "Users",
    },
    {
        id: '3',
        btnClass: 'btn-pill',
        outline: true,
        color: "success",
        title: "Chats",
    },
    {
        id: '4',
        btnClass: 'btn-pill',
        outline: true,
        color: "info",
        title: "Animation",
    },
    {
        id: '5',
        btnClass: 'btn-pill',
        outline: true,
        color: "warning",
        title: "Widgets",
    },
    {
        id: '6',
        btnClass: 'btn-pill',
        outline: true,
        color: "danger",
        title: "Project",
    },
    {
        id: '7',
        btnClass: 'btn-pill',
        outline: true,
        color: "light",
        title: "Icons",
    },
];

export const roundedSizesData = [
    {
        id: '1',
        color: "primary",
        size: 'lg',
        btnClass: 'btn-pill',
        title: "Large button",
    },
    {
        id: '2',
        btnClass: 'btn-pill',
        color: "secondary",
        title: "Default button",
    },
    {
        id: '3',
        btnClass: 'btn-pill',
        size: 'sm',
        color: "warning",
        title: "Small button",
    },
    {
        id: '4',
        btnClass: 'btn-pill',
        size: 'xs',
        color: "success",
        title: "Extra small button",
    },
];

export const outlineRoundedSizesData = [
    {
        id: '1',
        color: "primary",
        outline: true,
        size: 'lg',
        btnClass: 'btn-pill',
        title: "Large button",
    },
    {
        id: '2',
        btnClass: 'btn-pill',
        outline: true,
        color: "secondary",
        title: "Default button",
    },
    {
        id: '3',
        btnClass: 'btn-pill',
        outline: true,
        size: 'sm',
        color: "warning",
        title: "Small button",
    },
    {
        id: '4',
        btnClass: 'btn-pill',
        outline: true,
        size: 'xs',
        color: "success",
        title: "Extra small button",
    },
];

export const disabledButtonsData = [
    {
        id: '1',
        color: "primary",
        disabled: true,
        title: "I'm disabled",
    },
    {
        id: '2',
        btnClass: 'btn-pill',
        disabled: true,
        color: "warning",
        title: "Having problems",
    },
    {
        id: '3',
        outline: true,
        disabled: true,
        color: "primary",
        title: "Inaccessible",
    },
    {
        id: '4',
        btnClass: 'btn-pill',
        outline: true,
        disabled: true,
        color: "warning",
        title: "Disabled",
    },
];

export const iconsButtonsData = [
    {
        id: '1',
        btnClass: 'b-ln-height btn-square',
        color: "primary",
        title: <HelpCircle />,
    },
    {
        id: '2',
        btnClass: 'b-ln-height btn-square',
        color: "secondary",
        title: <Clock />,
    },
    {
        id: '3',
        btnClass: 'b-ln-height',
        color: "warning",
        title: <Loader />,
    },
    {
        id: '4',
        btnClass: 'b-ln-height',
        color: "light-primary",
        title: <Radio />,
    },
    {
        id: '5',
        btnClass: 'btn-pill',
        color: "light-secondary",
        title: <Loader />,
    },
    {
        id: '6',
        btnClass: 'btn-pill',
        color: "light-warning",
        title: <Radio />,
    },
    {
        id: '7',
        btnClass: 'b-ln-height',
        color: "primary",
        outline: true,
        title: <Radio />,
    },
    {
        id: '8',
        btnClass: 'btn-pill border border-secondary',
        color: "secondary",
        outline: true,
        title: <Loader />,
    },
    {
        id: '9',
        btnClass: 'btn-pill border border-warning',
        color: "warning",
        outline: true,
        title: <Radio />,
    },
];

export const buttonGroupData: ButtonGroupItems[] = [
    {
        id: 1,
        title: 'Button group variation',
        child: [
            {
                id: 1,
                btnClass: 'btn-group-square',
                buttons: [
                    {
                        id: 1,
                        color: 'primary',
                        title: 'Left'
                    },
                    {
                        id: 2,
                        color: 'light-primary',
                        title: 'Middle'
                    },
                    {
                        id: 3,
                        color: 'primary',
                        title: 'Right'
                    },
                ]
            },
            {
                id: 2,
                btnClass: 'btn-group-pill',
                buttons: [
                    {
                        id: 1,
                        color: 'light-primary',
                        title: 'Left'
                    },
                    {
                        id: 2,
                        color: 'primary',
                        title: 'Middle'
                    },
                    {
                        id: 3,
                        color: 'light-primary',
                        title: 'Right'
                    },
                ]
            },
            {
                id: 3,
                buttons: [
                    {
                        id: 1,
                        color: 'primary',
                        title: 'Left'
                    },
                    {
                        id: 2,
                        color: 'light-primary',
                        title: 'Middle'
                    },
                    {
                        id: 3,
                        color: 'primary',
                        title: 'Right'
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'Outline button group',
        child: [
            {
                id: 1,
                btnClass: 'btn-group-square',
                buttons: [
                    {
                        id: 1,
                        color: 'primary',
                        outline: true,
                        title: <ArrowLeft />
                    },
                    {
                        id: 2,
                        color: 'primary',
                        outline: true,
                        title: <ArrowUp />
                    },
                    {
                        id: 3,
                        color: 'primary',
                        outline: true,
                        title: <ArrowRight />
                    },
                ]
            },
            {
                id: 2,
                btnClass: 'btn-group-pill',
                buttons: [
                    {
                        id: 1,
                        color: 'primary',
                        outline: true,
                        title: <ArrowLeftCircle />
                    },
                    {
                        id: 2,
                        color: 'primary',
                        outline: true,
                        title: <ArrowUpCircle />
                    },
                    {
                        id: 3,
                        color: 'primary',
                        outline: true,
                        title: <ArrowRightCircle />
                    },
                ]
            },
            {
                id: 3,
                buttons: [
                    {
                        id: 1,
                        color: 'primary',
                        outline: true,
                        title: <AlignLeft />
                    },
                    {
                        id: 2,
                        color: 'primary',
                        outline: true,
                        title: <AlignCenter />
                    },
                    {
                        id: 3,
                        color: 'primary',
                        outline: true,
                        title: <AlignRight />
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        title: 'Button group sizes',
        child: [
            {
                id: 1,
                buttons: [
                    {
                        id: 1,
                        color: 'primary',
                        size: 'lg',
                        outline: true,
                        title: 'Left'
                    },
                    {
                        id: 2,
                        color: 'primary',
                        size: 'lg',
                        outline: true,
                        title: 'Middle'
                    },
                    {
                        id: 3,
                        color: 'primary',
                        size: 'lg',
                        outline: true,
                        title: 'Right'
                    },
                ]
            },
            {
                id: 2,
                buttons: [
                    {
                        id: 1,
                        color: 'primary',
                        outline: true,
                        title: 'Left'
                    },
                    {
                        id: 2,
                        color: 'primary',
                        outline: true,
                        title: 'Middle'
                    },
                    {
                        id: 3,
                        color: 'primary',
                        outline: true,
                        title: 'Right'
                    },
                ]
            },
            {
                id: 3,
                buttons: [
                    {
                        id: 1,
                        color: 'primary',
                        size: 'sm',
                        outline: true,
                        title: 'Left'
                    },
                    {
                        id: 2,
                        color: 'primary',
                        size: 'sm',
                        outline: true,
                        title: 'Middle'
                    },
                    {
                        id: 3,
                        color: 'primary',
                        size: 'sm',
                        outline: true,
                        title: 'Right'
                    },
                ]
            }
        ]
    }
]

export const blockLevelButtonsData: BlockLevelButtonsItems[] = [
    {
        id: 1,
        title: 'Block Button',
        buttons: [
            {
                id: 1,
                color: 'light-primary',
                title: 'Click here, there is a big surprise with you, Hurry Up!!'
            },
            {
                id: 2,
                color: 'primary',
                title: '40% off all B-Stock Sale!! Hurry Up!!'
            },
        ]
    },
    {
        id: 2,
        title: 'Button Center',
        divClass: 'col-6 mx-auto',
        buttons: [
            {
                id: 1,
                color: 'light-primary',
                title: 'Center Button'
            },
            {
                id: 2,
                color: 'primary',
                title: 'Center Button'
            },
        ]
    },
    {
        id: 3,
        title: 'Button End',
        divClass: 'd-md-flex justify-content-md-end',
        buttons: [
            {
                id: 1,
                color: 'light-primary me-md-2',
                title: 'Button'
            },
            {
                id: 2,
                color: 'primary',
                title: 'Button'
            },
        ]
    }
]

export const verticalVariationData = [
    {
        id: '1',
        color: "primary",
        title: "Primary ",
    },
    {
        id: '2',
        color: "secondary",
        title: "Secondary ",
    },
    {
        id: '3',
        color: "success",
        title: "Success ",
    },
    {
        id: '4',
        color: "info",
        title: "Info ",
    },
    {
        id: '5',
        color: "warning",
        title: "Warning ",
    },
];

export const verticalLightVariationData = [
    {
        id: '1',
        color: "primary",
        title: "Primary ",
    },
    {
        id: '2',
        color: "secondary",
        title: "Secondary ",
    },
    {
        id: '3',
        color: "success",
        title: "Success ",
    },
    {
        id: '4',
        color: "info",
        title: "Info ",
    },
    {
        id: '5',
        color: "warning",
        title: "Warning ",
    },
];

export const verticalVariationDropdownData: BasicDropdownType[] = [
    {
        toggleClass: 'light-success',
        text: 'light-success',
        menulist: ['Dropdown link', 'Dropdown link']
    },
    {
        groupClass: 'dropstart',
        position: 'start',
        toggleClass: 'light-danger',
        text: 'light-danger',
        menulist: ['Dropdown link', 'Dropdown link']
    },
    {
        groupClass: 'dropend',
        position: 'end',
        toggleClass: 'light-warning',
        text: 'light-warning',
        menulist: ['Dropdown link', 'Dropdown link']
    },
    {
        groupClass: 'dropup',
        position: 'up',
        toggleClass: 'light-info',
        text: 'light-info',
        menulist: ['Dropdown link', 'Dropdown link']
    }
];

export const horizontalVariationOutline = ['How', 'Are', 'You?'];

export const horizontalVariationdata = [
    {
        id: 1,
        color: "primary",
        title: "Y",
    },
    {
        id: 2,
        color: "secondary",
        title: "U",
    },
    {
        id: 3,
        color: "warning",
        title: "R ",
    },
    {
        id: 4,
        color: "success",
        title: "I ",
    },
];

export const horizontalVariationDropdown = [
    {
        toggleClass: 'primary',
        text: 'Pages',
        menulist: ['Gallery', 'Blog']
    }
]

export const buttonToolbarData = [
    {
        id: 1,
        child: [
            {
                id: 1,
                color: 'primary',
                text: 'I'
            },
            {
                id: 2,
                color: 'secondary',
                text: 'II'
            },
            {
                id: 3,
                color: 'success',
                text: 'III'
            },
            {
                id: 4,
                color: 'info',
                text: 'IV'
            },
        ]
    },
    {
        id: 2,
        child: [
            {
                id: 1,
                color: 'warning',
                text: 'V'
            },
            {
                id: 2,
                color: 'danger',
                text: 'VI'
            },
            {
                id: 3,
                color: 'primary',
                text: 'VII'
            },
        ]
    },
    {
        id: 3,
        child: [
            {
                id: 1,
                color: 'light',
                text: 'VIII'
            },
        ]
    }
];

export const boldBorderOutlineButtonsData = [
    {
        id: '1',
        color: "primary-2x",
        outline: true,
        title: "Animation ",
    },
    {
        id: '2',
        outline: true,
        color: "secondary-2x",
        title: "Icons ",
    },
    {
        id: '3',
        outline: true,
        color: "success-2x",
        title: "Blog ",
    },
    {
        id: '4',
        outline: true,
        color: "info-2x",
        title: "Widgets ",
    },
    {
        id: '5',
        outline: true,
        color: "warning-2x",
        title: "Chat ",
    },
    {
        id: '6',
        outline: true,
        color: "danger-2x",
        title: "Users ",
    },
    {
        id: '7',
        outline: true,
        color: "light-2x txt-dark",
        title: "FAQ ",
    },
];

export const radioButtonData = [
    {
        id: 7,
        text: 'Theme'
    },
    {
        id: 8,
        text: 'E-commerce'
    },
];

export const gradientButtonsData: GradientButtonsTypes[] = [
    {
        id: 1,
        sm: 6,
        title: 'Default gradient buttons',
        buttons: [
            {
                id: 1,
                color: 'primary-gradien',
                text: 'Icons'
            },
            {
                id: 2,
                color: 'secondary-gradien',
                text: 'Animation'
            },
            {
                id: 3,
                color: 'success-gradien',
                text: 'Tasks'
            },
            {
                id: 4,
                color: 'info-gradien',
                text: 'Letter box'
            },
            {
                id: 5,
                color: 'warning-gradien',
                text: 'Chat'
            },
            {
                id: 6,
                color: 'danger-gradien',
                text: 'Blog'
            },
            {
                id: 7,
                color: 'light-gradien text-dark',
                text: 'Gallery'
            },
        ]
    },
    {
        id: 2,
        sm: 6,
        title: 'Square gradient buttons',
        buttons: [
            {
                id: 1,
                btnClass: 'btn-square',
                color: 'primary-gradien',
                text: 'Icons'
            },
            {
                id: 2,
                btnClass: 'btn-square',
                color: 'secondary-gradien',
                text: 'Animation'
            },
            {
                id: 3,
                btnClass: 'btn-square',
                color: 'success-gradien',
                text: 'Tasks'
            },
            {
                id: 4,
                btnClass: 'btn-square',
                color: 'info-gradien',
                text: 'Letter box'
            },
            {
                id: 5,
                btnClass: 'btn-square',
                color: 'warning-gradien',
                text: 'Chat'
            },
            {
                id: 6,
                btnClass: 'btn-square',
                color: 'danger-gradien',
                text: 'Blog'
            },
            {
                id: 7,
                btnClass: 'btn-square',
                color: 'light-gradien text-dark',
                text: 'Gallery'
            },
        ]
    },
    {
        id: 3,
        sm: 12,
        title: 'Rounded gradient buttons',
        buttons: [
            {
                id: 1,
                btnClass: 'btn-pill btn-air-primary',
                color: 'primary-gradien',
                text: 'Icons'
            },
            {
                id: 2,
                btnClass: 'btn-pill btn-air-secondary',
                color: 'secondary-gradien',
                text: 'Animation'
            },
            {
                id: 3,
                btnClass: 'btn-pill btn-air-success',
                color: 'success-gradien',
                text: 'Tasks'
            },
            {
                id: 4,
                btnClass: 'btn-pill btn-air-info',
                color: 'info-gradien',
                text: 'Letter box'
            },
            {
                id: 5,
                btnClass: 'btn-pill btn-air-warning',
                color: 'warning-gradien',
                text: 'Chat'
            },
            {
                id: 6,
                btnClass: 'btn-pill btn-air-danger',
                color: 'danger-gradien',
                text: 'Blog'
            },
            {
                id: 7,
                btnClass: 'btn-pill btn-air-light',
                color: 'light-gradien text-dark',
                text: 'Gallery'
            },
        ]
    }
]