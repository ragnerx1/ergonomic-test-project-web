import { IUser } from 'pages/Register/types';

export interface IModalCreateUser {
  user: IUser | undefined;
}

export interface IModalCreateUserActions {
  handleVisibleModal(): void;
}
