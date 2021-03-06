export interface ICompany {
  id: string;
  name: string;
  form_id: string;
}

export interface IListCompanies {
  listCompanies: ICompany[];
  query: string;
}
