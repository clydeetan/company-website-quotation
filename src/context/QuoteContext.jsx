import { useState } from 'react';
import { QuoteContext } from './quoteContextDef';

export const QuoteProvider = ({ children }) => {
  const [quoteItems, setQuoteItems] = useState([]);

  const addToQuote = (product) => {
    setQuoteItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromQuote = (productId) => {
    setQuoteItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setQuoteItems(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, quantity: quantity }
          : item
      )
    );
  };

  const clearQuote = () => {
    setQuoteItems([]);
  };

  const value = {
    quoteItems,
    addToQuote,
    removeFromQuote,
    updateQuantity,
    clearQuote,
    totalItems: quoteItems.reduce((sum, item) => sum + item.quantity, 0)
  };

  return (
    <QuoteContext.Provider value={value}>
      {children}
    </QuoteContext.Provider>
  );
};