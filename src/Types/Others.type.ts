import { ChangeEvent } from "react";

export interface CommonErrorPageProps {
    error1?: boolean;
    color: string;
    title: string;
}

export interface CountdownRendererProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
}

export interface LoginFormProp {
    logoClass?: string;
}

export interface SocialLinksProp {
    logtext?: string;
    btntext?: string;
}

export interface RegisterWizardProp {
    level: number;
}

interface FormValueInterFace {
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    password: string;
    confirmPassword: string;
    birthDate: string;
    country: string;
    state: string;
}

export interface RegisterWizardForm {
    updateUserData: (event: ChangeEvent<HTMLInputElement>) => void;
    formValue: FormValueInterFace;
}
