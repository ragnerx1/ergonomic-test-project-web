import { ICompany } from '@dtos/company';

export interface ICompanyContextData {
  getCompanies(): Promise<void>;
  deleteCompany(id: string): Promise<void>;
  createCompany(name: string, formId: string): Promise<void>;
  editCompany(companySelected: ICompany): Promise<void>;
  companies: ICompany[];
}
