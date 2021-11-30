import React, { createContext, useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { IRegister } from '../../pages/Users/types';
import api from '../../services/api';
import { IRegisterContextData } from './types';

export const RegisterContext = createContext({} as IRegisterContextData);

export const RegisterProvider: React.FC = ({ children }) => {
  const [registers, setRegisters] = useState<IRegister[]>([]);

  const getRegisters = useCallback(async () => {
    const response = await api.get('register');
    setRegisters(response.data);
  }, []);

  const setAdmin = useCallback(
    async (id: string) => {
      try {
        const updatedRegisters = registers.map(register => {
          if (register.id === id) register.access = !register.access;
          return register;
        });

        setRegisters(updatedRegisters);
        await api.put(`register/${id}`);
        toast.success('Usuário atualizado');
      } catch (error) {
        toast.error('Erro ao tonar usuário admin');
      }
    },
    [registers],
  );

  const deleteRegister = useCallback(
    async (id: string) => {
      try {
        const filteredRegisters = registers.filter(
          register => register.id !== id,
        );

        setRegisters(filteredRegisters);
        await api.delete(`register/${id}`);
        toast.success('Usuário deletado');
      } catch (error) {
        toast.error('Erro ao deletar usuário');
      }
    },
    [registers],
  );

  const createRegister = useCallback(async (data: Omit<IRegister, 'id'>) => {
    try {
      const response = await api.post('register', data);
      setRegisters(oldValues => [...oldValues, response.data]);
      toast.success('Usuário criado');
    } catch (error) {
      toast.error('Erro ao criar usuário');
    }
  }, []);

  const editRegister = useCallback(
    async (id: string, data: Omit<IRegister, 'id'>) => {
      try {
        const response = await api.put(`register/info/${id}`, data);

        const filteredRegisters = registers.filter(
          register => register.id !== id,
        );
        setRegisters([...filteredRegisters, response.data]);

        toast.success('Usuário criado');
      } catch (error) {
        toast.error('Erro ao criar usuário');
      }
    },
    [registers],
  );

  const importRegisters = useCallback(async (data: FormData) => {
    try {
      await api.request({
        method: 'POST',
        url: 'register/import',
        headers: {
          'Content-Type':
            'multipart/form-data; boundary=---011000010111000001101001',
        },
        data,
      });

      toast.success('Usuários importados');
    } catch (error) {
      toast.error('Erro ao importar usuários');
    }
  }, []);

  return (
    <RegisterContext.Provider
      value={{
        getRegisters,
        setAdmin,
        deleteRegister,
        createRegister,
        editRegister,
        importRegisters,
        registers,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
