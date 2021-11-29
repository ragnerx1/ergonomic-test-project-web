import { IForm } from 'pages/Form/types';

export interface IFormContextData {
  getForms(): Promise<void>;
  setActive(id: string, selectedForm: IForm): Promise<void>;
  deleteForm(id: string): Promise<void>;
  createForm(data: Omit<IForm, 'id'>): Promise<void>;
  editForm(selectedForm: IForm): Promise<void>;
  forms: IForm[];
}
