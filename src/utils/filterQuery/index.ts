import { ICompany } from '@dtos/company';
import { IUser } from '@dtos/user';

export function filterQuery(list: IUser[], query: string): IUser[] {
  return list.filter(user => user.email.toLowerCase().includes(query));
}

export function filterCompaniesQuery(list: ICompany[], query: string): ICompany[] {
  return list.filter(company => company.name.toLowerCase().includes(query));
}
