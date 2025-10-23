import React from 'react';
import { Heart, ArrowLeft, ArrowRight } from 'lucide-react';

const CarListings = () => {
  const cars = [
    {
      id: 1,
      image: '/images/bmw-3-series.jpg',
      title: 'BMW 3 Series 2001',
      price: '8 200 $',
      mileage: '223 тис. км',
      location: 'Чернівці',
      isNew: false
    },
    {
      id: 2,
      image: '/images/mazda-cx5.jpg',
      title: 'Mazda CX-5 2025',
      price: '31 000 $',
      mileage: '4 тис. км',
      location: '',
      isNew: true
    },
    {
      id: 3,
      image: '/images/audi-a4.jpg',
      title: 'Audi A4 2009',
      price: '10 700 $',
      mileage: '230 тис. км',
      location: '',
      isNew: false
    },
    {
      id: 4,
      image: '/images/fiat-ducato.jpg',
      title: 'Fiat Ducato груз. 2024',
      price: '31 962 $',
      mileage: '',
      location: '',
      isNew: true
    },
    {
      id: 5,
      image: '/images/hyundai-grandeur.jpg',
      title: 'Hyundai Grandeur 2019',
      price: '11 900 $',
      mileage: '115 тис. км',
      location: '',
      isNew: false
    }
  ];

  const featuredCars = [
    {
      id: 1,
      image: '/images/mazda-323.jpg',
      title: 'Mazda 323 1996',
      price: '850 $',
      mileage: '330 тис. км'
    },
    {
      id: 2,
      image: '/images/volkswagen-passat.jpg',
      title: 'Volkswagen Passat 2016',
      price: '11 900 $',
      mileage: '311 тис. км'
    },
    {
      id: 3,
      image: '/images/audi-a6.jpg',
      title: 'Audi A6 2004',
      price: '4 600 $',
      mileage: '450 тис. км'
    },
    {
      id: 4,
      image: '/images/subaru-legacy.jpg',
      title: 'Subaru Legacy 2005',
      price: '4 750 $',
      mileage: '340 тис. км'
    }
  ];

  const CarCard = ({ car, featured = false }) => (
    <div className={`card car-card ${featured ? 'w-48' : 'w-full'}`}>
      <div className="relative">
        <img 
          src={car.image} 
          alt={car.title}
          className={`w-full ${featured ? 'h-32' : 'h-48'} object-cover`}
        />
        {car.isNew && (
          <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 text-xs rounded">
            Новий
          </span>
        )}
        <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm hover:bg-gray-50">
          <Heart className="w-4 h-4 text-gray-400" />
        </button>
      </div>
      <div className="p-4">
        <h3 className={`font-medium text-gray-900 mb-2 ${featured ? 'text-sm' : 'text-base'}`}>
          {car.title}
        </h3>
        <div className={`price-green mb-1 ${featured ? 'text-sm' : 'text-lg'}`}>
          {car.price}
        </div>
        {car.mileage && (
          <div className={`text-gray-600 ${featured ? 'text-xs' : 'text-sm'}`}>
            {car.mileage}
          </div>
        )}
        {car.location && (
          <div className={`text-gray-500 ${featured ? 'text-xs' : 'text-sm'}`}>
            {car.location}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Main car listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-center space-x-4 mb-8">
        <button className="p-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button className="p-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Featured section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">
            <span className="bg-red-500 text-white px-2 py-1 rounded text-sm mr-2">NEW!</span>
            Переглядайте авто онлайн
          </h2>
          <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
            Як це працює →
          </a>
        </div>
        
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} featured={true} />
          ))}
        </div>
      </div>

      {/* Service buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { title: 'Автоперевірка', color: 'bg-blue-500' },
          { title: 'Автострахування', color: 'bg-green-500' },
          { title: 'Автокредитування', color: 'bg-purple-500' },
          { title: 'Автосервіс', color: 'bg-orange-500' }
        ].map((service, index) => (
          <button 
            key={index}
            className={`${service.color} text-white p-4 rounded-lg hover:opacity-90 transition-opacity`}
          >
            {service.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarListings;