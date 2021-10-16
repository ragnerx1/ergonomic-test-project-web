import React, { createContext, useCallback } from 'react';

import api from '../../services/api';
import { ISignInCredentials, IAuthContextData } from './types';

export const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(
    async ({ email, password }: ISignInCredentials) => {
      const response = await api.post('/session', { email, password });
      const { register, token } = response.data;

      localStorage.setItem('ergonomic@name', register.email);
      localStorage.setItem('ergonomic@token', token);
    },
    [],
  );

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};
