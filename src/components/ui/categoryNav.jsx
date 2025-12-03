import { mockCategories } from "./bundle.js";

export const CategoryNav = () => (
  <div className="bg-white py-4 shadow-sm border-b border-gray-100">
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="flex overflow-x-auto whitespace-nowrap space-x-4 sm:space-x-6 pb-2 scrollbar-hide">
        {mockCategories.map((cat, index) => (
          <a
            key={index}
            href="#"
            className="flex flex-col items-center justify-center p-2 rounded-xl hover:bg-gray-50 transition flex-shrink-0 w-16 sm:w-20 md:w-24"
          >
            <div className="text-2xl sm:text-3xl mb-1">{cat.icon}</div>
            <span className="text-[10px] sm:text-xs font-medium text-gray-700">{cat.name}</span>
          </a>
        ))}
      </div>
    </div>
  </div>
);