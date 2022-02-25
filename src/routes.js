import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from "./pages/about";
import Home from './pages/home';
import Header from './bars/header';
const routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
       <Routes>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
       </Routes>
          
      
      </div>     
    </BrowserRouter>
  );
};
export default routes;