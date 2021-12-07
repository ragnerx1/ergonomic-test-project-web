import { ICompany } from '@dtos/company';

export interface IModalCreateCompany {
  company: ICompany;
}

export interface IModalCreateCompanyActions {
  handleVisibleModal(): void;
}
