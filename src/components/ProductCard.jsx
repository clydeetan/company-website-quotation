import React, { useState, useRef } from 'react';
import { useQuote } from '../context/useQuote';
import { useNavigate } from 'react-router-dom';
import QuantityModal from './QuantityModal';

const ProductCard = ({ product }) => {
  const { addToQuote, isInQuote, getQuantityInQuote } = useQuote();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addButtonRef = useRef(null);
  const navigate = useNavigate();

  const handleAddToQuote = () => {
    if (isInQuote(product.id)) {
      setIsModalOpen(true);
    } else {
      addToQuote(product);
    }
  };

  const handleAddMore = (quantity) => {
    addToQuote(product, quantity);
  };

  const currentQuantity = getQuantityInQuote(product.id);
  const productInQuote = isInQuote(product.id);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-w-4 aspect-h-3">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {product.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {product.description}
        </p>
        <div className="flex justify-end items-center gap-3">
          {productInQuote && (
            <button
              onClick={() => navigate('/quote')}
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center gap-1"
            >
              <span>View Quote</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          <button
            ref={addButtonRef}
            onClick={handleAddToQuote}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
          >
            <span>{productInQuote ? 'Add More' : 'Add to Quote'}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      <QuantityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleAddMore}
        currentQuantity={currentQuantity}
        buttonRef={addButtonRef}
      />
    </div>
  );
};

export default ProductCard;