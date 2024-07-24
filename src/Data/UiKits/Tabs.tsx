import { CardBody, Form, FormGroup, Input, Label, Table } from "reactstrap";
import { H6, Image, LI, P, UL } from "../../AbstractElements";
import { dynamicImage } from "../../Utils";

export const simpleTabSubTitle = [
    {
        text: 'Use the ',
        code: '.nav-link'
    },
    {
        text: ' with ',
        code: '.show '
    },
    {
        text: 'class to jump particular tabs.'
    }
];

export const iconTabsSubTitle = [
    {
        text: 'Use the ',
        code: '.nav-link '
    },
    {
        text: 'with feather icons. And ',
        code: '.show'
    },
    {
        text: ' class to tabs change.'
    }
];

export const verticalTabSubTitle = [
    {
        text: 'Use the ',
        code: '#var-pills-tab'
    },
    {
        text: ' id thorough change vertical tabs.'
    }
];

export const pillsTabSubTitle = [
    {
        text: 'Use the ',
        code: 'data-bs-toggle="pill"'
    },
    {
        text: ' to tabs pill shape. And mandatory for ',
        code: '.active '
    },
    {
        text: ' class.'
    }
];

export const justifyTabSubTitle = [
    {
        text: 'Use the ',
        code: '.nav-link'
    },
    {
        text: ' with ',
        code: '.active '
    },
    {
        text: 'class and set content using flex property.'
    }
];

export const materialLeftSubTitle = [
    {
        text: 'Use the ',
        code: '.nav-link '
    },
    {
        text: 'with ',
        code: '.active '
    },
    {
        text: 'class through jump another tabs.And ',
        code: "aria-orientation='vertical'"
    },
    {
        text: 'thorough change vertical tabs.'
    }
];

export const materialStyleSubTitle = [
    {
        text: 'Use the ',
        code: '.nav-link '
    },
    {
        text: 'with ',
        code: '.active '
    },
    {
        text: 'class through access new tabs. And icons of design for attractive webpage.'
    }
];

export const borderTabsSubTitle = [
    {
        text: 'Use the ',
        code: '.nav-link '
    },
    {
        text: 'with ',
        code: '.active '
    },
    {
        text: 'class. And hover effect added on bottom border styles.'
    }
];

export const simpleTabData = [
    {
        id: '1',
        text:
            <P className="pt-3">{'A web designer is a professional who specializes in creating the visual and functional aspects of websites. They have expertise in using'} <em className="txt-danger">{'design tools'}</em>{', coding languages, and user experience principles to develop websites that are aesthetically appealing, user-friendly, and effective in achieving their intended goals.'}</P>
    },
    {
        id: '2',
        text:
            <div className="pt-3">
                <div className="flex-space flex-wrap align-items-center">
                    <Image className="tab-img" src={dynamicImage(`avtar/2.jpg`)} alt="profile" />
                    <UL className="d-flex flex-column gap-1 simple-list">
                        <LI> <strong>{'Visit Us:'}</strong> {'2882 Chandler Hollow Road,Pittsburgh, PA 15231'}</LI>
                        <LI> <strong>{'Mail Us:'}</strong> {'MarkSSexton@rhyta.com'}</LI>
                        <LI><strong>{'Contact Number:'}</strong> {'412-470-1047'}</LI>
                    </UL>
                </div>
            </div>
    },
    {
        id: '3',
        text:
            <UL className="pt-3 d-flex flex-column gap-1 simple-list">
                <LI><strong>{'"Congratulations! '}</strong> {'We are pleased to extend you an offer to join our company. We look forward to your contributions and a successful journey together.'}<strong>{'"'}</strong></LI>
                <LI> <strong>{'Visit Us: '}</strong> {'2882 Chandler Hollow Road,Pittsburgh, PA 15231'}</LI>
                <LI> <strong>{'Mail Us: '}</strong> {'MarkSSexton@rhyta.com'}</LI>
                <LI> <strong>{'Contact Number: '}</strong> {'412-470-1047'}</LI>
            </UL>
    }
]

export const tabIconData = [
    {
        id: '1',
        text:
            <P className="pt-3">
                {"Are you a UX designer who thrives on solving complex design challenges? Join our forward-thinking company and work on innovative products that blend cutting-edge technology with exceptional user experiences. As part of our team, you'll collaborate with talented designers, developers, and product managers to create intuitive interfaces and drive the next generation of digital solutions."}
            </P>
    },
    {
        id: '2',
        text:
            <div className="pt-3 mb-0">
                <div className="flex-space flex-wrap align-items-center">
                    <Image className="tab-img" src={dynamicImage(`avtar/4.jpg`)} alt="profile" />
                    <UL className="d-flex flex-column gap-1 simple-list">
                        <LI> <strong>{'Visit Us: '}</strong> {'488 Woodhill AvenueLaurel, MD 20707'}</LI>
                        <LI><strong>{'Mail Us: '}</strong> {'JulianSFouts@teleworm.us'}</LI>
                        <LI><strong>{'Contact Number: '}</strong> {'410-824-8613'}</LI>
                    </UL>
                </div>
            </div>
    },
    {
        id: '3',
        text:
            <>
                <P className="pt-3">{"For any inquiries or to get in touch with our company, please reach out to our customer support team. We're here to assist you and provide the information you need."}</P>
                <Label htmlFor="exampleFormControlone">{'Email address'}</Label>
                <Input id="exampleFormControlone" type="email" placeholder="DonaldBMcCarthy@rhyta.com" />
            </>

    }
]

export const verticalTabData = [
    {
        id: '1',
        text:
            <P>{'Discover the ultimate admin solution with our Admin Theme. Designed to enhance productivity and streamline workflows, it provides a comprehensive set of tools for data visualization, user management, and system configuration.Take control of your admin tasks with our cutting-edge Admin Theme. Its modern design, robust functionality, and seamless integration make it the perfect choice for managing your applications and backend systems.Elevate your admin experience with our feature-rich Admin Theme.'}</P>
    },
    {
        id: '2',
        text:
            <UL className="d-flex flex-column gap-1 simple-list">
                <LI>{'--> Data tables for efficient data management'}</LI>
                <LI>{'--> Interactive charts and graphs'}</LI>
                <LI>{'--> Versatile UI components (cards, modals, alerts, tabs)'}</LI>
                <LI>{'--> Notifications (alerts, toasts, banners)'}</LI>
                <LI>{'--> Navigation components (sidebars, breadcrumbs, menus)'}</LI>
                <LI>{'--> Customizable components for seamless integration'}</LI>
                <LI>{'--> Powerful charting options (line, bar, pie, maps)'}</LI>
            </UL>
    },
    {
        id: '3',
        text:
            <UL className="d-flex flex-column gap-1 simple-list">
                <LI>{'Available pages:'}</LI>
                <LI><strong>{' Logs Page: '}</strong>{'Keep track of system activities, error logs, and user actions with our logs page. Easily monitor and troubleshoot issues to ensure smooth operation of your application.'}</LI>
                <LI><strong>{' Content Management Page: '}</strong>{"Take control of your website or application's content with our content management page. Efficiently organize, create, and update content to keep your platform up-to-date."}</LI>
            </UL>
    },
    {
        id: '4',
        text:
            <UL className="d-flex flex-column gap-1 p-sm-0 pt-2 simple-list">
                <LI>{'Configure basic settings such as site title, logo, and default language to customize the appearance and behavior of your application.'}</LI>
                <LI>{'--> User Settings'}</LI>
                <LI>{'--> Security Settings'}</LI>
                <LI>{'--> Email Settings'}</LI>
                <LI>{'--> Localization Settings'}</LI>
                <LI>{'--> Theme Settings'}</LI>
                <LI>{'--> Backup Settings'}</LI>
            </UL>
    }
]

export const pillTabData = [
    {
        id: '1',
        text:
            <P className="pt-3">
                {"The ultimate goal of every web design is to create a site that will reach its audience and be useful to them. In order to achieve that, it is necessary to befriend Google's mechanisms and algorithms. There is no use of a pretty website, if it's displayed on a 10th page of search results, because this way no one will ever find it. That brings us to the topic of Google's Website Ranking.Generally speaking, it's a list of pages and their keywords, sorted in the order of search results. The higher your place in the ranking is, the more people are likely to see your page."}
            </P>

    },
    {
        id: '2',
        text:
            <UL className="d-flex flex-column gap-1 pt-3 simple-list">
                <LI> {'Create professional web page design. Responsive, fully customizable with easy Drag-n-Drop Nicepage editor. Adjust colors, fonts, header and footer, layout and other design elements, as well as content and images.'}</LI>
                <LI><strong>{'Visit Us: '}</strong> {'4 Marigold Close, Glenmore Park, New South Wales, 2745 Australia- 2745'}</LI>
                <LI> <strong>{'Mail Us: '}</strong> {'SamuelMario@armyspy.com'}</LI>
                <LI> <strong>{'Contact Number: '}</strong> {'(02) 4733 6337'}</LI>
            </UL>
    },
    {
        id: '3',
        text:
            <div className="pt-3 d-flex align-items-center gap-3 pills-blogger">
                <div className="blog-wrapper">
                    <Image className="blog-img" src={dynamicImage(`dashboard-2/product/headphone.png`)} alt="head-phone" />
                </div>
                <div className="blog-content">
                    <P><em className="txt-danger fw-bold">{'Smart headphones'}</em> {' — also called smart earbuds or hearable — are high-tech in-ear devices that do more than transmit audio. These headphones are usually wireless, and they can sync up with your phone, tablet, computer or other Bluetooth-enabled device. The main appeal of hearables is convenience, as they allow you to complete common tasks without directly accessing your phone or computer. Smart wireless headphones sync up to other devices using Bluetooth technology, and many of their features rely on data from your smartphone or computer.'}</P>
                </div>
            </div>

    }
]

export const justifyTabData = [
    {
        id: '1',
        data: [
            {
                image: '1.jpg',
                head: 'Kathy M. Anderson',
                text: ' 440-494-0729'
            },
            {
                image: '2.jpg',
                head: 'Lillian J. Goodfellow',
                text: '239-664-7751'
            },
            {
                image: '3.jpg',
                head: 'Carolyn A. Sutton',
                text: '218-793-6609'
            },
            {
                image: '4.jpg',
                head: 'Mary O. Miller',
                text: '720-744-0921'
            },
            {
                image: '5.jpg',
                head: 'Patricia H. Hummel',
                text: '314-445-1451'
            },
            {
                image: '9.jpg',
                head: 'Minnie F. Evans',
                text: '718-740-8438'
            }
        ],
    },
    {
        id: '2',
        data: [
            {
                image: '7.jpg',
                head: 'Thomas A. Leroy',
                text: '305-539-6871'
            },
            {
                image: '12.jpg',
                head: 'Mark S. Ward',
                text: '303-561-8880'
            },
            {
                image: '16.jpg',
                head: 'Emily T. Hooper',
                text: '301-553-1836'
            },
            {
                image: '1.jpg',
                head: 'Natasha W. Watson',
                text: '267-605-4499'
            },
            {
                image: '6.jpg',
                head: 'Jennifer A. Camacho',
                text: '770-527-7554'
            },
            {
                image: '8.jpg',
                head: 'Ann J. Strickland',
                text: '469-218-4678'
            }
        ],
    },
    {
        id: '3',
        data: [
            {
                image: '5.jpg',
                head: 'Jaclyn T. Duncan',
                text: '413-618-9222'
            },
            {
                image: '2.jpg',
                head: 'Christine H. Lin',
                text: '909-219-0342'
            },
            {
                image: '3.jpg',
                head: 'Ronnie S. Mountain',
                text: '978-426-9732'
            },
            {
                image: '4.jpg',
                head: 'Louise A. Hilliard',
                text: '502-262-5600'
            },
            {
                image: '11.jpg',
                head: 'Kayla Hutt',
                text: '312-456-8275'
            },
            {
                image: '7.jpg',
                head: 'Amber Cecil',
                text: '802-662-2407'
            }
        ],
    },
]

export const leftTabData = [
    {
        id: '1',
        text: <P>{'This product is meant for educational purposes only. Any resemblance to real persons, living or dead is purely coincidental. Void where prohibited. Some assembly required. List each check separately by bank number. Batteries not included.Google Web Designer gives you the power to create beautiful and compelling videos, images and HTML5 ads. Use animation and interactive elements to build out your creative vision, then scale your content for different sizes or audiences with responsive and dynamic workflows.'}</P>
    },
    {
        id: '2',
        text: <>
            <P className="mb-0" />
            <div className="flex-space flex-wrap align-items-center">
                <Image className="tab-img" src={dynamicImage(`ecommerce/08.jpg`)} alt="profile" />
                <UL className="d-flex flex-column gap-1 simple-list">
                    <LI> <strong> {'Name: '}</strong> {'Jully Catlin'}</LI>
                    <LI><strong>{'Visit Us: '}</strong> {'50006 Ehrenberg/Parker,Arkansas-85334'}</LI>
                    <LI><strong>{'Mail Us: '}</strong> {'hello.@gmail.com'}</LI>
                    <LI><strong>{'Contact Number: '}</strong> {'(928) 923-7940'}</LI>
                </UL>
            </div>
        </>
    },
    {
        id: '3',
        text:
            <CardBody className="p-0">
                <div className="main-inbox">
                    <div className="header-inbox justify-content-start gap-2">
                        <div className="header-left-inbox">
                            <div className="inbox-img">
                                <Image src={dynamicImage(`ecommerce/07.jpg`)} alt="profile" />
                            </div>
                        </div>
                        <div className="inbox-content">
                            <H6>{'Dalbult Caslin '}</H6>
                            <P className="text-muted">{'stroman.rogers@gmail.com'}</P>
                        </div>
                    </div>
                    <div className="body-inbox mt-2">
                        <div className="body-h-wrapper">
                            <i className="me-2 tab-space icofont icofont-star" />
                            <em>{'Compare Prices Find the Best Computer Assessors Fronted Issue.'}</em>
                        </div>
                        <P className="pt-2">{'Site speed and design are two of the most important ranking factors Google takes into consideration, as they have the biggest effect of customer staying on site as the website respond faster.'}</P>
                    </div>
                </div>
            </CardBody>
    },
    {
        id: '4',
        text:
            <P>
                <strong> {'In this situation, you would probably do two things: '}</strong>
                {" exit the page, or look for the trusty search bar. If you decide to stick around, a proper search function should take your query and send you to your destination. Problem solved. It's not a perfect experience, but it's a hard one to avoid on larger websites that simply can't link to every piece of content from the homepage."}
            </P>
    }
]

export const materialData = [
    {
        id: '1',
        text: <CardBody className=" px-0 pb-0 pt-3">
            <div className="user-header pb-2">
                <H6 className="fw-bold">User Details:</H6>
            </div>
            <div className="user-content">
                <div className="table-responsive">
                    <Table className="mb-0">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Country</th>
                                <th scope="col">Contact No</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Neha</td>
                                <td>India </td>
                                <td>5698741236</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacklin</td>
                                <td>Thailand</td>
                                <td>7800030320</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </CardBody>
    },
    {
        id: '2',
        text:
            <CardBody className=" px-0 pb-0 pt-3">
                <div className="user-header pb-2">
                    <H6 className="fw-bold">Description:</H6>
                </div>
                <div className="user-content">
                    <div className="table-responsive">
                        <Table className="mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Technology</th>
                                    <th scope="col">Interest </th>
                                    <th scope="col">Salary Expected </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Web Designer</td>
                                    <td>HTML,CSS,JS,SCSS</td>
                                    <td>45000</td>
                                </tr>
                                <tr>
                                    <td>UX Designer</td>
                                    <td>Figma,Photoshop,craft</td>
                                    <td>20000</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </CardBody>
    },
    {
        id: '3',
        text:
            <CardBody className="px-0 pb-0 pt-3">
                <div className="user-header pb-2">
                    <H6 className="fw-bold">Review:</H6>
                </div>
                <div className="user-content">
                    <div className="table-responsive">
                        <Table className="mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">Rating </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Neha</td>
                                    <td>India </td>
                                    <td>
                                        <i className="ico-color icofont icofont-star" />
                                        <i className="ico-color icofont icofont-star" />
                                        <i className="ico-color icofont icofont-star" />
                                        <i className="ico-color icofont icofont-star" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Irfan</td>
                                    <td>India</td>
                                    <td>
                                        <i className="ico-color icofont icofont-star" />
                                        <i className="ico-color icofont icofont-star" />
                                        <i className="ico-color icofont icofont-star" />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </CardBody>

    }
]

export const borderData = [
    {
        id: '1',
        text:
            <P className="pt-3">
                {'A navigation bar is a particularly important feature because it allows visitors to quickly and easily find '}<em className="txt-danger">{'important pages on your website,'}</em>{' like your blog, product pages, pricing, contact info, and documentation. This improves the chances of visitors browsing your site longer, which can boost your page views and reduce your bounce rate.Create product Builder tool is also pre-bundled in this template so that you can let the audience configure the product by themselves before placing the order.'}
            </P>
    },
    {
        id: '2',
        text: <CardBody className=" pb-0">
            <div className="main-inbox">
                <div className="header-inbox">
                    <div className="header-left-inbox">
                        <div className="inbox-img">
                            <Image src={dynamicImage(`ecommerce/06.jpg`)} alt="profile"/>
                        </div>
                        <div className="inbox-content">
                            <H6>{'Dalbult Caslin '}</H6>
                            <P className="text-muted">{'stroman.rogers@gmail.com'}</P>
                        </div>
                    </div>
                    <UL className="header-right-inbox simple-list flex-row">
                        <LI>
                            <P>{'8 JAN 11:30PM'}</P>
                        </LI>
                        <LI> <i className="txt-danger icofont icofont-ui-delete" /></LI>
                        <LI> <i className="icofont icofont-telegram" /></LI>
                    </UL>
                </div>
                <div className="body-inbox mt-2">
                    <div className="body-h-wrapper">
                        <i className="me-2 tab-space icofont icofont-star" />
                        <em>{'Compare Prices Find the Best Computer Assessors Fronted Issue.'}</em>
                    </div>
                    <P className="pt-2">
                        {'Site speed and design are two of the most important ranking factors Google takes into consideration, as they have the biggest effect of customer staying on site as the website respond faster.'}
                    </P>
                </div>
            </div>
        </CardBody>
    },
    {
        id: '3',
        text:
            <CardBody className="px-0 pb-0">
                <Form>
                    <FormGroup>
                        <Label htmlFor="exampleFormControltwo">{'Email address'}</Label>
                        <Input id="exampleFormControltwo" type="email" placeholder="youremail@gmail.com" />
                    </FormGroup>
                    <FormGroup className="mb-0">
                        <Label htmlFor="exampleFormControlTextarea1">{'Example textarea'}</Label>
                        <Input type="textarea" id="exampleFormControlTextarea1" rows={3} />
                    </FormGroup>
                </Form>
            </CardBody>

    }
]