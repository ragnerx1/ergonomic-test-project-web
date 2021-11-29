import { IconType } from 'react-icons';

export interface IQuestiontypes {
  id: number;
  title: string;
  icon: IconType;
}

export interface ISelectQuestionType {
  selectQuestionType(id: number): void;
}
