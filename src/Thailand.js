import React from "react";
import { NavLink } from "react-router-dom";
import './Thailand.css';
import Footer from './Footer';

const Thailand=() => {
    return(
        <div className="body-thailand">
         <div className="home-image-thailand">
           <div className="home-text-thailand">
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
export default Thailand;