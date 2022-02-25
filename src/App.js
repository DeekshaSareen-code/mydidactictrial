
import './App.css';
import Home from './pages/home';
import Header from './bars/header';
import About from "./pages/about";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Paintings from './pages/paintings';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/paintings' element={<Paintings />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
