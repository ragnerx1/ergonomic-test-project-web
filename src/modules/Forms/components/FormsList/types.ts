import { IForm } from '@dtos/form';

export interface IFormList {
  listForms: IForm[];
  query: string;
  handleEditForm(): void;
  handleDeleteForm(): void;
}
