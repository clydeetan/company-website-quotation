import React, { useState, useRef, useEffect } from 'react';

const QuantityModal = ({ isOpen, onClose, onConfirm, currentQuantity, buttonRef }) => {
  const [quantity, setQuantity] = useState(1);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen && buttonRef.current && modalRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const modalRect = modalRef.current.getBoundingClientRect();
      
      // Position the modal above the button
      modalRef.current.style.top = `${buttonRect.top - modalRect.height - 10}px`;
      modalRef.current.style.left = `${buttonRect.left + (buttonRect.width - modalRect.width) / 2}px`;
    }
  }, [isOpen, buttonRef]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(quantity);
    setQuantity(1);
    onClose();
  };

  return (
    <div 
      ref={modalRef}
      className="fixed bg-white rounded-lg p-6 w-full max-w-xs shadow-xl z-50"
      style={{ maxWidth: '280px' }}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Update Quantity
      </h3>
      <p className="text-gray-600 mb-4">
        Current quantity in quote: {currentQuantity}
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Quantity
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="1"
          />
        </div>
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Add to Quote
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuantityModal;