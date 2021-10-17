import React, { createContext, useCallback, useState } from 'react';

import api from '../../services/api';
import { ISignInCredentials, IAuthContextData, IAuthState } from './types';

export const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@ergonomic:token');
    const register = localStorage.getItem('@ergonomic:user');

    if (token && register) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, register: JSON.parse(register) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(
    async ({ email, password }: ISignInCredentials) => {
      const response = await api.post('/session', { email, password });
      const { register, token } = response.data;

      localStorage.setItem('@ergonomic:token', token);
      localStorage.setItem('@ergonomic:user', JSON.stringify(register));

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ register, token });
    },
    [],
  );

  return (
    <AuthContext.Provider value={{ signIn, user: data }}>
      {children}
    </AuthContext.Provider>
  );
};
