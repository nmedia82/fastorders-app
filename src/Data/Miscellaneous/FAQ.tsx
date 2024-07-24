import { Aperture, BookOpen, Check, Codepen, DollarSign, Edit, FileText, Globe, Link, Mail, MessageCircle, RotateCw, Youtube } from "react-feather";
import { Href } from "../../Utils/Constants";

//Faq widgets
export const faqWidgetsData = [
    {
        id: 1,
        title: "Articles",
        colClass: 'box-col-6',
        paragraph: "The usefulness and usability of a website, not its aesthetic design, define its success or failure. User-centric design has become the norm for effective and financially motivated web design since the visitor to the website is the only one who clicks the mouse and thus determines everything. After all, a feature might as well not exist if people can't utilise it.",
        icon: <FileText />,
    },
    {
        id: 2,
        title: "Knowledgebase",
        colClass: 'col-sm-6 box-col-6',
        paragraph: "A knowledge base acts as a central repository for knowledge, data, and information pertaining to a certain subject or thing. Its main goal is to make it easier for consumers to obtain information quickly and conveniently so they can solve problems, find solutions, and make wise decisions.",
        icon: <BookOpen />,
    },
    {
        id: 3,
        title: "Support",
        colClass: 'col-sm-6 box-col-12',
        paragraph: "Email, chat, forums, and a social media interface (and monitoring) are all part of real-time online assistance, which helps in reacting to public complaints and comments. Taking care of returns or repairs may fall under this.",
        icon: <Aperture />,
    },
];

export const faqQuestionsData = [
    {
        id: 1,
        titles: [
            {
                id: 1,
                title: "Integrating WordPress with Your Website?",
                paragraph: "A excellent method to add dynamic content, make site management simple, and access the extensive ecosystem of WordPress plugins and themes is by integrating WordPress with your website.",
            },
            {
                id: 2,
                title: "How do you set an image as the background of a web page?",
                paragraph: "Background photos give a website an aesthetically pleasing and engaging backdrop. There are several applications for these photos.",
            },
            {
                id: 3,
                title: "What is W3C and how does it affect web design?",
                paragraph: "The World Wide online Consortium (W3C), a global organisation, supports online development. The public, organisation members, a full-time staff, and invited international experts work together to develop Web Standards.",
            },
            {
                id: 4,
                title: "Describe CSS file and its benefits.",
                paragraph: "Cascading Style Sheets, or CSS, is a language for creating style sheets. In essence, it regulates and supervises how information should be presented in speech, writing, visual media, and other forms of media. You may modify the text's colour, font, spacing between paragraphs, size, and order with CSS.",
            },
        ],
    },
    {
        id: 2,
        subTitle: "Intellectual Property",
        titles: [
            {
                id: 5,
                title: "How to ticket work as web designer?",
                paragraph: "Create an account on the chosen ticketing platform and set up your workspace. Customize it according to your projects and team, if applicable. Set permissions and access levels for team members and clients, if necessary.",
            },
            {
                id: 6,
                title: "What are WordPress Plugins?",
                paragraph: "Individual pieces of software called WordPress plugins let you extend the functionality of your website. You may install each of these pieces of software on your WordPress website.",
            },
            {
                id: 7,
                title: "How many tables are there by default in WordPress?",
                paragraph: "Tables are the equivalent of shelves in WordPress databases. WordPress websites come with 12 tables by default. Each table can only contain specific types of data.",
            },
        ],
    },
    {
        id: 3,
        subTitle: "Selling And Buying",
        titles: [
            {
                id: 8,
                title: "What exactly does a talented UX designer do?",
                paragraph: "While there is no right or incorrect response, a professional designer should be well-versed in UX and be able to provide a complete end-to-end UX design process.",
            },
            {
                id: 9,
                title: "Can you explain why widgets don't appear in the sidebar?",
                paragraph: "Users must first make sure that the themes they are using support the widget before adding it. It's conceivable that the issue is brought on by a lack of functionality.",
            },
            {
                id: 10,
                title: "Sell me on the benefits of UX design investment?",
                paragraph: "In addition to improving user experience, UX-driven product design is a wise commercial decision.",
            },
            {
                id: 11,
                title: "What is source code?",
                paragraph: "The core of a computer programme is called the source code, which is produced by a programmer and frequently takes the form of functions, descriptions, definitions, calls, procedures, and other operational declarations.",
            },
        ],
    },
    {
        id: 4,
        subTitle: "User Accounts",
        titles: [
            {
                id: 12,
                title: "In Java, how do you reverse a string?",
                paragraph: "The string may be turned into a character array, which you can iterate through from beginning to finish. The characters can be added to a string builder to create the reversed string.",
            },
            {
                id: 13,
                title: "Can you help me out by writing a Java programme for the Fibonacci series?",
                paragraph: "This particular activity, which is the question, may demonstrate your proficiency with using Java code to carry out a task.",
            },
            {
                id: 14,
                title: "To reverse a string without utilising the built-in string function.",
                paragraph: "Another unique Java coding activity that the interviewer could use to gauge your Java expertise.",
            },
            {
                id: 15,
                title: "Describe the information architecture.",
                paragraph: "The planning, structuring, and labelling of content in a thorough, logical, and long-lasting manner is referred to as information architecture (IA). It allows for the obvious and intelligible organising and classification of material, enabling visitors to quickly discover what they're looking for.",
            },
            {
                id: 16,
                title: "Describe doctype in details",
                paragraph: "A declaration of the document type, known as DOCTYPE, is required at the start of every HTML or XHTML document; this declaration is frequently the first line of code.",
            },
        ],
    },
];

export const navigationData = [
    {
        id: 1,
        child: [
            {
                id: 1,
                link: Href,
                icon: <Edit />,
                text: 'Tutorials',
            },
            {
                id: 2,
                link: Href,
                icon: <Globe />,
                text: 'Help center',
            },
            {
                id: 3,
                link: `${process.env.PUBLIC_URL}/miscellaneous/knowledgebase`,
                icon: <BookOpen />,
                text: 'Knowledgebase',
            },
            {
                id: 4,
                link: `${process.env.PUBLIC_URL}/miscellaneous/blog/blog-detail`,
                icon: <FileText />,
                text: 'Articles',
                badge: 42,
            },
            {
                id: 5,
                link: Href,
                icon: <Youtube />,
                text: 'Video Tutorials',
                badge: 648,
            },
            {
                id: 6,
                link: Href,
                icon: <MessageCircle />,
                text: 'Ask our community',
            },
            {
                id: 7,
                link: `${process.env.PUBLIC_URL}/applications/contacts`,
                icon: <Mail />,
                text: 'Contact us',
            },
        ]
    },
    {
        id: 2,
        child: [
            {
                id: 6,
                link: Href,
                icon: <MessageCircle />,
                text: 'Ask our community',
            },
            {
                id: 7,
                link: `${process.env.PUBLIC_URL}/applications/contacts`,
                icon: <Mail />,
                text: 'Contact us',
            },
        ]
    }
];

export const latestUpdatesData = [
    {
        id: 1,
        icon: <RotateCw className="font-primary" />,
        anchor: 'Debora P. Smith',
        title: 'requested money back for a double debit card charge',
        time: '10 minutes ago'
    },
    {
        id: 2,
        icon: <DollarSign className="font-primary" />,
        title: 'All sellers have received monthly payouts',
        time: '3 hours ago'
    },
    {
        id: 3,
        icon: <Link className="font-primary" />,
        name: 'User Christopher',
        anchor: 'Wallace',
        title: 'is on hold and awaiting for staff reply',
        time: '21 minutes ago'
    },
    {
        id: 4,
        icon: <Check className="font-primary" />,
        name: 'Ticket #697201 has been closed by ',
        anchor: 'Berry E. Strickland',
        time: 'Dec 2, 11:10'
    },
];

export const featuredTutorialsData = [
    {
        id: 1,
        image: '1.jpg',
        description: 'Setting aside time once every three months to refresh your portfolio is a fantastic idea. Even if you are not submitting any new work, you could still need to provide more context or alter anything based on your continuing learnings and objectives. Compared to months or years later, it is far simpler to update when the information is still fresh in your mind.',
        title: 'Web Design',
        date: 'Dec 22, 2024'
    },
    {
        id: 2,
        image: '2.jpg',
        description: 'To display HTML and CSS components on different web browsers, such as Chrome, Safari, and previous versions of Opera, CSS3 uses the Webkit rendering engine. It offers the essential features for generating online content and guaranteeing consistency across many platforms.',
        title: 'Web Development',
        date: 'Dec 12, 2024'
    },
    {
        id: 3,
        image: '3.jpg',
        description: "Seniority does have a significant role in how much influence a UI specialist has at this first stage of the design process. Senior UI designers may take the initiative in coming up with suggestions for which visual components will work best, whereas an entry-level UI designer is more likely to be focused on storyboards, sitemaps, and process flows and not have much influence on the site's appearance.",
        title: 'UI Design',
        date: 'Dec 10, 2024'
    },
    {
        id: 4,
        image: '4.jpg',
        description: "Information architecture is a discipline that, among other things, organises, arranges, and structures the content of a website or app. Information architects determine how to organise something's components in a way that makes sense.",
        title: 'UX Design',
        date: 'Dec 20, 2024'
    },
];

export const latestArticlesVideosFaq = [
    {
        id: 1,
        child: [
            {
                id: 1,
                colClass: "col-sm-12",
                icon: <Codepen className="m-r-30"/>,
                title: "How to Programming Consistency.",
                text: "You must always maintain consistency as a web developer. Over time, consistency produces superior results."
            },
            {
                id: 2,
                colClass: "col-sm-12",
                icon: <Codepen className="m-r-30"/>,
                title: "Explaining Modern CSS To A Dinosaur",
                text: "Peter Jang, the author of the very first essay on our list, has created another masterpiece, but this time, he has addressed CSS, another important aspect of web development."
            },
            {
                id: 3,
                colClass: "col-sm-12",
                icon: <Codepen className="m-r-30"/>,
                title: "Make fewer designs to become a better designer.",
                text: "Designers can experience feelings of fraudulence or lack of originality. It seems like everyone else is working harder or just generally doing a better job than you are."
            }
        ]
    },
    {
        id: 2,
        child: [
            {
                id: 1,
                colClass: "col-sm-12",
                icon: <FileText className="m-r-30"/>,
                title: "What?! Why should I design less?",
                text: "You can view all of the stunning and remarkable things that other designers have produced by taking a peek around. You then examine your work.",
            },
            {
                id: 2,
                colClass: "col-sm-12",
                icon: <FileText className="m-r-30"/>,
                title: "Use a GUI framework as a requirement",
                text: "Do not, under any circumstances, code your website in simple HTML. Frameworks and widget libraries are widely available."
            },
            {
                id: 3,
                colClass: "col-sm-12",
                icon: <FileText className="m-r-30"/>,
                title: "What?! Why should I design less?",
                text: "Information architecture is a discipline that, among other things, organises, arranges, and structures the content of a website or app. Information architects determine how to organise something's components in a way that makes sense."
            }
        ]
    },
    {
        id: 3,
        child: [
            {
                id: 1,
                colClass: "col-xl-12 col-md-6",
                icon: <Youtube className="m-r-30"/>,
                title: "Continuous Learning",
                text: "To improve their craft and advance in the industry, web designers frequently attend courses, participate in design groups, and work on their own professional development."
            },
            {
                id: 2,
                colClass: "col-xl-12 col-md-6",
                icon: <Youtube className="m-r-30"/>,
                title: "Design Expertise",
                text: "For websites to be aesthetically pleasing, web designers must have excellent graphic design, typography, colour theory, and layout abilities",
            },
            {
                id: 3,
                colClass: "col-xl-12",
                icon: <Youtube className="m-r-30"/>,
                title: "Use vertical input forms that are clearly organised.",
                text: "Use only one column in an input form if possible. A separate row should exist for each input field.",
            }
        ]
    }
];

export const latestArticlesVideosknowledge = [
    {
        id: 1,
        child: [
            {
                id: 1,
                colClass: "col-sm-12",
                icon: <Codepen className="m-r-20"/>,
                title: "Product manager",
                text: "A product manager is a specialist in charge of managing the growth, direction."
            },
            {
                id: 2,
                colClass: "col-sm-12",
                icon: <Codepen className="m-r-20"/>,
                title: "E-commerce",
                text: "Discover the flourishing e-commerce industry and how digital technology has transformed it."
            },
            {
                id: 3,
                colClass: "col-sm-12",
                icon: <Codepen className="m-r-20"/>,
                title: "Web-development",
                text: "To display HTML and CSS components on different web browsers, such as Chrome, Safari."
            }
        ]
    },
    {
        id: 2,
        child: [
            {
                id: 1,
                colClass: "col-sm-12",
                icon: <FileText className="m-r-20"/>,
                title: "UX designer",
                text: "Seniority does have a significant role in how much influence a UI specialist.",
            },
            {
                id: 2,
                colClass: "col-sm-12",
                icon: <FileText className="m-r-20"/>,
                title: "SDLC cycle",
                text: "the intricacies of the Software Development Life Cycle a systematic approach to software development"
            },
            {
                id: 3,
                colClass: "col-sm-12",
                icon: <FileText className="m-r-20"/>,
                title: "Using Video",
                text: "Information architecture is a discipline that, among other things, arranges, and structures"
            }
        ]
    },
    {
        id: 3,
        child: [
            {
                id: 1,
                colClass: "col-xl-12 col-md-6",
                icon: <Youtube className="m-r-20"/>,
                title: "Information gathering",
                text: "Explore the critical role of information gathering in effective problem-solving processes."
            },
            {
                id: 2,
                colClass: "col-xl-12 col-md-6",
                icon: <Youtube className="m-r-20"/>,
                title: "Effective communication",
                text: "It's crucial to communicate! This blog explores the key components of good communication.",
            },
            {
                id: 3,
                colClass: "col-xl-12",
                icon: <Youtube className="m-r-20"/>,
                title: "Travel adventures",
                text: "The spirit is enriched by travel! This site takes you on an exhilarating tour of stunning.",
            }
        ]
    }
];
