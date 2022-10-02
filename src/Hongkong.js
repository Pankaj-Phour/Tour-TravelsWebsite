import React from "react";
import { NavLink } from "react-router-dom";
import './Hong-kong.css';
import Footer from './Footer';

const Hongkong=() => {
    return(
        <div className="body-hongkong">
         <div className="home-image-hongkong">
           <div className="home-text-hongkong">
             <h3>Welcome to our Website</h3>
              <p>We give you the opportunity t explore  the beauty of nature</p>
               <NavLink to="/Contact.js" className="btn btn-outline-success">Travel Now</NavLink>      
            </div>
         </div>
         <br/>
         < Footer/>
        </div>
    );
}
export default Hongkong;