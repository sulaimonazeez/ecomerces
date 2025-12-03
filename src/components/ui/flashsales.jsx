import { useNavigate } from "react-router-dom";

export const FlashSaleCard = ({ product }) => {
  const navigate = useNavigate();
  const soldPercent = Math.min(100, (product.sold / product.total) * 100);

  return (
    <div className="bg-white rounded-xl shadow-md p-3 w-40 sm:w-44 md:w-48 flex-shrink-0 border border-gray-100" onClick={()=>navigate(`/product/${product.id}`)}>
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-32 object-cover rounded-lg mb-2"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/D1D5DB/4B5563?text=Sale+Item" }}
      />
      <h4 className="text-xs font-semibold text-gray-800 h-8 line-clamp-2">{product.name}</h4>
      <div className="my-1">
        <p className="text-sm font-bold text-red-500">Rp{product.salePrice.toLocaleString('id-ID')}</p>
        <p className="text-xs text-gray-400 line-through">Rp{product.price.toLocaleString('id-ID')}</p>
      </div>
      <div className="relative mt-2 h-2 bg-pink-100 rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-red-500 rounded-full"
          style={{ width: `${soldPercent}%` }}
        ></div>
        <p className="absolute inset-0 flex items-center justify-center text-[10px] text-white font-bold">
          {Math.min(product.sold, product.total)} Sold
        </p>
      </div>
    </div>
  );
};