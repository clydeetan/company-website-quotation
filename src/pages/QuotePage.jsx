import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuoteList from '../components/QuoteList';
import QuoteForm from '../components/QuoteForm';
import { useQuote } from '../context/useQuote';

const QuotePage = () => {
  const navigate = useNavigate();
  const { lastVisitedCategory, quoteItems } = useQuote();

  const handleAddMoreProducts = () => {
    const path = lastVisitedCategory ? `/products/${lastVisitedCategory}` : '/products';
    navigate(path);
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Your Quote
        </h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="space-y-4">
            <QuoteList />
            {quoteItems.length > 0 && (
              <button
                onClick={handleAddMoreProducts}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <span>Add More Products</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            )}
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Request Quote</h3>
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotePage;