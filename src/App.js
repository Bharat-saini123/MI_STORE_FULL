import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Home';
import Logout from './Logout';
import Phone from './Phone';
import Tv from './Tv';
import Error from './Error';
import About from './About';
import Contact from './Contact';
import Store from './Store';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Signup from './Signup';
import Login from './Login';

import PhoneAbout from './PhoneAbout';
import TvAbout from './TvAbout';
import Storeabout from './Storeabout';

const App = () => {
  return (
 <BrowserRouter>
 <Navbar/>
 <Routes>


  <Route  path='/' element={<Home/>}/>
 

  <Route  path='/store' element={<Store/>}/>
  <Route  path='/phone' element={<Phone/>}/>
  <Route  path='/phone/phoneabout/:name' element={<PhoneAbout/>}/>
  <Route  path='/store/phoneabout/:name' element={<Storeabout/>}/>
  <Route  path='/tv/tvabout/:name' element={<TvAbout/>}/>
  <Route  path='/tv' element={<Tv/>}/>
  <Route  path='/signup' element={<Signup/>}/>
  <Route  path='/login' element={<Login/>}/>
  <Route  path='/logout' element={<Logout/>}/>
  <Route  path='/about' element={<About/>}/>
 

  <Route  path='*' element={<Error/>}/>





 </Routes>
 <Footer />
 </BrowserRouter>
  )
}

export default App