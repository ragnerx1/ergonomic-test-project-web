import { IForm } from 'pages/Form/types';

export interface IModalCreateForm {
  form: IForm;
}

export interface IModalCreateFormActions {
  handleVisibleModal(): void;
}
