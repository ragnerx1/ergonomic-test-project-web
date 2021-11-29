import { useContext } from 'react';

import { RegisterContext } from './context';
import { IRegisterContextData } from './types';

export function useRegister(): IRegisterContextData {
  const context = useContext(RegisterContext);

  if (!context) {
    throw new Error('useRegister must be used within an RegisterProvider');
  }

  return context;
}
