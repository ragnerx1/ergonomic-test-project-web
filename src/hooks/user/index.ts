import { useContext } from 'react';

import { UserContext } from './context';
import { IUserContextData } from './types';

export function useUser(): IUserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useRegister must be used within an RegisterProvider');
  }

  return context;
}
