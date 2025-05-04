import { useState } from 'react';
import { QuoteContext } from './quoteContextDef';

export const QuoteProvider = ({ children }) => {
  const [quoteItems, setQuoteItems] = useState([]);
  const [lastVisitedCategory, setLastVisitedCategory] = useState(null);

  const isInQuote = (productId) => {
    return quoteItems.some(item => item.id === productId);
  };

  const getQuantityInQuote = (productId) => {
    const item = quoteItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  const addToQuote = (product, quantity = 1) => {
    setQuoteItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
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
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearQuote = () => {
    setQuoteItems([]);
  };

  const updateLastVisitedCategory = (category) => {
    setLastVisitedCategory(category);
  };

  const value = {
    quoteItems,
    addToQuote,
    removeFromQuote,
    updateQuantity,
    clearQuote,
    lastVisitedCategory,
    updateLastVisitedCategory,
    totalItems: quoteItems.reduce((sum, item) => sum + item.quantity, 0),
    isInQuote,
    getQuantityInQuote
  };

  return (
    <QuoteContext.Provider value={value}>
      {children}
    </QuoteContext.Provider>
  );
};