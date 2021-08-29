import React from 'react';

import Routes from './routes/auth.routes';
import { GlobalStyles } from './styles/globalStyles';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Routes />
  </>
);

export default App;
