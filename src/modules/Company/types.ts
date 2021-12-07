import { ICompany } from '@dtos/company';

export interface IListCompanies {
  listCompanies: ICompany[];
  query: string;
}
