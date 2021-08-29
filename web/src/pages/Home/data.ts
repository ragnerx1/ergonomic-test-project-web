import {
  AiOutlineUserAdd,
  AiOutlineUsergroupAdd,
  AiOutlineOrderedList,
} from 'react-icons/ai';
import { GrLogout } from 'react-icons/gr';
import { IconType } from 'react-icons';

interface HomeDataProps {
  id: number;
  title: string;
  icon: IconType;
  color: string;
  route: string;
}

const homeData: HomeDataProps[] = [
  {
    id: 0,
    title: 'Cadastro',
    icon: AiOutlineUserAdd,
    color: '#f7f7f7',
    route: 'Register',
  },
  {
    id: 1,
    title: 'Cadastro por inportação',
    icon: AiOutlineUsergroupAdd,
    color: '#f7f7f7',
    route: 'Register',
  },
  {
    id: 2,
    title: 'Lista de usuários',
    icon: AiOutlineOrderedList,
    color: '#f7f7f7',
    route: 'Register',
  },
  {
    id: 3,
    title: 'Sair',
    icon: GrLogout,
    color: '#fff0f0',
    route: 'Login',
  },
];

export { HomeDataProps, homeData };
