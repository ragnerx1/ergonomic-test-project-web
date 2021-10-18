import React, { createContext, useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { IRegister } from 'pages/Register/types';
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
    console.log(data);

    try {
      await api.post('register', data);
      toast.success('Usuário criado');
    } catch (error) {
      toast.error('Erro ao criar usuário');
    }
  }, []);

  return (
    <RegisterContext.Provider
      value={{
        getRegisters,
        setAdmin,
        deleteRegister,
        createRegister,
        registers,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
