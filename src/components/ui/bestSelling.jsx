import { mockStores } from './bundle.js';
import { StarIcon } from "./tools.jsx";
import "../../App.css";
export const BestSellingStore = () => (
  <section className="container mx-auto px-4 py-8 max-w-7xl">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Selling Store</h2>

    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
      {/* Left Block: Ad/Showcase */}
      <div className="w-full md:w-1/3 bg-gray-100 rounded-xl p-6 shadow-xl relative overflow-hidden">
        <div className="text-center py-8">
          <p className="text-xl font-light text-gray-700">Shop by category</p>
          <h3 className="text-3xl font-bold text-gray-900 my-2">BeliBeli Mall</h3>
          <p className="text-sm text-gray-500 max-w-xs mx-auto">Experience exclusive shopping at BeliBeli Mall. Maybe a long sentence here.</p>
        </div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gray-200 rounded-full opacity-50"></div>
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
        <img
          src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT7cE2rhzXLLMXdH_TXaCUt88-pwXuBm0IjDQ3WMebneakx5Alf9ZNtoSnmYQPaTu04hYt2Vn_737CQlke9Xh4ispnQC_fZqqqrghJYVwg9MpUDmqgvZbieKA&usqp=CAc"
          alt="Shopping Bags"
          className="w-full h-auto mt-4 rounded-lg shadow-lg"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x200/D1D5DB/4B5563?text=Bags" }}
        />
      </div>

      {/* Right Block: Store List */}
      <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mockStores.map(store => (
          <div key={store.id} className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 flex flex-col justify-between">
            <div className="flex items-center space-x-3 mb-4">
              <img src={store.img} alt={store.name} className="w-12 h-12 rounded-full object-cover border-2 border-blue-500" />
              <div>
                <h4 className="font-bold text-gray-900">{store.name}</h4>
                <div className="flex items-center text-xs text-gray-500">
                  <StarIcon className="w-3 h-3 text-yellow-400 mr-1" />
                  <span>{store.rating} ({store.followers} Foll.)</span>
                </div>
              </div>
            </div>
            {/* Mock Products from Store */}
            <div className="flex justify-between space-x-2">
              <div className="text-center p-2 bg-gray-50 rounded-lg w-1/3">
                <img className="h-full" src={`https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRUx3lic3FgiLSVTJK6JqEdA5KPhjXp_lcqmgHJZGs9r6u-VZvtz2GduFIFrtNXNc5lTShvOv4BdW7mFnIAvdHa2_QXVQOUEAG-8Z3ziNYlN1u5Y7iRuIt5&usqp=CAc`} />
                <p className="text-xs font-semibold text-gray-700">Rp176,000</p>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded-lg w-1/3">
                <img className="h-full" src={`https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSy3NrB_GdURWJP3a7juishbc8l82gXDPACYHvPn2jUpayXjsrwMEcuMzOReHhXIvnOfC7suCiU3OP51OTFjKOGfWs-78N21Y1L274m-mCC0JqB0bytZ_Dxeg&usqp=CAc`} />
                <p className="text-xs font-semibold text-gray-700">Rp176,000</p>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded-lg w-1/3">
                <img className="h-full" src={`https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZ0sSK6aizts3mw4PeXHgHC1OTuWKdQmDmuQbT9cH3eYWsBc7UJ7n1ssRDKIljok55Bnb4JPbNtyHlfPOxDk7dbEvghFjHzcCiljETKMTdneRi0ogzx2uL&usqp=CAc`} />
                <p className="text-xs font-semibold text-gray-700">Rp176,000</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
