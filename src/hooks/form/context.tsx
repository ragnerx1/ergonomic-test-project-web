import React, { createContext, useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { IForm } from 'pages/Form/types';
import api from '../../services/api';
import { IFormContextData } from './types';

export const FormContext = createContext({} as IFormContextData);

export const FormProsvider: React.FC = ({ children }) => {
  const [forms, setForms] = useState<IForm[]>([]);

  const getForms = useCallback(async () => {
    const response = await api.get('forms');
    setForms(response.data);
  }, []);

  const setActive = useCallback(
    async (id: string, formSelected: IForm) => {
      try {
        const updatedForms = forms.map(form => {
          if (form.id === id) form.active = !form.active;
          return form;
        });
        setForms(updatedForms);

        const data = { name: formSelected.name, active: formSelected.active };

        await api.put(`forms/${id}`, data);
        toast.success('Formulário ativado');
      } catch (error) {
        toast.error('Erro ao ativar formulário', { theme: 'dark' });
      }
    },
    [forms],
  );

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
    async (selectedForm: IForm) => {
      try {
        const data = { name: selectedForm.name };
        const response = await api.put(`forms/${selectedForm.id}`, data);

        const filteredForm = forms.filter(form => form.id !== selectedForm.id);
        setForms([...filteredForm, response.data]);

        toast.success('Formulário atualizado');
      } catch (error) {
        toast.error('Erro ao atualizar formulário', { theme: 'dark' });
      }
    },
    [forms],
  );

  return (
    <FormContext.Provider value={{ getForms, setActive, deleteForm, createForm, editForm, forms }}>
      {children}
    </FormContext.Provider>
  );
};
