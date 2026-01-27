
import React from 'react';
import Navigation from '@/components/Navigation';

const PublicLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navigation />
      <main className="flex-grow overflow-x-hidden">
        {children}
      </main>
    </div>
  );
};

export default PublicLayout;
