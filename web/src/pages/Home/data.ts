import {
  AiOutlineUserAdd,
  AiOutlineUsergroupAdd,
  AiOutlineOrderedList,
} from 'react-icons/ai';
import { GrLogout } from 'react-icons/gr';
import { IconType } from 'react-icons';

export interface HomeDataProps {
  id: number;
  title: string;
  icon: IconType;
  color: string;
  route: string;
}

export const homeData: HomeDataProps[] = [
  {
    id: 0,
    title: 'Cadastro',
    icon: AiOutlineUserAdd,
    color: '#f7f7f7',
    route: '/register',
  },
  {
    id: 1,
    title: 'Cadastro por inportação',
    icon: AiOutlineUsergroupAdd,
    color: '#f7f7f7',
    route: '/import',
  },
  {
    id: 2,
    title: 'Lista de usuários',
    icon: AiOutlineOrderedList,
    color: '#f7f7f7',
    route: '/register',
  },
  {
    id: 3,
    title: 'Sair',
    icon: GrLogout,
    color: '#fff0f0',
    route: '/',
  },
];
