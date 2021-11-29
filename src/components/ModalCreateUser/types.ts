import { IRegister } from '../../pages/Register/types';

export interface IModalCreateUser {
  user: IRegister | undefined;
}

export interface IModalCreateUserActions {
  handleVisibleModal(): void;
}
