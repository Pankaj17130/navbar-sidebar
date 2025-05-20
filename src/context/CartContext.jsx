import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

const validateProduct = (product) => {
  if (!product) throw new Error('Product is required');
  if (!product.id) throw new Error('Product must have an ID');
  if (!product.name) throw new Error('Product must have a name');
  
  return {
    id: product.id,
    name: product.name,
    price: Number(product.price) || 0,
    images: product.images?.length ? product.images : ['/assets/placeholder-image.jpg'],
    quantity: 1,
    ...product
  };
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback((product) => {
    try {
      const validatedProduct = validateProduct(product);
      
      setCartItems(prev => (
        prev.some(item => item.id === validatedProduct.id)
          ? prev.map(item => 
              item.id === validatedProduct.id 
              ? { ...item, quantity: item.quantity + 1 } 
              : item
            )
          : [...prev, validatedProduct]
      ));
    } catch (error) {
      console.error('Cart Error:', error.message);
    }
  }, []);

  const updateQuantity = useCallback((id, newQuantity) => {
    const quantity = Math.max(1, Math.floor(newQuantity));
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  }, []);

  const removeItem = useCallback((id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const cartTotal = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  );

  const contextValue = {
    cartItems,
    cartTotal,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};






  
