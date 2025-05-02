import React from 'react';
import QuoteList from '../components/QuoteList';

const QuotePage = () => {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Your Quote
        </h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <QuoteList />
        </div>
      </div>
    </section>
  );
};

export default QuotePage;