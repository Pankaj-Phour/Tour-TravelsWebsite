import React from "react";
import { NavLink } from "react-router-dom";
import './Booking.css';

const Booking=() => {
    return(
        <div className="body-booking">
         <div className="home-image-booking">
           <div className="home-text-booking">
             <h3>Welcome to our Website</h3>
              <p>We give you the opportunity t explore  the beauty of nature</p>
               <NavLink to="/Contact.js" className="btn btn-outline-success">Travel Now</NavLink>      
            </div>
         </div>
         <br/>
         <div className="form">
             <form className="needs-validation" novalidate>
            <div className="form-group">
                <label for="name" className="text">Name : </label>
                <input type="text" className="form-control mr-sm-2 outline" placeholder="Enter your Name" required/>
                <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
           </div>
            <div className="form-group">
                <label for="email" className="text">Email : </label>
                <input type="email" className="form-control mr-sm-2 outline" placeholder="Enter your Email-id" required/>
                <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <div className="form-group">
                <label for="Tourist" className="text">No. of Travellers : </label>
                <input type="number" className="form-control mr-sm-2 outline" placeholder="Total Travellers" required/>
                <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <div className="form-group">
                <label for="contact" className="text">Contact no. </label>
                <input type="text" className="form-control mr-sm-2 outline" placeholder="Enter your Contact number" required/>
                <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <div className="form-group">
                <label for="Place" className="text">Place to Visit : </label>
                <input type="text" className="form-control mr-sm-2 outline" placeholder="Enter the Place You Want To Visit" required/>
                <button className="btn btn-outline-secondary submit" type="submit">Submit</button>
                <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            </form>
            </div>
            <footer>
    <div className="row">
        <ul className="col">
            <li>
                <NavLink to="/" exact className="footer-1">Home</NavLink>
            </li>
            <li>
                <NavLink to="/Contact.js" className="footer-1">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/About.js" className="footer-1">About</NavLink>
            </li>
            <li>
                <NavLink to="/Menu.js" className="footer-1">Menu</NavLink>
            </li>
        </ul>
        <div className="col list-2">
            <h2 className="brand">Traveler's Guide</h2>
            <ul>
                <li>
                    <NavLink to="/Blogs.js" className="footer-2">Blogs</NavLink>
                </li>
                <li>
                    <NavLink to="/Videos.js" className="footer-2">Videos</NavLink>
                </li>
                <li>
                    <NavLink to="/Sports.js"  className="footer-2">Sports</NavLink>
                </li>
                </ul>
                </div>
                <div className="col list-3">
                  <div className="brand-2">  Places to Visit </div>
                <ul>
                    <li>
                        <NavLink to="/India.js" className="footer-3">
                            In India
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/International.js" className="footer-3">
                            International
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Island.js" className="footer-3">
                            Islands
                        </NavLink>
                    </li>
                </ul>
                </div>
    </div>
</footer>
<script>
    (function () {
window.addEventListener('load',function(){
var forms = document.getElementsByClassName('needs-validation');
var validation = Array.prototype.filter.call(forms,function(form){
    form.addEventListener('submit',function(event){
        if (form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
        },false);
    });
},false)
})();
</script>
        </div>
    );
}
export default Booking;