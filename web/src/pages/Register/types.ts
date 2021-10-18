export interface IRegister {
  id: string;
  email: string;
  access: boolean;
  company_id: string;
}

export interface IRegisterList {
  usersList: IRegister[];
  query: string;
}
