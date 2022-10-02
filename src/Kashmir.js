import React from "react";
import { NavLink } from "react-router-dom";
import './Kashmir.css';
import Footer from './Footer';

const Kashmir=() => {
    return(
        <div className="body-kashmir">
         <div className="home-image-kashmir">
           <div className="home-text-kashmir">
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
export default Kashmir;