import { City } from "./../Utils/Constants/index";
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
  fullName: string;
  contactNumber: string;
  email: string;
  businessAddress: string;
  businessName: string;
  appDomain: string;
  city: string;
}

export interface RegisterWizardForm {
  updateUserData: (event: ChangeEvent<HTMLInputElement>) => void;
  formValue: FormValueInterFace;
}
