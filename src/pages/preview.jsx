import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { mockFlashSale } from "../components/ui/bundle.js"; 
import { useCart } from "../context/cartContext.jsx";
import { ShoppingCart } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Convert id to number and find product
  const product = mockFlashSale.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center text-white p-10">
        <h1 className="text-2xl font-bold">Product not found 😞</h1>
      </div>
    );
  }

  // Support 1 or many images
  const image = product.image && product.image.length > 0
    ? product.image
    : [product.image];

  const [preview, setPreview] = useState(image[0]);

  return (
    <div className="w-full min-h-screen bg-gray-950 text-white p-4 md:p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT: Preview */}
        <div>
          <div className="rounded-2xl overflow-hidden shadow-xl bg-black">
            <img 
              src={product.img}
              alt={product.name}
              className="w-full h-[380px] object-cover transition duration-300"
            />
          </div>

          <div className="flex gap-3 mt-4 overflow-x-auto">
            {image.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setPreview(img)}
                className={`h-20 w-20 object-cover rounded-xl cursor-pointer border 
                  ${preview === img ? "border-purple-500" : "border-gray-700"}
                `}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-purple-400 mt-3 text-xl">₦{product.price}</p>

            <p className="mt-5 text-gray-300 leading-relaxed">
              {product.description || "No description available."}
            </p>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="
              mt-10 flex items-center justify-center gap-3 
              bg-purple-600 hover:bg-purple-700
              px-6 py-3 rounded-xl shadow-lg
              text-lg font-semibold transition
            "
          >
            <ShoppingCart size={20} />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;