import React from 'react'
import { Layout } from '../components/layout/Layout'
import vision from '../images/visionimg.png'
import mission from '../images/ourMission.png'
import approach from '../images/ourApproach.png'
import trust from '../images/trust.png'
import reliable from '../images/reliable.png'
import efficiency from '../images/efficiency.png'
import about_hero from '../images/about_hero.jpg'

import house1 from '../images/house_1.jpg'
import house2 from '../images/house_2.jpg'
import house3 from '../images/house_3.jpg'



import './about.css'


const About = () => {
  return (
    <Layout>
         {/* <!-------------------------- MAIN HEADING------------------------------- --> */}

            <div className="container aboutDiv">
                <div className="row">
                    <div className="col-md-5 about_hero" >

                        <img src={about_hero} className='heroAboutImg' alt=""  />
                        {/* Img */}
                    </div>
                    <div className="col-md-7">
                        <div className="about_head">
                      
                            <h1 className="about_heading">
                                About Us
                            </h1>

                        </div>
                        <div className="undeline underlineTop">

                        </div>
                    <div className="about_para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum nesciunt similique! Exercitationem cum temporibus consequatur optio neque officia asperiores vero et quisquam eveniet rerum debitis, sed tempora sit officiis autem, consectetur dicta, cumque delectus excepturi dolorem ratione quo praesentium numquam! Omnis cum nostrum error nulla dignissimos! Distinctio, quam fugit. lorem30
                    </div>
                        {/* Text */}
                    </div>
                </div>
            </div>

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

 {/* <!-------------------------- MAIN HEADING END------------------------------- --> */}

 <div className="container midheading">
    <div className="row midhead ">
    <div className="col-md-12">
    <h1 className="midtitle text-center">
            Who We Are
        </h1>
    </div>

    <div className='undeline underlineBottom'></div>
       
    </div>
 </div>


 <div className="container aboutDiv aboutBottomDiv">
                <div className="row">
                    <div className="col-md-5 about_hero" >
                    <h1 className="about_heading">
                               Rental Hub
                            </h1>
                            <div className="about_para">

                            
Discover a world of endless possibilities with our real estate website. We are the epitome of Dream Homes, offering a seamless experience to find your perfect property. Step into a Property Paradise where luxury meets comfort, and every house becomes a Home Haven. 
                         </div>
                        {/* Img */}
                    </div>
                    <div className="col-md-7">
                        <div className="housePicsSection">
                    
<img src={house1} alt="" className="aboutBottomIMages house_1" />
<img src={house2} alt="" className="aboutBottomIMages house_2" />
<img src={house3} alt="" className="aboutBottomIMages house_3" />
                        </div>
                   
                        {/* Text */}
                    </div>
                </div>
            </div>


       {/* <!-- ============================================= WORK BANNER START ==================================================--> */}


{/* <!-- ================================================ WORK BANNER END  ==================================================--> */}

    </Layout>
  )
}

export default About
