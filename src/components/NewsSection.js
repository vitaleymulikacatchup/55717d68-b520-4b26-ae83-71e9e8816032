import React from 'react';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Новий Toyota Land Cruiser FJ розсекречений! Що нам відомо?',
      date: '25 жовтня 2024',
      image: '/images/news-1.jpg'
    },
    {
      id: 2,
      title: 'Автомобіль тижня: оновлений Honda HR-V',
      date: '24 жовтня 2024',
      image: '/images/news-2.jpg'
    },
    {
      id: 3,
      title: 'Як покращити на дорозі в туман?',
      date: '23 жовтня 2024',
      image: '/images/news-3.jpg'
    }
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">AUTO.RIA рекомендує</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <article key={item.id} className="card hover:shadow-md transition-shadow">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Service sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Можливості розміщення</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-auto-blue">Підняття авто в пошуку</a></li>
              <li><a href="#" className="hover:text-auto-blue">Авто на ТОП до -45%</a></li>
              <li><a href="#" className="hover:text-auto-blue">Авто на головній до -40%</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Пошук автомобіля</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-auto-blue">Пошук серед авто</a></li>
              <li><a href="#" className="hover:text-auto-blue">Пошук для покупки</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Автомобільні компанії</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-auto-blue">Автосалони України</a></li>
              <li><a href="#" className="hover:text-auto-blue">Автосервіси компанії авто</a></li>
              <li><a href="#" className="hover:text-auto-blue">Авто під замовлення в кредит</a></li>
            </ul>
          </div>
        </div>

        {/* Additional sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Товари для авто</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-auto-blue">Нові і бу запчастини</a></li>
              <li><a href="#" className="hover:text-auto-blue">Шини та диски</a></li>
              <li><a href="#" className="hover:text-auto-blue">Гараж для Всіх України</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Перед купівлею авто</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-auto-blue">Вигідні кредитні авто</a></li>
              <li><a href="#" className="hover:text-auto-blue">Перевірити авто на AUTO.RIA</a></li>
              <li><a href="#" className="hover:text-auto-blue">Офіційні тести і ПДР України</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Автомобільні послуги</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-auto-blue">Мийний автосервіс</a></li>
              <li><a href="#" className="hover:text-auto-blue">Калькулятор розрахунок авто</a></li>
              <li><a href="#" className="hover:text-auto-blue">СТО</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;