import { IRegister } from 'pages/Register/types';

export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface IAuthState {
  token: string;
  register: IRegister;
}

export interface IAuthContextData {
  signIn(credentials: ISignInCredentials): Promise<void>;
  user: IAuthState;
}
