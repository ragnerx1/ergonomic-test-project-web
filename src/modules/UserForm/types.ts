import * as Yup from 'yup';

export type TUserForm = {
  name: string;
  role: string;
  age: string;
  weight: string;
  height: string;
};

export const updateUserFormSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  role: Yup.string().required('Departamento obrigatório'),
  age: Yup.string().required('Idade obrigatória'),
  weight: Yup.string().required('Peso obrigatório'),
  height: Yup.string().required('Altura obrigatória'),
});
