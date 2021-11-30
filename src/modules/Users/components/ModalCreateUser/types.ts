import { IUser } from 'dtos/user';

export interface IModalCreateUser {
  user: IUser | undefined;
}

export interface IModalCreateUserActions {
  handleVisibleModal(): void;
}
