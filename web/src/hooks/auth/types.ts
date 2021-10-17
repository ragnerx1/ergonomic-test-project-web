import { IUser } from 'pages/Register/types';

export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface IAuthState {
  token: string;
  register: IUser;
}

export interface IAuthContextData {
  signIn(credentials: ISignInCredentials): Promise<void>;
  user: IAuthState;
}
