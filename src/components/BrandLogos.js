import React from 'react';
import { ArrowRight } from 'lucide-react';

const BrandLogos = () => {
  const categories = [
    { name: 'Легкові А/м', icon: '🚗' },
    { name: 'Нові авто', icon: '✨' },
    { name: 'Мото', icon: '🏍️' },
    { name: 'Вантажівки', icon: '🚛' },
    { name: 'Причепи', icon: '🚐' },
    { name: 'Спецтехніка', icon: '🚜' },
    { name: 'Сільгосптехніка', icon: '🚜' },
    { name: 'Автобуси', icon: '🚌' },
    { name: 'Водний', icon: '⛵' }
  ];

  const brands = [
    { name: 'Lexus', logo: '/images/lexus-logo.png' },
    { name: 'Volkswagen', logo: '/images/vw-logo.png' },
    { name: 'Mercedes-Benz', logo: '/images/mercedes-logo.png' },
    { name: 'Opel', logo: '/images/opel-logo.png' },
    { name: 'Renault', logo: '/images/renault-logo.png' },
    { name: 'BMW', logo: '/images/bmw-logo.png' },
    { name: 'Ford', logo: '/images/ford-logo.png' },
    { name: 'Audi', logo: '/images/audi-logo.png' },
    { name: 'Toyota', logo: '/images/toyota-logo.png' },
    { name: 'Daewoo', logo: '/images/daewoo-logo.png' },
    { name: 'Skoda', logo: '/images/skoda-logo.png' },
    { name: 'Nissan', logo: '/images/nissan-logo.png' },
    { name: 'Honda', logo: '/images/honda-logo.png' },
    { name: 'Hyundai', logo: '/images/hyundai-logo.png' },
    { name: 'Mitsubishi', logo: '/images/mitsubishi-logo.png' },
    { name: 'Chevrolet', logo: '/images/chevrolet-logo.png' },
    { name: 'Peugeot', logo: '/images/peugeot-logo.png' }
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, index) => (
            <button 
              key={index}
              className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <span className="text-2xl mb-2">{category.icon}</span>
              <span className="text-sm text-gray-700">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Brand logos */}
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-6 items-center">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
            >
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="w-12 h-12 object-contain mb-2"
              />
              <span className="text-xs text-gray-600 text-center">{brand.name}</span>
            </div>
          ))}
          <button className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <ArrowRight className="w-12 h-12 text-gray-400 mb-2" />
            <span className="text-xs text-gray-600">Всі марки</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandLogos;