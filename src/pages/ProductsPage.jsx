import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const products = {
  'Home Office': [
    {
      id: 1,
      title: 'Modern Desk Lamp',
      description: 'Sleek and minimalist desk lamp with adjustable brightness.',
      price: 79.99,
      image: '/products/desk-lamp.jpg',
      category: 'Home Office'
    },
    {
      id: 2,
      title: 'Ergonomic Chair',
      description: 'Premium office chair designed for comfort and proper posture.',
      price: 299.99,
      image: '/products/chair.jpg',
      category: 'Home Office'
    },
    {
      id: 4,
      title: 'Wireless Charger Pad',
      description: 'Fast-charging pad with elegant minimalist design.',
      price: 39.99,
      image: '/products/charger.jpg',
      category: 'Home Office'
    },
    {
      id: 5,
      title: 'Wooden Desk Organizer',
      description: 'Handcrafted desk organizer with multiple compartments.',
      price: 59.99,
      image: '/products/organizer.jpg',
      category: 'Home Office'
    }
  ],
  'House Furniture': [
    {
      id: 3,
      title: 'Smart Storage Cabinet',
      description: 'Versatile storage solution with modern design.',
      price: 449.99,
      image: '/products/cabinet.jpg',
      category: 'House Furniture'
    },
    {
      id: 6,
      title: 'Air Purifier',
      description: 'Smart air purifier with HEPA filter and air quality sensor.',
      price: 199.99,
      image: '/products/purifier.jpg',
      category: 'House Furniture'
    }
  ]
};

const ProductsPage = () => {
  const { category } = useParams();
  
  // Convert URL format (home-office) to category format (Home Office)
  const getCategoryFromUrl = (urlCategory) => {
    if (!urlCategory) return null;
    return urlCategory
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const normalizedCategory = getCategoryFromUrl(category);
  
  // Get products based on category or all products if no category is specified
  const getDisplayProducts = () => {
    if (!category) {
      // Return all products when no category is specified
      return Object.values(products).flat();
    }
    // Return products for the specified category
    return products[normalizedCategory] || [];
  };

  const displayProducts = getDisplayProducts();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          {normalizedCategory || 'All Products'}
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;