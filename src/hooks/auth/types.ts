import { ICompany } from '@dtos/company';
import { IUser } from '@dtos/user';

export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface IAuthState {
  token: string;
  register: IUser;
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
