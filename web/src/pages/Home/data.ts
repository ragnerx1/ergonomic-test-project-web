import { IconType } from 'react-icons';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { GrLogout } from 'react-icons/gr';
import { FaRegBuilding, FaWpforms } from 'react-icons/fa';

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
    title: 'Usuários',
    icon: AiOutlineUserAdd,
    color: '#f7f7f7',
    route: '/register',
  },
  {
    id: 1,
    title: 'Empresas',
    icon: FaRegBuilding,
    color: '#f7f7f7',
    route: '/company',
  },
  {
    id: 2,
    title: 'Formulários',
    icon: FaWpforms,
    color: '#f7f7f7',
    route: '/form',
  },
  {
    id: 3,
    title: 'Sair',
    icon: GrLogout,
    color: '#fff0f0',
    route: '/',
  },
];
