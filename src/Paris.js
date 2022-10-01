import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import './Paris.css';

const Paris=() => {
    return(
        <div className="body-paris">
         <div className="home-image-paris">
           <div className="home-text-paris">
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
export default Paris;