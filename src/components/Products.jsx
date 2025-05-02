import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: 'Modern Desk Lamp',
    description: 'Sleek and minimalist desk lamp with adjustable brightness.',
    price: 79.99,
    image: '/products/desk-lamp.jpg'
  },
  {
    id: 2,
    title: 'Ergonomic Chair',
    description: 'Premium office chair designed for comfort and proper posture.',
    price: 299.99,
    image: '/products/chair.jpg'
  },
  {
    id: 3,
    title: 'Smart Storage Cabinet',
    description: 'Versatile storage solution with modern design.',
    price: 449.99,
    image: '/products/cabinet.jpg'
  },
  {
    id: 4,
    title: 'Wireless Charger Pad',
    description: 'Fast-charging pad with elegant minimalist design.',
    price: 39.99,
    image: '/products/charger.jpg'
  },
  {
    id: 5,
    title: 'Wooden Desk Organizer',
    description: 'Handcrafted desk organizer with multiple compartments.',
    price: 59.99,
    image: '/products/organizer.jpg'
  },
  {
    id: 6,
    title: 'Air Purifier',
    description: 'Smart air purifier with HEPA filter and air quality sensor.',
    price: 199.99,
    image: '/products/purifier.jpg'
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Featured Products
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;