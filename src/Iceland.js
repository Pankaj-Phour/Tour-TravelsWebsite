import React from "react";
import { NavLink } from "react-router-dom";
import './Iceland.css';
import Footer from './Footer';

const Iceland=() => {
    return(
        <div className="body-iceland">
         <div className="home-image-iceland">
           <div className="home-text-iceland">
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
export default Iceland;