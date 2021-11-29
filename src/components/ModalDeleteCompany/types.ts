import { ICompany } from 'pages/Company/types';

export interface IModalDeleteCompany {
  company: ICompany;
}

export interface IModalDeleteCompanyActions {
  handleVisibleModal(): void;
}
