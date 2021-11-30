import React from 'react';

import { AuthProvider } from './auth/context';
import { CompanyProvider } from './company/context';
import { FormProsvider } from './form/context';
import { QuestionProvider } from './questions/context';
import { UserProvider } from './user/context';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <UserProvider>
      <CompanyProvider>
        <FormProsvider>
          <QuestionProvider>{children}</QuestionProvider>
        </FormProsvider>
      </CompanyProvider>
    </UserProvider>
  </AuthProvider>
);

export { AppProvider };
