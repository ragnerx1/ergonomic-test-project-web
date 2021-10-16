export interface IForm {
  id: string;
  name: string;
  active: boolean;
}

export interface IFormList {
  listForms: IForm[];
  query: string;
}
