
import React from 'react';
import Navigation from '@/components/Navigation';

const PublicLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

export default PublicLayout;
