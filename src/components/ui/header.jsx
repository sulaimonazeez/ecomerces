import {
  SearchIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from "./tools.jsx";
import { useCart } from "../../context/cartContext.jsx";
import CartDrawer from "./cartdetail.jsx";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = ({verify}) => {
  const [open, setOpen] = useState(false);
  const { cart} = useCart();
  const navigate = useNavigate();
  return(
  <>
  <header className="bg-white shadow-md sticky top-0 z-10">
    <div className="container mx-auto px-4 py-3 max-w-7xl">
      
      {/* Top Nav */}
      <div className="flex justify-between items-center mb-3 text-sm text-gray-600 flex-wrap">
        <div className="flex space-x-4 flex-wrap">
          <a href="#" className="hover:text-blue-500">Buka Bantuan</a>
          <a href="#" className="hover:text-blue-500 hidden sm:inline">Belanja Sehat</a>
        </div>
        <div className="flex space-x-4 flex-wrap">
          <a href="#" className="hover:text-blue-500 hidden md:inline">Corporate</a>
          <a href="#" className="hover:text-blue-500">Promos</a>
          <Link to={verify ? "/profile" : "Sign Up"} className="hover:text-blue-500">{verify ? "Profile" : "Sign Up"}</Link>
          <Link to={verify ? "/logout" : "/login"} className="hover:text-blue-500 font-semibold text-gray-800">{verify ? "Logout" : "Login"}</Link>
        </div>
      </div>

      {/* Main Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <a href="#" className="text-2xl font-extrabold text-blue-600 tracking-tight flex-shrink-0">BeliBeli.com</a>

          {/* Search bar */}
          <div className="relative flex-1 lg:flex-none lg:w-96 items-center border border-gray-300 rounded-full p-2 bg-gray-50 hidden lg:flex">
            <SearchIcon className="w-5 h-5 text-gray-400 ml-2" />
            <input
              type="text"
              placeholder="Search product, brand, category..."
              className="w-full bg-transparent outline-none pl-3 text-sm"
            />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto justify-end">
          <button className="p-2 text-gray-600 hover:text-blue-600 lg:hidden flex-shrink-0">
            <SearchIcon className="w-6 h-6" />
          </button>
          <button className="p-2 text-gray-600 hover:text-red-500 relative flex-shrink-0">
            <HeartIcon className="w-6 h-6" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          <button onClick={()=>setOpen(true)} className="p-2 text-gray-600 hover:text-blue-600 relative flex-shrink-0">
            <ShoppingCartIcon className="w-6 h-6" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-blue-500 rounded-full border border-white">{cart.length}</span>
          </button>
          <button onClick={()=> navigate('/profile')} className="p-2 flex items-center space-x-2 text-gray-600 hover:text-blue-600 border border-gray-200 rounded-full pl-3 pr-4 flex-shrink-0">
            <UserIcon className="w-6 h-6" />
            <span className="hidden sm:inline text-sm font-medium">Account</span>
          </button>
        </div>
      </div>
    </div>
  </header>
  <CartDrawer open={open} onClose={()=>setOpen(false)}/>
  </>
  )
}