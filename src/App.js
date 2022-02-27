
import './App.css';
import Home from './pages/home';
import Header from './bars/header';
import About from "./pages/about";
import Aboutme from './pages/aboutme';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Paintings from './pages/paintings';
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        
        <Route path="about">
          <Route path="/about/aboutme" element={<Aboutme />}> </Route>
          <Route path = "/about/contact" element={<Contact></Contact>}> </Route>
          <Route index element={<About/>}> </Route>
        </Route>
        <Route path='/paintings' element={<Paintings />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
