import { IUser } from '@dtos/user';

export function filterQuery(list: IUser[], query: string): IUser[] {
  return list.filter(user => user.email.toLowerCase().includes(query));
}
