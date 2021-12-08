import { useContext } from 'react';

import { FormContext } from './context';
import { IFormContextData } from './types';

export function useForms(): IFormContextData {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useForm must be used within an FormProvider');
  }

  return context;
}
