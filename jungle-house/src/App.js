import './App.css';
import NavBar from './components/Nav-Bar/Nav-bar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <Router>
      <div className="App">
        <header className='Header'>
          Jungle House
        </header>
        <NavBar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
