import { IUser } from 'dtos/user';

export interface IModalUserDelete {
  user: IUser;
}

export interface IModalUserDeleteActions {
  handleVisibleModal(): void;
}
