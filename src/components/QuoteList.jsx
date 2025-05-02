import React from 'react';
import { useQuote } from '../context/useQuote';
import QuoteForm from './QuoteForm';

const QuantityControl = ({ item, updateQuantity }) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => updateQuantity(item.id, item.quantity - 1)}
        className="text-gray-500 hover:text-blue-600 p-1"
        disabled={item.quantity <= 1}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
        </svg>
      </button>
      <input
        type="number"
        value={item.quantity}
        onChange={(e) => {
          const value = parseInt(e.target.value, 10);
          if (!isNaN(value)) {
            updateQuantity(item.id, value);
          }
        }}
        className="w-16 text-center border border-gray-300 rounded-md p-1"
        min="1"
      />
      <button
        onClick={() => updateQuantity(item.id, item.quantity + 1)}
        className="text-gray-500 hover:text-blue-600 p-1"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
};

const QuoteList = () => {
  const { quoteItems, removeFromQuote, clearQuote, updateQuantity } = useQuote();

  const calculateItemTotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  const calculateTotal = () => {
    return quoteItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  if (quoteItems.length === 0) {
    return (
      <>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center h-fit">
          <p className="text-gray-600">No items in your quote yet.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Request Quote</h3>
          <QuoteForm />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Quote Items</h3>
          <button
            onClick={clearQuote}
            className="text-red-600 hover:text-red-800 text-sm font-medium"
          >
            Clear All
          </button>
        </div>

        <div className="space-y-4">
          {quoteItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h4 className="text-lg font-medium text-gray-900">{item.title}</h4>
                  <div className="flex items-center mt-2">
                    <p className="text-gray-600">${item.price} each</p>
                    <p className="text-sm text-blue-600 ml-4">
                      Subtotal: ${calculateItemTotal(item.price, item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <QuantityControl item={item} updateQuantity={updateQuantity} />
                <button
                  onClick={() => removeFromQuote(item.id)}
                  className="text-red-500 hover:text-red-700"
                  aria-label="Remove item"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center text-lg font-semibold">
            <span>Total:</span>
            <span className="text-blue-600">${calculateTotal()}</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Request Quote</h3>
        <QuoteForm />
      </div>
    </>
  );
};

export default QuoteList;