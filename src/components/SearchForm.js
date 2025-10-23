import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchForm = () => {
  const [activeTab, setActiveTab] = useState('Легкові');
  const tabs = ['Легкові', 'Мото', 'Під заказ'];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs */}
        <div className="filter-tabs">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`filter-tab ${
                  activeTab === tab ? 'active' : ''
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Search form */}
        <div className="bg-white p-6 rounded-b-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Марка
              </label>
              <select className="select-field">
                <option>Марка</option>
                <option>BMW</option>
                <option>Mercedes</option>
                <option>Audi</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Модель
              </label>
              <select className="select-field">
                <option>Модель</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Рік випуску
              </label>
              <select className="select-field">
                <option>Рік випуску</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ціна, $
              </label>
              <input 
                type="text" 
                placeholder="Ціна, $" 
                className="input-field"
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-end">
            <button className="btn-outline">
              Розширений пошук
            </button>
            
            <button className="btn-secondary flex items-center justify-center flex-1 sm:flex-none">
              <Search className="w-4 h-4 mr-2" />
              Пошук
            </button>
            
            <button className="btn-secondary">
              Перевірити VIN
            </button>
          </div>
        </div>

        {/* Honda banner */}
        <div className="mt-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">HONDA HR-V</h3>
            <p className="text-sm opacity-90">Стильний та надійний</p>
            <button className="mt-3 bg-white text-blue-600 px-4 py-2 rounded font-medium hover:bg-gray-100">
              Переглянути
            </button>
          </div>
          <div className="hidden md:block">
            <img 
              src="/images/honda-hrv.png" 
              alt="Honda HR-V" 
              className="h-24 object-contain"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-6 bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">МЕРИ ДЛЯ ДРАЙВУ,</h3>
              <h3 className="text-xl font-bold mb-4">АВТО - ДЛЯ ЗСУ</h3>
              <div className="text-sm">
                <span className="font-bold">300 000+</span> авто з усієї України • 
                <span className="font-bold">за годину +595</span> • 
                <span className="font-bold">перевірено по VIN-коду +269 121</span>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/images/military-car.png" 
                alt="Military support" 
                className="h-24 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Filter tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {['100-150 тис грн', '150-200 тис грн', 'Гібрид', 'до 3000$', 'Універсали', '>200 тис км'].map((tag) => (
            <button 
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchForm;