// components/pages/Maintenance.js
import React from 'react';
import Typography from '../atoms/Typography';

const Maintenance = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-4 text-center">
      <Typography variant="h1" className="text-4xl font-bold mb-6 text-gray-800">
        Sitio en Mantenimiento
      </Typography>
      <Typography variant="p" className="text-xl text-gray-600 max-w-2xl mb-8">
        Estamos realizando mejoras para ofrecerte una mejor experiencia. Por favor, vuelve más tarde.
      </Typography>
      <div className="animate-pulse">
        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  );
};

export default Maintenance;