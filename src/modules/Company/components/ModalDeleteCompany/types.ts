import { ICompany } from '@dtos/company';

export interface IModalDeleteCompany {
  company: ICompany;
}

export interface IModalDeleteCompanyActions {
  handleVisibleModal(): void;
}
