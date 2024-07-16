import React from 'react';
import { CartProvider } from './context/cartContext';
import Header from './component/Header';
import Home from './pages/Home';
import Cart from './component/Cart';
function App() {
  return (
    <>
     {/* <h1>Hello</h1>  */}
        { <CartProvider>
        <Header />
        <Home />
        <Cart />
      </CartProvider> } 
    </>
  );
}


