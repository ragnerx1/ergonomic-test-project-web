import { IQuestion } from '@hooks/questions/types';

export interface IModalDeleteQuestion {
  question: IQuestion;
}

export interface IIModalDeleteQuestionActions {
  handleVisibleModal(): void;
}
