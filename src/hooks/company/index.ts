import { useContext } from 'react';

import { CompanyContext } from './context';
import { ICompanyContextData } from './types';

export function useCompany(): ICompanyContextData {
  const context = useContext(CompanyContext);

  if (!context) {
    throw new Error('useCompany must be used within an CompanyProvider');
  }

  return context;
}
