import { AiOutlineUserAdd, AiOutlineQuestionCircle } from 'react-icons/ai';
import { GrLogout } from 'react-icons/gr';
import { FaRegBuilding, FaWpforms } from 'react-icons/fa';

import { IHomeDataProps } from './types';

export const homeData: IHomeDataProps[] = [
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
    title: 'Perguntas',
    icon: AiOutlineQuestionCircle,
    color: '#f7f7f7',
    route: '/questions',
  },
  {
    id: 4,
    title: 'Sair',
    icon: GrLogout,
    color: '#fff0f0',
    route: '/',
  },
];
