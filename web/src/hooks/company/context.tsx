import { ICompany } from 'pages/Company/types';
import React, { createContext, useCallback, useState } from 'react';

import api from '../../services/api';
import { ICompanyContextData } from './types';

export const CompanyContext = createContext({} as ICompanyContextData);

export const CompanyProvider: React.FC = ({ children }) => {
  const [companies, setCompanies] = useState<ICompany[]>([]);

  const getCompanies = useCallback(async () => {
    const response = await api.get('company');
    console.log(response.data);

    setCompanies(response.data);
  }, []);

  return (
    <CompanyContext.Provider value={{ getCompanies, companies }}>
      {children}
    </CompanyContext.Provider>
  );
};
