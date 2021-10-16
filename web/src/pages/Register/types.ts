export interface IUser {
  id: string;
  email: string;
  access: boolean;
  company_id: string;
}

export interface IUsersList {
  usersList: IUser[];
  query: string;
}
