import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { ToastContainer } from 'react-toastify';

import { AppProvider } from './hooks';
import Routes from './routes/auth.routes';
import { GlobalStyles } from './styles/globalStyles';

const App: React.FC = () => (
  <AppProvider>
    <GlobalStyles />
    <Routes />
    <ToastContainer />
  </AppProvider>
);

export default App;
