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

  const createQuestion = useCallback(async (data: IQuestion) => {
    try {
      const response = await api.post('questions', data);

      setQuestions(oladValues => [...oladValues, response.data]);

      toast.success('Pergunta criada');
      return response.data.id;
    } catch (error) {
      toast.error('Erro ao criar pergunta', { theme: 'dark' });
      return false;
    }
  }, []);

  const updateImage = useCallback(async (id: string, data: FormData) => {
    try {
      await api.put(`questions/image/${id}`, data);
      toast.success('Imagem criada');
    } catch (error) {
      toast.error('Erro ao criar imagem', { theme: 'dark' });
    }
  }, []);

  const getQuestionsByForm = useCallback(async (id: string) => {
    const response = await api.get(`questions/form/${id}`);
    return response.data;
  }, []);

  return (
    <QuestionContext.Provider
      value={{
        questions,
        getQuestions,
        setActive,
        deleteQuestion,
        createQuestion,
        updateImage,
        getQuestionsByForm,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionContext, QuestionProvider };
