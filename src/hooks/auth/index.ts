import { useContext } from 'react';

import { AuthContext } from './context';
import { IAuthContextData } from './types';

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
