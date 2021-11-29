import { ICompany } from 'pages/Company/types';

export interface IModalCreateCompany {
  company: ICompany;
}

export interface IModalCreateCompanyActions {
  handleVisibleModal(): void;
}
