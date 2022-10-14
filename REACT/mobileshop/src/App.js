import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter,
         Routes,
         Route } from "react-router-dom";

import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Default  from './components/Default';

const Details = lazy(() => import('./components/Details'));
const Cart = lazy(() => import('./components/Cart'));


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Cart />
            </Suspense>
          } />
          <Route path="/details/:id" element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Details />
            </Suspense>
          } />
          <Route path="/" element={<ProductList />} />
          <Route path="*" element={<Default />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
