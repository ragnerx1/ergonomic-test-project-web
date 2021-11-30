import { IRegister } from '../../pages/Users/types';

export interface IModalUserDelete {
  user: IRegister;
}

export interface IModalUserDeleteActions {
  handleVisibleModal(): void;
}
