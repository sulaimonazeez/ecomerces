import { HeartIcon } from "./tools.jsx";
import { StarRating } from "./startRating.jsx";
import { useCart } from "../../context/cartContext.jsx";

export const ProductCard = ({ product }) => {
  const { cart, addToCart } = useCart();

  // Check if this product is already added
  const isAdded = cart.some(item => item.id === product.id);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition duration-300 hover:shadow-xl w-full sm:w-60 md:w-64">
      <div className="relative">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-48 sm:h-52 md:h-56 object-cover"
          onError={(e) => { 
            e.target.onerror = null; 
            e.target.src = "https://placehold.co/200x200/D1D5DB/4B5563?text=Image+Error"; 
          }}
        />
        <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md text-gray-400 hover:text-red-500 active:text-red-500 focus:outline-none">
          <HeartIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="p-3 flex flex-col justify-between h-52 sm:h-56 md:h-60">
        <div>
          <p className="text-xs text-gray-500 mb-1 line-clamp-1">Product Description</p>
          <h3 className="text-sm font-semibold text-gray-800 h-10 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center my-2">
            <StarRating rating={product.rating} />
            <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
          </div>
        </div>

        <div className="flex justify-between items-end mt-2">
          <div>
            {product.salePrice && (
              <p className="text-xs text-red-500 font-bold mb-0.5">
                Rp{product.salePrice.toLocaleString("id-ID")}
              </p>
            )}
            <p className={`${product.salePrice ? "text-sm font-bold text-gray-800" : "text-base font-bold text-gray-800"}`}>
              Rp{product.price.toLocaleString("id-ID")}
            </p>
          </div>

          <button
            onClick={() => !isAdded && addToCart(product)}
            className={`text-xs font-medium px-2 py-1 rounded-full transition
              ${isAdded 
                ? "bg-green-100 text-green-600 cursor-default" 
                : "bg-blue-50 text-blue-500 hover:bg-blue-100"}`}
          >
            {isAdded ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};