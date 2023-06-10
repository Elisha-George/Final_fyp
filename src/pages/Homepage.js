
import { Layout } from '../components/layout/Layout'
import './homePage.css'
import design from '../images/design.png'
import about_1 from '../images/About1.png'
import about_2 from '../images/about2.png'
import potrait_1 from '../images/profile1.jpg'
import potrait_2 from '../images/profile2.jpg'
import potrait_3 from '../images/profile3.jpg'
import { useEffect, useState } from "react";



// Axios
import axios from 'axios';

// Toastify
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 




const Homepage = () => {

  const [add,setAdd] = useState('');
  const [email, setEmail] = useState("");


  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the backend with the email
      const response = await axios.post("http://localhost/FYP/sendMail.php", { email });
      console.log(response.data); 
      toast.success("Email Has Successfully Registered");// Assuming the backend sends a response message
    } catch (error) {
      console.error(error);
      toast.success("Invalid Email, Please Enter a Valid Email or Try Again");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    // console.log(e.target.value);
  };


  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(pos=>{
      const {latitude, longitude} = pos.coords;
      console.log(latitude, longitude)
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url).then(res=>res.json()).then(data=>setAdd(data.address));   
    })
    
  },[])
  console.log(add);




  return (
   

    <Layout>

      {/* <!-- -----------------------BANNER ---------------------------------> */}
  
      <section className="banner">
        <div className="container">
  
          <div className="row">
          <div className="div_banner"> <img src={design} alt="" />
             <h2 className='banner_head'>Finding Soulmate in Bricks</h2>
            <div className="bannerline"></div>
            <p className='banner_para'>Discover your dream home! Find the perfect rental property with ease and convenience. Welcome to hassle-free and comfortable living Rental Hub! where luxurary meets affordability</p>
            <p>Get the best deals in <a href=""><span class="address">{add.neighbourhood}</span></a></p>
          </div>

          {/* ============================ SEARCH BAR ======  =============================== */}
          {/* <div className="search-bar">
  <form>
    <div className="input-group seach_input_group">
      <select className='search_select' name="city" id="city-select">
        <option value="" disabled selected>Select City</option>
        <option value="city1">Karachi</option>
        <option value="city2">Islamabad</option>
        <option value="city3">Lahore</option>
        
      </select>
      <select name="area" className='search_select' id="area-select">
        <option value="" disabled selected>Select Area</option>
        <option value="area1">Model Colony</option>
        <option value="area2">Civil Aviation</option>
        <option value="area3">Lal Kothi</option>
        
      </select>
      <button className='sarch_bar_button' type="submit">Search</button>
    </div>
  </form>
</div> */}
          {/* ============================ SEARCH BAR ===================================== */}
            
          </div>
        </div>
      </section>
      {/* <!-- -----------------------BANNER Closed---------------------------------> */}


      {/* <!-- -----------------------Our Success---------------------------------> */}

<section>

        <div className="success_head">
        <h1 className="success_heading text-center">
          Our Success
        </h1>
        
        </div>
              <div className="funfacts">


                <div className="keyboard">
                   <i className='fa fa-keyboard'></i>
                   <span className="facts_description">Business</span>
                </div>
{/* --------------------------- Counter Section------------------------------ */}
                <div className="project">
                  <h3>300+</h3>
                    <span className="facts_description">Projects</span>
               </div>

               <div className="award">
                <h3 className="facts_description">10+</h3>
                <span className="facts_description">Awards</span>
             </div>

             <div className="freelancer">
              <i className='fa fa-briefcase'></i>
              <span className="facts_description">Clinets</span>
           </div>

              </div>
            </section>



      {/* <!-- -----------------------Our Success---------------------------------> */}



      {/* <!-------------------------- ABOUT HEADING------------------------------- --> */}
   

      <section className="AboutBorder">
      <div className="container ">
          <div className="row">

            <div className="col-md-12">
              <div className="MainHeading">
                <h1>Who We Are?</h1>
                <h5>Start Living Your Dream</h5>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className="container AboutUsBody">
          <div className="row">
            <div className="col-md-4">
              <img src={about_1} alt="" />
            </div>
            <div className="col-md-4">
              <p className='text-center'>Price is what you pay <br />
                Value is what you get</p>
              <div className="OurStory">
                <h2>OUR STORY</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis volutpat nunc sagittis felis. Lacus sit sit donec in sapien sagittis pretium, phasellus neque. Volutpat congue diam pellentesque nibh gravida scelerisque nullam volutpat</span>
                <br /> <a href="#">View More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-md-4 AboutImg2">
              <img src={about_2} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-------------------------- CLOSED ABOUT HEADING------------------------------- --> */}

      {/* <!-------------------------- TESTIMONALS HEADING------------------------------- --> */}

      <section className="testimonial-section">

<h1 className='text-center'>Testimonials</h1>
<h5 className="text-center">Our Happy Clients Says It All</h5>
<hr />



  <div className="testimonial-container">
    <div className="testimonial-card">
      <div className="testimonial-image">
        <img src={potrait_2} alt="Testimonial 1"/>
      </div>
      <h3 className="testimonial-name">Sara Jonson</h3>
      <div className="testimonial-rating">
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span classNameass="star">&#9733;</span>
        <span className="star">&#9733;</span>
      </div>
      <p className="testimonial-comment">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget diam vel augue fermentum efficitur. Etiam sed erat sapien."</p>
    </div>
    <div className="testimonial-card" >
      <div className="testimonial-image">
        <img src={potrait_1} alt="Testimonial 2"/>
      </div>
      <h3 className="testimonial-name">Jane Smith</h3>
      <div className="testimonial-rating">
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
      </div>
      <p className="testimonial-comment">"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras eget est sed diam tempor euismod."</p>
    </div>
    <div className="testimonial-card">
      <div className="testimonial-image">
        <img src={potrait_3} alt="Testimonial 3"/>
      </div>
      <h3 className="testimonial-name">John Doe</h3>
      <div className="testimonial-rating">
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
      </div>
      <p className="testimonial-comment">"Nullam sit amet convallis risus. Vivamus a bibendum justo. Sed vel efficitur nulla, id euismod nunc. Mauris id consectetur sem, vel dapibus tellus."</p>
    </div>
  </div>
</section>

      {/* <!-- ============================================= WORK BANNER START ==================================================--> */}

            <section className="container-fluid work_banner">


              <div className="container-fluid">
                
                <div className="row">

                  <div className="col-md-12 work_banner_background">


                    <div className="work_content">
                      <h4 className="text-center">
                      Looking For A New Place? 
                      </h4>

                      <h1 className="text-center">
                        Lets work together Indeed
                      </h1>

                      <div className="bannerButton">

                      <button type="button" className="btn-work btn btn-warning">
                        Lets Work
                      </button>


                      </div>

                    </div>
                   
                  </div>

                </div>

              </div>

            </section>

         {/* <!-- ================================================ WORK BANNER END  ==================================================--> */}


      {/* Property Listing*/}

      <section className="listing">
        <div className="listing_background">

        </div>
      </section>

      {/* ----------------------------- */}



              {/* <!-- ================================NEW LETTER HEADING============================== --> */}

<section className='sec_newsletter'>
 <div className="container ">
     <div className="row">
         
         <div className="col-md-12">
             <div className=" footerCol3 ">
                 <h1 className='newsLetter_heading text-center'>Subscribe To Our Newsletter</h1><p className='text-center'>Receive updates instantly</p>   
                 <form onSubmit={handleSubmit} className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                </button>
              </form>
                
                 {/* <div className="input-group NewsForm">
                   <input type="email" className="form-control news_input" placeholder="Your Email"/>
                   <span className="input-group-btn">
                     <button className="btn" type="submit">Subscribe Now</button>
                   </span>
                 </div> */}
             </div>
         </div>   
     </div>
    </div>
</section>

            </Layout>

            )
}

            export default Homepage
