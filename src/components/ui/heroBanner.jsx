import { Tag } from 'lucide-react';

export const HeroBanner = () => (
  <div className="bg-gray-100 py-6">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
      <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center overflow-hidden">
        
        {/* Text Content */}
        <div className="p-6 md:p-10 w-full md:w-1/2 flex flex-col justify-center">
          <div className="flex items-center text-red-500 font-semibold mb-2">
            <Tag className="w-5 h-5 mr-1" />
            <span>FLASH PROMO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Limited Time Offer!
            <br />
            Up to 50% OFF!
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">Redefine Your Everyday Style</p>
          <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02] w-full sm:w-auto text-sm sm:text-base">
            Shop Now
          </button>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 h-64 md:h-auto flex-shrink-0">
          <img
            src="https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/966151s.jpg?im=Resize,width=750"
            alt="Clothing Collection"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
);