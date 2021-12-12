import React from 'react';

import { AuthProvider } from './auth/context';
import { CompanyProvider } from './company/context';
import { FormProsvider } from './form/context';
import { UserProvider } from './user/context';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <UserProvider>
      <CompanyProvider>
        <FormProsvider>{children}</FormProsvider>
      </CompanyProvider>
    </UserProvider>
  </AuthProvider>
);

export { AppProvider };
