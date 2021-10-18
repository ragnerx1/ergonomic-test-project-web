import React from 'react';

import { AuthProvider } from './auth/context';
import { CompanyProvider } from './company/context';
import { RegisterProvider } from './register/context';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <RegisterProvider>
      <CompanyProvider>{children}</CompanyProvider>
    </RegisterProvider>
  </AuthProvider>
);

export { AppProvider };
