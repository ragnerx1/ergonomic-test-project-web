import { IRegister } from '../../pages/Users/types';

export interface IModalCreateUser {
  user: IRegister | undefined;
}

export interface IModalCreateUserActions {
  handleVisibleModal(): void;
}
