import React, { createContext, useCallback } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { IResearchContextData } from './types';

export const ResearchContext = createContext({} as IResearchContextData);

export const ResearchProvider: React.FC = ({ children }) => {
  const registerResearch = useCallback(async (data: any) => {
    try {
      await api.post('researches', data);
      toast.success('Pesquisa realizada com sucesso');
    } catch (err) {
      toast.error('Erro ao realizar pesquisa');
    }
  }, []);

  return <ResearchContext.Provider value={{ registerResearch }}>{children}</ResearchContext.Provider>;
};
