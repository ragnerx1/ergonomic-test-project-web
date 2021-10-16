import { UserProps } from 'pages/Register';

export interface IModalCreateUser {
  status: boolean;
  onPress(): void;
  user: UserProps | undefined;
}
