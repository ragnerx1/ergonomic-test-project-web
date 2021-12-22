import React from 'react';

import { AuthProvider } from './auth/context';
import { CompanyProvider } from './company/context';
import { FormProvider } from './form/context';
import { ResearchProvider } from './researches/context';
import { UserProvider } from './user/context';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <UserProvider>
      <CompanyProvider>
        <FormProvider>
          <ResearchProvider>{children}</ResearchProvider>
        </FormProvider>
      </CompanyProvider>
    </UserProvider>
  </AuthProvider>
);

export { AppProvider };
