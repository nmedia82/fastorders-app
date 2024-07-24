export interface SocialHeaderType {
    activeTab: number;
    setActiveTab: (key: number) => void;
}

export interface SocialTabContentsType {
    activeTab: number;
}

export interface CommonCardProps {
    title: string;
    children: React.ReactNode;
    cardClass?: string;
};

export interface FollowDataType {
    heading: string;
}