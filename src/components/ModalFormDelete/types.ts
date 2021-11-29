import { IForm } from 'pages/Form/types';

export interface IModalFormDelete {
  company: IForm;
}

export interface IModalFormDeleteActions {
  handleVisibleModal(): void;
}
