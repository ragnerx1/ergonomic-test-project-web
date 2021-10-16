export interface ICompany {
  id: string;
  name: string;
}

export interface IListCompanies {
  listCompanies: ICompany[];
  query: string;
}
