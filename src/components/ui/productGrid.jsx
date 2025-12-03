import { mockProducts } from "./bundle.js";
import { ProductCard } from "./productCard.jsx";
import { useState } from "react";

export const ProductGridSection = () => {
  const [activeTab, setActiveTab] = useState("Best Seller");

  const tabs = [
    "Best Seller",
    "Crop Style",
    "Special Discount",
    "Official Store",
    "Curated Product",
  ];

  const filteredProducts = mockProducts.filter((_, index) => {
    if (activeTab === "Best Seller") return index < 8;
    if (activeTab === "Crop Style") return index % 2 === 0;
    if (activeTab === "Special Discount") return index % 3 === 0;
    return true;
  });

  return (
    <section className="bg-gray-50 py-8 w-full">
      <div className="max-w-full sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Today's for You!
        </h2>

        {/* Tabs */}
        <div className="flex overflow-x-auto space-x-2 border-b border-gray-200 mb-6 pb-2 -mx-4 sm:mx-0 px-4 sm:px-0 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-3 text-sm font-semibold transition flex-shrink-0 ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products */}
        {/* Mobile: horizontal scroll; Tablet+: grid layout */}
        <div className="sm:hidden flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-40">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-8">
          <button className="px-8 py-3 border border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition duration-200">
            See More Products
          </button>
        </div>
      </div>
    </section>
  );
};