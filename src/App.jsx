import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Property from './components/Property';
import Contact from './components/Contact';
import Home from './components/Home'; // Add your Home component here
import Signup from './components/Signup';
import Login from './components/Login';
import Addproperty from './components/Addproperty';
import Transaction from './components/Transaction';


function App() {
  return (
    <BrowserRouter>
      <div className=' relat.ive w-full'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Property" element={<Property />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Addproperty" element={<Addproperty />} />
          <Route path="/Transaction/:propertyId" element={<Transaction />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
