export interface IModalCreateCompany {
  company?: string;
  id: string | undefined;
}

export interface IModalCreateCompanyActions {
  handleVisibleModal(): void;
}
