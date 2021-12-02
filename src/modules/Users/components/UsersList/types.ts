import { IUser } from '@dtos/user';

export interface IUserList {
  usersList: IUser[];
  query: string;
  handleModalDelete(): void;
  handleModalEditModal(): void;
}
