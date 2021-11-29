import { ICompany } from 'pages/Company/types';

export interface ICompanyContextData {
  getCompanies(): Promise<void>;
  deleteCompany(id: string): Promise<void>;
  createCompany(name: string, formId: string): Promise<void>;
  editCompany(companySelected: ICompany): Promise<void>;
  companies: ICompany[];
}
