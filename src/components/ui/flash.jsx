import { ClockIcon, ChevronRightIcon } from "./tools.jsx";
import { mockFlashSale } from "./bundle.js";
import { FlashSaleCard } from "./flashsales.jsx";
import { useState, useEffect } from "react";

export const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState(3600 * 3); // 3 hours

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => (prev > 0 ? prev - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return { h, m, s };
  };

  const { h, m, s } = formatTime(timeLeft);

  return (
    <section className="w-full py-8 bg-gray-50">
      <div className="max-w-full sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-3 flex-wrap">
            <h2 className="text-2xl font-bold text-gray-900">Flash Sale</h2>
            <div className="flex items-center space-x-1 text-red-600 font-bold bg-red-100 rounded-full px-3 py-1 text-sm">
              <ClockIcon className="w-4 h-4 mr-1" />
              <span className="bg-gray-900 text-white rounded px-1">{h}</span>
              <span>:</span>
              <span className="bg-gray-900 text-white rounded px-1">{m}</span>
              <span>:</span>
              <span className="bg-gray-900 text-white rounded px-1">{s}</span>
            </div>
          </div>
          <a href="#" className="flex items-center text-blue-600 font-medium hover:text-blue-700 mt-2 sm:mt-0">
            See All <ChevronRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Flash Sale Products - Horizontal Scroll */}
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="flex space-x-4 pb-4">
            {mockFlashSale.map(product => (
              <div key={product.id} className="flex-shrink-0 w-40 sm:w-44 md:w-48">
                <FlashSaleCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};