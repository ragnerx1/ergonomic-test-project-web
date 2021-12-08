import * as Yup from 'yup';

export type TLoginForm = {
  email: string;
  password: string;
};

export const createLoginFormSchema = Yup.object().shape({
  email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: Yup.string().required('E-mail obrigatório'),
});
