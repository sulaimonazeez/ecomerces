import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/cartContext.jsx";

// CartDrawer.jsx
// Highly-responsive dark "galaxy" themed cart drawer with smooth animations.
// - Uses TailwindCSS + Framer Motion + lucide-react
// - Reads initial cart from useCart() and keeps local quantity state
// - If your CartContext exposes updateQuantity, this component will call it (optional)

export default function CartDrawer({ open, onClose }) {
  const { cart = [], addToCart, removeFromCart, updateQuantity } = useCart() || {};
  const [localItems, setLocalItems] = useState([]);

  // sync localItems from context cart (keeps quantities in local state)
  useEffect(() => {
    const initialized = cart.map(item => ({ ...item, quantity: item.quantity ?? 1 }));
    setLocalItems(initialized);
  }, [cart]);

  // helpers
  const setQty = (id, qty) => {
    setLocalItems(prev => prev.map(it => it.id === id ? { ...it, quantity: qty } : it));
    // If context exposes an updater, call it so global cart stays in sync
    if (typeof updateQuantity === 'function') {
      updateQuantity(id, qty);
    }
  };

  const increment = (id) => {
    const item = localItems.find(i => i.id === id);
    if (!item) return;
    const next = item.quantity + 1;
    setQty(id, next);
  };

  const decrement = (id) => {
    const item = localItems.find(i => i.id === id);
    if (!item) return;
    const next = Math.max(0, item.quantity - 1);
    if (next === 0) {
      // remove visually and from context
      setLocalItems(prev => prev.filter(i => i.id !== id));
      if (typeof removeFromCart === 'function') removeFromCart(id);
      return;
    }
    setQty(id, next);
  };

  const handleRemove = (id) => {
    setLocalItems(prev => prev.filter(i => i.id !== id));
    if (typeof removeFromCart === 'function') removeFromCart(id);
  };

  const subtotal = localItems.reduce((s, it) => s + (Number(it.price || 0) * (it.quantity || 1)), 0);
  const shipping = subtotal > 0 ? 30000 : 0; // demo
  const total = subtotal + shipping;

  const drawer = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 260, damping: 30 } },
    exit: { x: '100%', transition: { ease: 'easeInOut' } }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50">
          {/* backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.aside
            className="absolute right-0 top-0 h-full w-full sm:w-[480px] md:w-[560px] lg:w-[640px] overflow-y-auto bg-gradient-to-b from-[#07040f] via-[#0b1227] to-[#061226] text-white shadow-2xl"
            variants={drawer}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
          >
            {/* galaxy header */}
            <div className="relative px-5 pt-6 pb-4 border-b border-white/10">
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="stars" aria-hidden />
              </div>

              <div className="flex items-center justify-between relative">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 flex items-center justify-center shadow-lg">
                    <ShoppingCart className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold">Your Cart</h3>
                    <p className="text-sm text-white/60">{localItems.length} item{localItems.length !== 1 ? 's' : ''}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button onClick={() => { setLocalItems([]); if (typeof removeFromCart === 'function') { localItems.forEach(i => removeFromCart(i.id)); } }} className="text-sm text-white/70 hover:text-white/90 px-3 py-1 rounded-md bg-white/5">Clear</button>
                  <button onClick={onClose} aria-label="Close cart" className="p-2 rounded-md bg-white/5 hover:bg-white/10">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Items list */}
            <div className="px-5 py-6 space-y-4">
              {localItems.length === 0 ? (
                <div className="text-center py-20">
                  <h4 className="text-lg font-semibold">Your cart is empty</h4>
                  <p className="text-sm text-white/60 mt-2">Add items to your cart to see them here.</p>
                </div>
              ) : (
                <ul className="flex flex-col divide-y divide-white/5">
                  {localItems.map(item => (
                    <li key={item.id} className="py-4 flex gap-4 items-start">
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-white/5 flex-shrink-0">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h5 className="font-semibold truncate">{item.name}</h5>
                            <p className="text-sm text-white/60 truncate max-w-[220px]">{item.subtitle ?? ''}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold">Rp{(item.price || 0).toLocaleString('id-ID')}</div>
                            <div className="text-xs text-white/60">{item.unit ?? 'each'}</div>
                          </div>
                        </div>

                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <button onClick={() => decrement(item.id)} className="p-1 rounded-md bg-white/6 hover:bg-white/10">
                              <Minus className="w-4 h-4" />
                            </button>
                            <div className="px-3 py-1 rounded-md bg-white/4 min-w-[44px] text-center">{item.quantity}</div>
                            <button onClick={() => increment(item.id)} className="p-1 rounded-md bg-white/6 hover:bg-white/10">
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="flex items-center space-x-2">
                            <button onClick={() => handleRemove(item.id)} className="p-2 rounded-md bg-red-600/20 hover:bg-red-600/30">
                              <Trash2 className="w-4 h-4 text-red-400" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer totals and checkout */}
            <div className="px-5 py-6 border-t border-white/6 bg-gradient-to-t from-transparent to-white/2">
              <div className="flex justify-between text-sm text-white/70 mb-2">
                <span>Subtotal</span>
                <span>Rp{subtotal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-sm text-white/70 mb-4">
                <span>Shipping</span>
                <span>Rp{shipping.toLocaleString('id-ID')}</span>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-sm text-white/70">Total</div>
                  <div className="text-2xl font-extrabold">Rp{total.toLocaleString('id-ID')}</div>
                </div>
                <div className="ml-4">
                  <button className="px-5 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 shadow-lg hover:scale-[1.02] transform transition">Checkout</button>
                </div>
              </div>

              <div className="text-center text-xs text-white/50">Secure Checkout • 30-day returns</div>
            </div>

            {/* galaxy stars style (small) */}
            <style>{`
              .stars::before{
                content: '';
                position: absolute;
                inset: 0;
                background-image: radial-gradient(#ffffff20 1px, transparent 1px), radial-gradient(#ffffff10 1px, transparent 1px);
                background-size: 120px 120px, 40px 40px;
                background-position: 0 0, 20px 40px;
                opacity: 0.08;
                mix-blend-mode: screen;
                transform: translateZ(0);
                pointer-events: none;
              }
            `}</style>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
