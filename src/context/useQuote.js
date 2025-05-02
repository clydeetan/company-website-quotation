import { useContext } from 'react';
import { QuoteContext } from './quoteContextDef';

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};