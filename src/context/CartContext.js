import React, { createContext, useContext, useState, useEffect } from 'react';
	
	const CartContext = createContext();
	
	export const useCart = () => useContext(CartContext);	
	export const CartProvider = ({ children }) => {
	  const [items, setItems] = useState(() => {
	    try {
      const raw = localStorage.getItem('cart');
	      return raw ? JSON.parse(raw) : [];
	    } catch {
      return [];
	    }
  });

	  useEffect(() => {
	    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product) => {
	    setItems(prev => {
      const found = prev.find(i => i.id === product.id);
	      if (found) {
	        return prev.map(i => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [{ id: product.id, name: product.name, price: product.price, qty: 1, image: product.image }, ...prev];
    });
	  };
	
 const changeQty = (id, delta) => {
	    setItems(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
	  };
	
	  const removeFromCart = (id) => setItems(prev => prev.filter(i => i.id !== id));
	
	  const clearCart = () => setItems([]);
	
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
	
	  const placeOrder = () => {
	    // Здесь можно отправлять запрос на сервер
	    const orderId = 'ORD-' + Date.now();
	    clearCart();
	    return orderId;
	  };
	
	  return (
	    <CartContext.Provider value={{ items, addToCart, changeQty, removeFromCart, clearCart, total, placeOrder }}>
	      {children}
	    </CartContext.Provider>
	  );
	};
	
	export default CartContext;
