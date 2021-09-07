import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes/auth.routes';
import { GlobalStyles } from './styles/globalStyles';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Routes />
    <ToastContainer />
  </>
);

export default App;
