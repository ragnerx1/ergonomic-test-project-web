import { IForm } from '@dtos/form';

export interface IFormContextData {
  getForms(): Promise<void>;
  deleteForm(id: string): Promise<void>;
  createForm(data: Omit<IForm, 'id'>): Promise<void>;
  editForm(selectedForm: IForm): Promise<void>;
  setForm(form: IForm): void;
  selectedForm: IForm;
  forms: IForm[];
}
