import { AlertCircle, Clock, Folder, Home, Star, Trash2 } from "react-feather";

export const fileSidebarButton = [
    {
        id: 1,
        icon: <Home />,
        text: 'Home'
    },
    {
        id: 2,
        icon: <Folder />,
        text: 'All'
    },
    {
        id: 3,
        icon: <Clock />,
        text: 'Recent'
    },
    {
        id: 4,
        icon: <Star />,
        text: 'Starred'
    },
    {
        id: 5,
        icon: <AlertCircle />,
        text: 'Recovery'
    },
    {
        id: 6,
        icon: <Trash2 />,
        text: 'Deleted'
    },
];

export const pricingPlanData = [
    {
        id: 1,
        title: 'Trial Version',
        subTitle: 'FREE',
        text: '100 GB Space',
        buttonText: 'Selected',
        image: 'folder.png'
    },
    {
        id: 2,
        title: 'Premium',
        subTitle: '$5/month',
        text: '200 GB Space',
        buttonText: 'Contact Us',
        image: 'folder1.png'
    }
];

export const quickAccessData = [
    {
        id: 1,
        quickClass: 'youtube-play font-danger',
        quickTitle: 'Videos'
    },
    {
        id: 2,
        quickClass: 'th font-info',
        quickTitle: 'Apps'
    },
    {
        id: 3,
        quickClass: 'file-text-o font-secondary',
        quickTitle: 'Document'
    },
    {
        id: 4,
        quickClass: 'music font-warning',
        quickTitle: 'Music'
    },
    {
        id: 5,
        quickClass: 'download font-primary',
        quickTitle: 'Download'
    },
    {
        id: 6,
        quickClass: 'folder font-info',
        quickTitle: 'Folder'
    },
    {
        id: 7,
        quickClass: 'file-archive-o font-secondary',
        quickTitle: 'Zip File'
    },
    {
        id: 8,
        quickClass: 'trash font-danger',
        quickTitle: 'Trash'
    }
]

export const filesListData = [
    {
        id: 1,
        name: "Logo.psd",
        size: "2.0 MB",
        modify: "1 hour ago",
        icon: "file-image-o txt-primary",
        folderClass: "file-archive-o",
        title: "Endless Admin",
        folderSize: "204 files, 50MB"
    },
    {
        id: 2,
        name: "Project.zip",
        size: "1.90 GB",
        modify: "1 hour ago",
        icon: "file-archive-o txt-secondary",
        folderClass: "folder",
        title: "Endless Admin",
        folderSize: "101 files, 10MB"
    },
    {
        id: 3,
        name: "Backend.xls",
        size: "2.00 GB",
        modify: "1 hour ago",
        icon: "file-excel-o txt-success",
        folderClass: "file-archive-o",
        title: "Endless Admin",
        folderSize: "25 files, 2MB"
    },
    {
        id: 4,
        name: "requirements.txt",
        size: "0.90 KB",
        modify: "1 hour ago",
        icon: "file-text-o txt-info",
        folderClass: "folder",
        title: "Endless Admin",
        folderSize: "108 files, 5MB"
    }
];
