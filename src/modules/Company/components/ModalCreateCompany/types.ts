import * as Yup from 'yup';

export interface IModalCreateCompanyActions {
  handleVisibleModal(): void;
}

export type TCreateCompanyForm = {
  name: string;
  formId: string;
};

export const createCompanyFormSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
});
