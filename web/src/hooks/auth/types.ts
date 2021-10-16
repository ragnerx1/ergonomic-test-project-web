import { IUser } from 'pages/Register/types';

export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface IAuthContextData {
  signIn(credentials: ISignInCredentials): Promise<void>;
}
