import * as Yup from 'yup';

export type TCreateForm = {
  name: string;
  initialDate: string;
  finalDate: string;
};

export interface IModalCreateFormActions {
  handleVisibleModal(): void;
}

export const createFormSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
});
