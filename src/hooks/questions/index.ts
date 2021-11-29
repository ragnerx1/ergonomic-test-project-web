import { useContext } from 'react';

import { QuestionContext } from './context';
import { IQuestionContextData } from './types';

export function useQuestion(): IQuestionContextData {
  const context = useContext(QuestionContext);

  if (!context) {
    throw new Error('useQuestion must be used within an QuestionProvider');
  }

  return context;
}
