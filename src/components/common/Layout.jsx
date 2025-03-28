import React from 'react';

const Layout = ({ title, description, children }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        {description && (
          <p className="text-lg text-gray-700">{description}</p>
        )}
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Layout;