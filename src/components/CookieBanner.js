import React from 'react';
import { X } from 'lucide-react';

const CookieBanner = ({ onClose }) => {
  return (
    <div className="cookie-banner">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-700">
            <strong>AUTO.RIA безпечний для вас</strong>
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Ми використовуємо{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800">
              cookie-файли
            </a>
            . Ознайомитись з{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Політикою використання файлів cookies
            </a>
          </p>
        </div>
        
        <div className="flex items-center space-x-4 ml-4">
          <button className="btn-secondary text-sm">
            Розумію і дозволяю
          </button>
          <button className="btn-outline text-sm">
            Налаштувати
          </button>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;