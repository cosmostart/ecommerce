import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/organisms/Header';
import Home from './components/pages/Home';
import Footer from './components/organisms/Footer';
import CategoryProducts from './components/pages/CategoryProducts';
import ProductDetail from './components/pages/ProductDetail';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';
import Checkout from './components/pages/Checkout';
import { CartContext } from './Context';
import { useState } from 'react';
import MakeOrder from './components/pages/MakeOrder';
import SearchProducts from './components/pages/SearchProducts';
import NotFound from './components/pages/NotFound';

const checkCart = localStorage.getItem('cartData');

function App() {
  const [cartData, setCartData] = useState(JSON.parse(checkCart));
  return (
    <CartContext.Provider value={{cartData, setCartData}}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:category_slug/:category_id' element={<CategoryProducts/>}/>
        <Route path='/product/:product_slug/:product_id' element={<ProductDetail/>}/>
        <Route path='/customer/register' element={<Register/>}/>
        <Route path='/customer/login' element={<Login/>}/>
        <Route path='/customer/logout' element={<Logout/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/make-order' element={<MakeOrder/>}/>
        <Route path='/search/:searchstring' element={<SearchProducts/>}/>
        <Route path='/search/' element={<SearchProducts/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </CartContext.Provider>
  );
}

export default App;
