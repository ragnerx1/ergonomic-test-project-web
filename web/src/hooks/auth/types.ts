import { ICompany } from 'pages/Company/types';
import { IRegister } from 'pages/Register/types';

export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface IAuthState {
  token: string;
  register: IRegister;
  company: ICompany;
}

export interface IResponseSignin {
  register: {
    access: boolean;
  };
}

export interface IAuthContextData {
  signIn(credentials: ISignInCredentials): Promise<IResponseSignin>;
  user: IAuthState;
}
