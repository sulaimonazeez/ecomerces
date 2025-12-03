import React, { useState, useEffect, useCallback } from 'react';
import { ShoppingCart, Heart, User, Search, ChevronRight, Clock, Star, MapPin, Tag, List } from 'lucide-react';
import { HeroBanner } from "../components/ui/heroBanner.jsx";
import {SearchIcon, HeartIcon, ShoppingCartIcon, UserIcon, StarIcon, ClockIcon, ChevronRightIcon } from "../components/ui/tools.jsx";
import { Header } from "../components/ui/header.jsx";
import { FlashSaleCard } from "../components/ui/flashsales.jsx";
import "../App.css";
import { CategoryNav } from "../components/ui/categoryNav.jsx";
import {mockStores, mockProducts, mockFlashSale, mockCategories } from "../components/ui/bundle.js";
import { ProductCard } from "../components/ui/productCard.jsx";
import { StarRating } from "../components/ui/startRating.jsx";
import { ProductGridSection } from "../components/ui/productGrid.jsx";
import { BestSellingStore } from "../components/ui/bestSelling.jsx";
import { FlashSale } from "../components/ui/flash.jsx";
import { Footer } from "../components/ui/footer.jsx";
import { useContext} from "react";
import { AuthContext } from "../context/authContext.jsx";


const ScrollbarHideStyle = `
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
`;


const AuthUser = () => {
  const { token } = useContext(AuthContext);
  const [logged, setLogged] = useState(true);
  return (
    <div className="font-sans min-h-screen bg-white overflow-x-hidden">
      <style>{ScrollbarHideStyle}</style>
      <Header verify={logged}/>
      <HeroBanner />
      <CategoryNav />
      <FlashSale />
      <ProductGridSection />
      <BestSellingStore />
      <Footer />
    </div>
  );
}

export default AuthUser;