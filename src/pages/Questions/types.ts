import { IQuestion } from '@hooks/questions/types';

interface IQuestionListProps {
  listQuestions: IQuestion[];
  query: string;
}

export type { IQuestionListProps };
