import React, { createContext, useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { IForm } from '@dtos/form';
import api from '../../services/api';
import { IFormContextData } from './types';

export const FormContext = createContext({} as IFormContextData);

export const FormProvider: React.FC = ({ children }) => {
  const [forms, setForms] = useState<IForm[]>([]);
  const [selectedForm, setSelectedForm] = useState<IForm>({} as IForm);

  const getForms = useCallback(async () => {
    const response = await api.get('forms');
    setForms(response.data);
  }, []);

  const getFormById = useCallback(async (id?: string) => {
    const response = await api.get(`forms/${id}`);
    return response.data;
  }, []);

  const setForm = useCallback((form: IForm) => {
    setSelectedForm(form);
  }, []);

  const deleteForm = useCallback(
    async (id: string) => {
      try {
        const filteredForm = forms.filter(form => form.id !== id);
        setForms(filteredForm);

        await api.delete(`forms/${id}`);
        toast.success('Formulário deletado');
      } catch (error) {
        toast.error('Erro ao deletar formulário', { theme: 'dark' });
      }
    },
    [forms],
  );

  const createForm = useCallback(async (data: Omit<IForm, 'id'>) => {
    try {
      const response = await api.post('forms', data);
      setForms(oldValue => [...oldValue, response.data]);

      toast.success('Formulário criado');
    } catch (error) {
      toast.error('Erro ao criar formulário', { theme: 'dark' });
    }
  }, []);

  const editForm = useCallback(
    async (form: IForm) => {
      try {
        const data = { name: form.name };
        const response = await api.put(`forms/${form.id}`, data);

        const filteredForm = forms.filter(value => value.id !== form.id);
        setForms([...filteredForm, response.data]);

        toast.success('Formulário atualizado');
      } catch (error) {
        toast.error('Erro ao atualizar formulário', { theme: 'dark' });
      }
    },
    [forms],
  );

  return (
    <FormContext.Provider
      value={{ getForms, getFormById, deleteForm, createForm, editForm, forms, setForm, selectedForm }}
    >
      {children}
    </FormContext.Provider>
  );
};
