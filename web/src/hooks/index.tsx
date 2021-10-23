import React from 'react';

import { AuthProvider } from './auth/context';
import { CompanyProvider } from './company/context';
import { FormProsvider } from './form/context';
import { QuestionProvider } from './questions/context';
import { RegisterProvider } from './register/context';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <RegisterProvider>
      <CompanyProvider>
        <FormProsvider>
          <QuestionProvider>{children}</QuestionProvider>
        </FormProsvider>
      </CompanyProvider>
    </RegisterProvider>
  </AuthProvider>
);

export { AppProvider };
