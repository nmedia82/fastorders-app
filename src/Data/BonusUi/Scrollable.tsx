import { H6, Image, LI, OL, P, UL } from "../../AbstractElements";
import { dynamicImage } from "../../Utils";

export const customScrollbarSubTitle = [
    {
        text: "Used ",
        code: '.vertical-scroll '
    },
    {
        text: 'and ',
        code: '.scroll-demo '
    },
    {
        text: 'through design scrollbar.'
    }
];

export const profileScrollSubTitle = [
    {
        text: "Use the ",
        code: '.list-group-item '
    },
    {
        text: ' through made profile and with used ',
        code: ' .vertical-scroll . '
    }
]

export const smallSizeScrollSubTitle = [
    {
        text: "Use the ",
        code: '.scrollbar-margins '
    },
    {
        text: 'through small scroll and image is draggable. '
    }
]

export const badgesScrollSubTitle = [
    {
        text: "Use the",
        code: '.badge '
    },
    {
        text: ' class through create more badges and ',
        code: '.vertical-scroll '
    },
    {
        text: 'used as vertical scroll. '
    }
];

export const scrollContentSubTitle = [
    {
        text: "Use the ",
        code: '.list-group-item '
    },
    {
        text: 'through made profile and with used ',
        code: '.vertical-scroll.'
    }
];

export const horizontalScrollSubTitle = [
    {
        text: "Use the ",
        code: '.horizontal-scroll '
    },
    {
        text: 'through move content horizontally.'
    }
];

export const bothSideScrollSubTitle = [
    {
        text: "Use the ",
        code: '.visible-scroll '
    },
    {
        text: 'through visible both side scrollbar.'
    }
]

export const badgeScrollData = [
    {
        text: 'Stella Nowland',
        class: 'warning',
        badge: 'Freelance'
    },
    {
        text: 'Lola Stanford',
        class: 'danger text-white',
        badge: 'Issue'
    },
    {
        text: 'Caitlin Coungeau',
        class: 'primary text-white',
        badge: 'Social'
    },
    {
        text: 'Graciela W. McClaran',
        class: 'danger text-white',
        badge: 'Issue'
    },
    {
        text: 'Derek T. Aldridge',
        class: 'warning text-white',
        badge: 'Freelance '
    },
    {
        text: 'Annie A. Riley',
        class: 'primary text-white',
        badge: 'Social '
    },
    {
        text: 'Hana J. Boyd',
        class: 'danger text-white',
        badge: 'Issue'
    },
    {
        text: 'Karen R. Pryce',
        class: 'warning text-white',
        badge: 'Freelance'
    },
    {
        text: 'Cordie C. Pope',
        class: 'primary text-white',
        badge: 'Social'
    }
]

export const profileScrollData = [
    {
        image: '3.png',
        text: 'Gloria D. Acheson'
    },
    {
        image: '2.jpg',
        text: 'Sharon C. Obrien'
    },
    {
        image: '5.jpg',
        text: 'Bryan A. Owens'
    },
    {
        image: '12.png',
        text: 'Ronald M. Enger'
    },
    {
        image: '14.png',
        text: 'Herbert A. Clary'
    },
    {
        image: '6.jpg',
        text: 'Dino A. Cannon'
    },
    {
        image: '3.jpg',
        text: 'Danny A. McLean'
    },
    {
        image: '2.jpg',
        text: 'Betty K. Curtis'
    }
]
export const scrollableContentData = [
    {
        image: '9.jpg',
        head: 'Molly Boake',
        mail: 'MollyBoake@rhyta.com',
        small: '5 days ago'
    },
    {
        image: '10.jpg',
        head: 'Gabrielle Fahey',
        mail: 'GabrielleFahey@dayrep.com',
        small: '10 days ago'
    },
    {
        image: '2.jpg',
        head: 'Lucinda Moseley',
        mail: 'LucindaMoseley@teleworm.us',
        small: '3 days ago'
    },
    {
        image: '12.png',
        head: 'Francis K. Henriques',
        mail: 'FrancisKHenriques@teleworm.us',
        small: '2 days ago'
    },
    {
        image: '14.png',
        head: 'Jose A. Seay',
        mail: 'JoseASeay@rhyta.com',
        small: '15 days ago'
    },
    {
        image: '3.jpg',
        head: 'Phil F. Cunningham',
        mail: 'PhilFCunningham@dayrep.com',
        small: '6 days ago'
    },
    {
        image: '7.jpg',
        head: 'Richard E. Johnson',
        mail: 'RichardEJohnson@teleworm.us',
        small: '20 days ago'
    },
    {
        image: '2.png',
        head: 'Lawrence L. Nash',
        mail: 'LawrenceLNash@jourrapide.com',
        small: '8 days ago'
    }
]

export const bothSideScroll = [
    {
        text: <>
            <div className="visible-wrapper">
                <Image src={dynamicImage(`banner/2.jpg`)} alt="office-work" />
            </div>
            <div className="pt-3">{'Inspiration can take many different forms, and '}<em className="txt-danger">{'professional growth never stops'}</em>
                {". In light of this, we've compiled a comprehensive list of web design blogs that will keep your mind stimulated for the entire year. You won't find any stinkers on this list, so don't worry. We value your time and believe that you should only receive the greatest. Because of this, we've only gathered web design blogs that have recently being updated. Get ready to add numerous subscriptions by creating your Feebly account."}
                <UL className="d-flex flex-column gap-1 simple-list">
                    <LI>{'--> Responsive...'}</LI>
                    <LI>{'--> Secure your domain...'}</LI>
                    <LI>{'--> Testing...'}</LI>
                    <LI>{'--> Content creation...'}</LI>
                    <LI>{'--> Visual elements...'}</LI>
                    <LI>{'--> Launch...'}</LI>
                </UL>
            </div>
        </>
    },
    {
        text: <>
            <H6 className="pb-2">{'Latest trends'}</H6>
            <P>{"You should stay current with all the most recent advances in the business whether you operate as a freelance web designer or for an agency or design studio. You may be sure you're constantly providing the most intelligent and original design solutions by doing this."}</P>
            <P>{"You can keep up with evolving design trends by reading web design blogs. You'll need to be able to comprehend new trends' causes and how they affect user experience. Additionally, you'll discover upgrades to current tools as well as new ones that have recently hit the market."}</P>
            <div className="visible-wrapper">
                <Image src={dynamicImage(`email/3.jpg`)} alt="office" />
            </div>

        </>
    },
    {
        text: <>
            <H6 className="pb-2">{"The best UX designer"}</H6>
            <span>{"The internet is teeming with free resources, no matter what stage of your UX journey you're in, and UX design blogs should be your first point of call. The abundance of blogs available, though, can be somewhat of a double-edged sword because there are so many to choose from. How do you decide which blogs are actually worthwhile reading?"}</span>
            <div>{"We've collected a selection of the top UX design blogs available right now to spare you hours of scrolling and sorting through search results. We possess:"}
                <OL className="d-flex flex-column gap-1 simple-list">
                    <LI><strong>{'Muzli '}</strong></LI>
                    <LI><strong>{'Facebook Design'} </strong></LI>
                    <LI><strong>{'Awwwards'}</strong></LI>
                </OL>
            </div>
            <P>{"If you already work in the UX field, the Inside Design blog has all the information you need to expand your knowledge, especially if you're interested in streamlining your UX teams and procedures and getting a better understanding of the whole product design and development process. This is an excellent location to keep an eye out for the most recent UX trends, tools, resources, and events because they are always adding new stuff."}</P>
        </>
    },
    {
        text: <>
            <H6 className="pb-2">{"How to make best website ideas "}</H6>
            <div className="visible-wrapper">
                <Image src={dynamicImage(`banner/3.jpg`)} alt="website" />
            </div>
            <UL className="d-flex flex-column gap-1 pt-2 simple-list">
                <LI>{'--> Blog '}</LI>
                <LI>{'--> Portfolio website '}</LI>
                <LI>{'--> Event website'} </LI>
                <LI>{'--> personal website '}</LI>
                <LI>{'--> Fashion website '}</LI>
                <LI>{'--> Admin dashboards '}</LI>
                <LI>{'--> E-commerce website '}</LI>
                <LI>{'--> Beauty website '}</LI>
                <LI>{'--> Food website'}</LI>
                <LI>{'--> Animation website '}</LI>
                <LI>{'--> Financial website'}</LI>
            </UL>
        </>
    }
]

