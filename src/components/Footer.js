import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Send } from 'lucide-react';

const Footer = () => {
  const carBrands = [
    { name: 'Вживані авто', count: '1 234' },
    { name: 'Нові авто', count: '567' },
    { name: 'Все для автомобілістів', count: '890' },
    { name: 'Новини', count: '123' },
    { name: 'Тест', count: '456' },
    { name: 'Відгуки', count: '789' }
  ];

  const footerSections = [
    {
      title: 'Вживані авто',
      links: [
        'Автосалони',
        'Електромобілі',
        'Пригнані авто',
        'Неоригінальні авто',
        'GARAGE AUTO.RIA'
      ]
    },
    {
      title: 'Нові авто',
      links: [
        'Автосалони',
        'Мотосалони',
        'Спецтехніка',
        'Нові Електромобілі',
        'Автоцентр AUTO.RIA'
      ]
    },
    {
      title: 'Новини',
      links: [
        'Тест-драйви',
        'Електромобілі',
        'Розмитнення',
        'Онлайн-журнал',
        'Як підготувати авто до зими'
      ]
    },
    {
      title: 'Відгуки про авто',
      links: [
        'Авто Лідер',
        'RIA.com для бізнесу',
        'RIA.com Marketplaces',
        'API для розробника',
        'Вікіпедія про AUTO.RIA'
      ]
    },
    {
      title: 'Сільгосптехніка',
      links: [
        'Нова',
        'Вживана',
        'Оренда',
        'Послуги'
      ]
    },
    {
      title: 'Всі послуги для авто',
      links: [
        'СТО',
        'Калькулятор розмитнення',
        'Порівняльні авто',
        'Цінні та платні',
        'Фінансування авто'
      ]
    },
    {
      title: 'Сервіси',
      links: [
        'Калькулятор розмитнення',
        'Порівняльні авто',
        'Цінні та платні',
        'Фінансування авто'
      ]
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerSections.slice(0, 4).map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-sm text-gray-600 hover:text-auto-blue">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Car catalog */}
        <div className="mb-8">
          <h3 className="font-bold text-gray-900 mb-4">Каталог автомобілів</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
            {carBrands.map((brand, index) => (
              <div key={index} className="flex justify-between">
                <a href="#" className="text-gray-600 hover:text-auto-blue">
                  {brand.name}
                </a>
                <span className="text-gray-400">{brand.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="brand-logo mb-2">
                <span className="auto-text">auto</span>
                <span className="ria-text">RIA</span>
                <span className="ml-2 text-sm text-gray-600">
                  ЗНАЄМО, ВСЕ ПЕРЕЖИВИ
                </span>
              </div>
              <p className="text-xs text-gray-500">
                © 2024 RIA.com
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;