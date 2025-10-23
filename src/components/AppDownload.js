import React from 'react';

const AppDownload = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AUTO.RIA
          </h2>
          <h3 className="text-xl text-gray-700 mb-2">
            у вашому смартфоні
          </h3>
          <p className="text-gray-600 mb-8">
            Все для купівлі та продажу авто
            в додатку AUTO.RIA
          </p>
          
          {/* App store buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <img 
              src="/images/app-store.png" 
              alt="Download on App Store" 
              className="h-12 cursor-pointer hover:opacity-80"
            />
            <img 
              src="/images/google-play.png" 
              alt="Get it on Google Play" 
              className="h-12 cursor-pointer hover:opacity-80"
            />
            <img 
              src="/images/app-gallery.png" 
              alt="Explore it on AppGallery" 
              className="h-12 cursor-pointer hover:opacity-80"
            />
          </div>
        </div>

        {/* Social media */}
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-4">
            Приєднуйтесь до спільноти автолюбителів AUTO.RIA
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-800">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="text-red-600 hover:text-red-800">
              <Youtube className="w-8 h-8" />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <Send className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Contact form */}
        <div className="max-w-md mx-auto">
          <div className="flex">
            <input 
              type="email" 
              placeholder="Написати нам" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-auto-blue"
            />
            <button className="bg-auto-blue text-white px-6 py-3 rounded-r-lg hover:bg-blue-600">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Additional links */}
        <div className="mt-8 text-center">
          <div className="flex justify-center space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-auto-blue">Безпечні угоди</a>
            <a href="#" className="hover:text-auto-blue">Угода про надання послуг</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;