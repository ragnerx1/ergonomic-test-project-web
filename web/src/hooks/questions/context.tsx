import React, { createContext, useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { IQuestion, IQuestionContextData } from './types';

const QuestionContext = createContext({} as IQuestionContextData);

const QuestionProvider: React.FC = ({ children }) => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const getQuestions = useCallback(async () => {
    const response = await api.get('questions');
    setQuestions(response.data);
  }, []);

  const setActive = useCallback(
    async (id: string) => {
      try {
        const filteredQuestions = questions.filter(
          question => question.id !== id,
        );

        const response = await api.put(`questions/${id}`);
        setQuestions([...filteredQuestions, response.data]);
        toast.success('Pergunta atualizada');
      } catch (error) {
        toast.error('Nåo foi possivel mudar status da pergunta', {
          theme: 'dark',
        });
      }
    },
    [questions],
  );

  const deleteQuestion = useCallback(
    async (id: string) => {
      try {
        const filteredQuestions = questions.filter(
          question => question.id !== id,
        );

        await api.delete(`questions/${id}`);
        setQuestions(filteredQuestions);
        toast.success('Pergunta deletada');
      } catch (error) {
        toast.error('Nåo foi possivel deletar a pergunta', {
          theme: 'dark',
        });
      }
    },
    [questions],
  );

  return (
    <QuestionContext.Provider
      value={{ questions, getQuestions, setActive, deleteQuestion }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionContext, QuestionProvider };
