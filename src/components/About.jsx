import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content Column */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Our Company
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Founded in 2020, we've been at the forefront of delivering exceptional 
              products that transform spaces and enhance lifestyles. Our commitment 
              to quality and innovation has made us a trusted name in the industry.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              We believe in sustainable practices, exceptional customer service, and 
              creating products that stand the test of time. Our team of experts works 
              tirelessly to ensure each product meets our high standards of excellence.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">1000+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">50+</h3>
                <p className="text-gray-600">Products</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">5⭐</h3>
                <p className="text-gray-600">Rating</p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex-1">
            <div className="relative">
              <img
                src="/company-website-quotation/about-image.jpg"
                alt="Our workspace"
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-blue-600 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;