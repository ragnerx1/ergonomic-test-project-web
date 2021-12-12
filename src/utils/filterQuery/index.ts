import { ICompany } from '@dtos/company';
import { IForm } from '@dtos/form';
import { IUser } from '@dtos/user';

export function filterQuery(list: IUser[], query: string): IUser[] {
  return list.filter(user => user.email.toLowerCase().includes(query));
}

export function filterCompaniesQuery(list: ICompany[], query: string): ICompany[] {
  return list.filter(company => company.name.toLowerCase().includes(query));
}

export function filterFormsQuery(listForms: IForm[], query: string): IForm[] {
  return listForms.filter(form => form.name.toLowerCase().includes(query));
}
