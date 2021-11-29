import { IRegister } from 'pages/Register/types';

export interface IModalUserDelete {
  user: IRegister;
}

export interface IModalUserDeleteActions {
  handleVisibleModal(): void;
}
