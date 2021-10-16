import { IconType } from 'react-icons';

export interface IButtonCardProps {
  color: string;
}

export interface IHomeDataProps {
  id: number;
  title: string;
  icon: IconType;
  color: string;
  route: string;
}
