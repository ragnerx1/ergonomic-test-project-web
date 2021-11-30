import { IUser } from '@dtos/user';

export interface IUserContextData {
  getUsers(): Promise<void>;
  setAdmin(id: string): Promise<void>;
  deleteUser(id: string): Promise<void>;
  createUser(data: Omit<IUser, 'id'>): Promise<void>;
  editUser(id: string, data: Omit<IUser, 'id'>): Promise<void>;
  importUsers(data: FormData): Promise<void>;
  users: IUser[];
}
