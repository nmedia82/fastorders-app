import { StepType } from "@reactour/tour";

export const toursteps: StepType[]  = [
    {
        selector: '.step1',
        content: 'This is Profile image',
        position: "right"
    },
    {
        selector: '.step2',
        content: 'Change Profile image here',
        position: "top"

    },
    {
        selector: '.step3',
        content: 'This is your Social details',
    },
    {
        selector: '.step4',
        content: 'This is your Your detail',
    },
    {
        selector: '.step5',
        content: 'This is the your first Post',
    },
    {
        selector: '.step6',
        content: 'This is the your Last Post'
    },
    {
        selector: '.step7',
        content: 'This is your follower details'
    },
    {
        selector: '.step8',
        content: 'This is your profile image'
    }
];

export const tourSocialData = [
    {
        link: 'https://www.facebook.com/',
        icon: 'facebook'
    },
    {
        link: 'https://accounts.google.com/',
        icon: 'google-plus'
    },
    {
        link: 'https://twitter.com/',
        icon: 'twitter'
    },
    {
        link: 'https://www.instagram.com/',
        icon: 'instagram'
    },
    {
        link: 'https://rss.app/',
        icon: 'rss'
    }
];

export const profileLikeData = [
    {
        icon: 'heart  ',
        text: 'Like'
    },
    {
        icon: 'comment  ',
        text: 'Comment'
    },
    {
        icon: 'paper-plane  ',
        text: 'Share'
    }
]
