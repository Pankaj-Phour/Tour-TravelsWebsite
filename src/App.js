import React from "react";
import './App.css';
import Home from './Home.js';
import Contact from './Contact.js';
import About from './About.js';
import Menu from './Menu.js';
import Navbar from './Navbar';
import Singapore from './Singapore.js'
import Italy from './Italy.js';
import Greek from './Greek.js';
import Kerala from './Kerala.js';
import Kashmir from './Kashmir.js';
import Goa from './Goa.js';
import Australia from './Australia.js';
import Paris from './Paris.js';
import Norway from './Norway.js';
import England from './England.js';
import Hongkong from './Hongkong.js';
import Newyork from './Newyork.js';
import Greenland from './Greenland.js';
import Iceland from './Iceland.js';
import Thailand from './Thailand.js';
import Alaska from './Alaska.js';
import Booking from './Booking.js';
import India from './India.js';
import International from './International.js';
import Island from './Island.js';
import Sports from './Sports.js';
import Videos from './Videos.js';


import './singapore.jpg';
import { Route , Routes } from 'react-router';

const App= () =>
{
  return(
    <div>
      <Navbar />

<Routes>
  <Route path="/" element={<Home/>} exact />
        <Route path="/Contact.js" element={<Contact/>} exact />
        <Route path="/About.js" element={<About/>} exact />
        <Route path="/Menu.js" element={<Menu/>} exact />
        <Route path="/Singapore.js" element={<Singapore/>} exact />
        <Route path="/Italy.js" element={<Italy/>} exact />
        <Route path="/Greek.js" element={<Greek/>} exact />
        <Route path="/Kerala.js" element={<Kerala/>} exact />
        <Route path="/Kashmir.js" element={<Kashmir/>} exact />
        <Route path="/Goa.js" element={<Goa/>} exact />
        <Route path="/Australia.js" element={<Australia/>} exact />
        <Route path="/Paris.js" element={<Paris/>} exact />
        <Route path="/Norway.js" element={<Norway/>} exact />
        <Route path="/England.js" element={<England/>} exact />
        <Route path="/Hongkong.js" element={<Hongkong/>} exact />
        <Route path="/Newyork.js" element={<Newyork/>} exact />
        <Route path="/Greenland.js" element={<Greenland/>} exact />
        <Route path="/Iceland.js" element={<Iceland/>} exact />
        <Route path="/Thailand.js" element={<Thailand/>} exact />
        <Route path="/Alaska.js" element={<Alaska/>} exact />
        <Route path="/Booking.js" element={<Booking/>} exact />
        <Route path="/India.js" element={<India/>} exact />
        <Route path="/International.js" element={<International/>} exact />
        <Route path="/Island.js" element={<Island/>} exact />
        <Route path="/Sports.js" element={<Sports/>} exact />
        <Route path="/Videos.js" element={<Videos/>} exact />
        
      </Routes>
    </div>
  );
};
export default App;
