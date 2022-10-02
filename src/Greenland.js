import React from "react";
import { NavLink } from "react-router-dom";
import './Greenland.css';
import Footer from './Footer';

const Greenland=() => {
    return(
        <div className="body-greenland">
         <div className="home-image-greenland">
           <div className="home-text-greenland">
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
export default Greenland;