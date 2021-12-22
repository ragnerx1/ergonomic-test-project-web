import { useContext } from 'react';

import { ResearchContext } from './context';
import { IResearchContextData } from './types';

export function useResearch(): IResearchContextData {
  const context = useContext(ResearchContext);

  if (!context) {
    throw new Error('useResearch must be used within an ResearchProvider');
  }

  return context;
}
