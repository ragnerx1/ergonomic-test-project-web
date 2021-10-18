import { ICompany } from 'pages/Company/types';

export interface ICompanyContextData {
  getCompanies(): Promise<void>;
  companies: ICompany[];
}
