import React from 'react';

const Hero = () => {
  return (
    <div className="hero-banner text-white py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm">⚠️</span>
            <span className="text-sm">
              В зв'язку AUTO.RIA розглядає авто в дилерських, про нього все стало 
              ще легше. Переконайтесь!
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Перейти до своєї версії</span>
            <button className="text-white hover:text-gray-200">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;