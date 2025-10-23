import React, { useState } from 'react';
import { Menu, X, ChevronDown, Heart, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top bar */}
      <div className="bg-gray-100 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>RIA.com</span>
            <span>Автомобілі</span>
            <span>Нерухомість</span>
            <span>Автозапчастини</span>
            <div className="flex items-center space-x-1">
              <img src="/images/ukraine-flag.png" alt="UA" className="w-4 h-3" />
              <span>Збір на авто для ЗСУ</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Heart className="w-4 h-4" />
            <span>0</span>
            <User className="w-4 h-4" />
            <span>Увійти в кабінет</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="brand-logo">
            <span className="auto-text">auto</span>
            <span className="ria-text">RIA</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-auto-blue">Вживані авто</a>
            <a href="#" className="text-gray-700 hover:text-auto-blue">Нові авто</a>
            <a href="#" className="text-gray-700 hover:text-auto-blue">Новини</a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-auto-blue">
                Все для авто
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>
          </nav>

          {/* Sell button */}
          <button className="btn-primary flex items-center">
            <span className="text-xl mr-2">+</span>
            Продати авто
          </button>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700">Вживані авто</a>
              <a href="#" className="text-gray-700">Нові авто</a>
              <a href="#" className="text-gray-700">Новини</a>
              <a href="#" className="text-gray-700">Все для авто</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;