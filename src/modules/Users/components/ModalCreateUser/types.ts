import { IUser } from 'dtos/user';
import * as Yup from 'yup';

export interface IModalCreateUser {
  user: IUser | undefined;
}

export interface IModalCreateUserActions {
  handleVisibleModal(): void;
}

export type TCreateUserForm = {
  email: string;
  company_id: string;
  admin: boolean;
};

export const createUserFormSchema = Yup.object().shape({
  email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
});
