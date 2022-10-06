import React from "react";
import './App.css';
import Home from './Home.js';
import Contact from './Contact.js';
import About from './About.js';
import Menu from './Menu.js';
import Navbar from './Navbar';
// import Footer from './Footer';
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


import { Route , Routes } from 'react-router';

const App= () =>
{
  return(
    <div>
      <Navbar />
<Routes>
  <Route path="/" element={<Home/>} exact='true' />
        <Route path="/Contact.js" element={<Contact/>} exact='true' />
        <Route path="/About.js" element={<About/>} exact='true' />
        <Route path="/Menu.js" element={<Menu/>} exact='true' />
        <Route path="/Singapore.js" element={<Singapore/>} exact='true' />
        <Route path="/Italy.js" element={<Italy/>} exact='true' />
        <Route path="/Greek.js" element={<Greek/>} exact='true' />
        <Route path="/Kerala.js" element={<Kerala/>} exact='true' />
        <Route path="/Kashmir.js" element={<Kashmir/>} exact='true' />
        <Route path="/Goa.js" element={<Goa/>} exact='true' />
        <Route path="/Australia.js" element={<Australia/>} exact='true' />
        <Route path="/Paris.js" element={<Paris/>} exact='true' />
        {/* <Route path="/Footer.js" element={<Footer/>} exact='true' /> */}
        <Route path="/Norway.js" element={<Norway/>} exact='true' />
        <Route path="/England.js" element={<England/>} exact='true' />
        <Route path="/Hongkong.js" element={<Hongkong/>} exact='true' />
        <Route path="/Newyork.js" element={<Newyork/>} exact='true' />
        <Route path="/Greenland.js" element={<Greenland/>} exact='true' />
        <Route path="/Iceland.js" element={<Iceland/>} exact='true' />
        <Route path="/Thailand.js" element={<Thailand/>} exact='true' />
        <Route path="/Alaska.js" element={<Alaska/>} exact='true' />
        <Route path="/Booking.js" element={<Booking/>} exact='true' />
        <Route path="/India.js" element={<India/>} exact='true' />
        <Route path="/International.js" element={<International/>} exact='true' />
        <Route path="/Island.js" element={<Island/>} exact='true' />
        <Route path="/Sports.js" element={<Sports/>} exact='true' />
        <Route path="/Videos.js" element={<Videos/>} exact='true' />
      </Routes>
    

    </div>
  );
};
export default App;
