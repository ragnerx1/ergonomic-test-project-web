import React, { createContext, useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { ICompany } from '@dtos/company';
import api from '../../services/api';
import { ICompanyContextData } from './types';

export const CompanyContext = createContext({} as ICompanyContextData);

export const CompanyProvider: React.FC = ({ children }) => {
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [selectedcompany, setSelectedCompany] = useState<ICompany>({} as ICompany);

  const setCompany = useCallback((company: ICompany) => {
    setSelectedCompany(company);
  }, []);

  const getCompanies = useCallback(async () => {
    const response = await api.get('company');
    setCompanies(response.data);
  }, []);

  const deleteCompany = useCallback(
    async (id: string) => {
      try {
        const filteredComapnies = companies.filter(comapany => comapany.id !== id);

        setCompanies(filteredComapnies);
        await api.delete(`company/${id}`);
        toast.success('Empresa deletada');
      } catch (error) {
        toast.error('Erro ao deletar empresa', { theme: 'dark' });
      }
    },
    [companies],
  );

  const createCompany = useCallback(async (name: string, formId: string) => {
    try {
      const response = await api.post('company', { name, form_id: formId });
      setCompanies(oldValues => [...oldValues, response.data]);

      toast.success('Empresa criada');
    } catch (error) {
      toast.error('Erro ao criar empresa', { theme: 'dark' });
    }
  }, []);

  const editCompany = useCallback(
    async (companySeletced: ICompany) => {
      const { id, name, form_id } = companySeletced;

      try {
        const response = await api.put(`company/${id}`, { name, form_id });

        const filteredCompany = companies.filter(company => company.id !== id);
        setCompanies([...filteredCompany, response.data]);

        toast.success('Empresa atualizada');
      } catch (error) {
        toast.error('Erro ao criar empresa', { theme: 'dark' });
      }
    },
    [companies],
  );

  return (
    <CompanyContext.Provider
      value={{
        getCompanies,
        deleteCompany,
        createCompany,
        editCompany,
        setCompany,
        selectedcompany,
        companies,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
