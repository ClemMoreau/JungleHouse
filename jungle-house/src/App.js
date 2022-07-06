import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Nav-Bar/Nav-bar';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import logo from './assets/logo.png';
//import cover from './assets/cover.jpeg';

function App() {

  const savedCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem('cart',JSON.stringify(cart))
  }, [cart])

  return (
    <Router>
      <div className="App">
        <div className='container'>
          <header className='Header'>
            <div>
              Jungle House
            </div>
            <img src={logo} alt="jungle-house-logo"/>
          </header>
        </div>
        <NavBar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop cart={cart} updateCart={updateCart}/>}/>
            <Route path='/cart' element={<Cart cart={cart} updateCart={updateCart}/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
