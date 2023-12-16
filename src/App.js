import React from 'react';
import {  BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/CartWidget/CartWidget';
import { CartProvider } from './Context/CartContext';
import Checkout from './components/CheckOut/CheckOut';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <NavBar/>
      <Routes>
        <Route path='/' Component={ ItemListContainer } />
        <Route path='/category/:categoryId' Component={ ItemListContainer } />
        <Route path='/item/:itemId' Component={ ItemDetailContainer } />
        <Route path='/cart' element={Cart} />
        <Route path='/checkout' element={Checkout} />
        <Route path='*' Component={ <h1> 404 not found </h1> } /> 

      </Routes>
      </CartProvider>
 
      </BrowserRouter>


    </div>
  );
}

export default App;


