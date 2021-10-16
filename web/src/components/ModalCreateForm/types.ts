export interface IModalCreateForm {
  form?: string;
  id: string | undefined;
}

export interface IModalCreateFormActions {
  handleVisibleModal(): void;
}
