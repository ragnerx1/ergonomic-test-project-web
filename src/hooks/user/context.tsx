import { IUser } from '@dtos/user';
import React, { createContext, useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { IUserContextData } from './types';

export const UserContext = createContext({} as IUserContextData);

export const UserProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = useCallback(async () => {
    const response = await api.get('user');
    setUsers(response.data);
  }, []);

  const setAdmin = useCallback(
    async (id: string) => {
      try {
        const updatedRegisters = users.map(register => {
          if (register.id === id) register.admin = !register.admin;
          return register;
        });

        setUsers(updatedRegisters);
        await api.put(`user/${id}`);
        toast.success('Usuário atualizado');
      } catch (error) {
        toast.error('Erro ao tonar usuário admin');
      }
    },
    [users],
  );

  const deleteUser = useCallback(
    async (id: string) => {
      try {
        const filteredUsers = users.filter(register => register.id !== id);

        setUsers(filteredUsers);
        await api.delete(`user/${id}`);
        toast.success('Usuário deletado');
      } catch (error) {
        toast.error('Erro ao deletar usuário');
      }
    },
    [users],
  );

  const createUser = useCallback(async (data: Omit<IUser, 'id'>) => {
    try {
      const response = await api.post('user', data);
      setUsers(oldValues => [...oldValues, response.data]);
      toast.success('Usuário criado');
    } catch (error) {
      toast.error('Erro ao criar usuário');
    }
  }, []);

  const editUser = useCallback(
    async (id: string, data: Omit<IUser, 'id'>) => {
      try {
        const response = await api.put(`user/info/${id}`, data);

        const filteredUser = users.filter(user => user.id !== id);
        setUsers([...filteredUser, response.data]);

        toast.success('Usuário criado');
      } catch (error) {
        toast.error('Erro ao criar usuário');
      }
    },
    [users],
  );

  const importUsers = useCallback(async (data: FormData) => {
    try {
      await api.request({
        method: 'POST',
        url: 'user/import',
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
    <UserContext.Provider
      value={{
        getUsers,
        setAdmin,
        deleteUser,
        createUser,
        editUser,
        importUsers,
        users,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
