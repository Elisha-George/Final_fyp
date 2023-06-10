import React from 'react'
import './component.css'

export const Footer = () => {
  return (
    <>
        <section class="footer">
    <div class="container">
      <div class="row">
        
          <div class="col-md-4 footerCol1 mt-5">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy</p>
              <h6>Get In Touch</h6> 
                <p>
                  <i class="fas fa-map-marker-alt mt-3"></i>New York, NY 23333, US
                </p>
              <p>
                <i class="fas fa-phone"></i>123 345 789 3
              </p>
              <p>
                <i class="fas fa-envelope"></i>mail@domain.com
              </p>
         </div>
         <div class="col-md-4 footerCol2 footerCol1 mt-5">
            <h6>About Us</h6> 
            <p><i class="fas fa-caret-right mt-3"></i>Home</p>
            <p><i class="fas fa-caret-right"></i>About</p>
            <p><i class="fas fa-caret-right"></i>Find House</p>
            <p><i class="fas fa-caret-right"></i>Blogs</p>
            <p><i class="fas fa-caret-right"></i>Contact</p>
         </div>
  
         <div class="col-md-4 footerCol3 footerCol1 mt-5">
          <h6>Newsletter</h6> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div class="input-group">
            <input type="email" class="form-control" placeholder="Your Email"/>
            <span class="input-group-btn">
              <button class="btn" type="submit">Subscribe Now</button>
            </span>
          </div>
          <img class="socialicon" src="images/socio icon'.png" alt=""/>
         </div> 
      </div>
     </div>
     <div class="col-md-12 footerCol4">
      <hr class="footerline"/>
      <p>Copyright <span>© Domain.</span> All Rights Reserved.<br/>
        Designed by <span>Unzila I Elsiha</span></p>
     </div> 
  </section>

   {/* <!-------------------------- FOOTER END------------------------------- --> */}

    </>
  )
}

export default Footer;