import React from 'react'
import { Layout } from '../components/layout/Layout'
import vision from '../images/visionimg.png'
import mission from '../images/ourMission.png'
import approach from '../images/ourApproach.png'
import trust from '../images/trust.png'
import reliable from '../images/reliable.png'
import efficiency from '../images/efficiency.png'
import about_hero from '../images/about_hero.jpg'

import './about.css'


const About = () => {
  return (
    <Layout>
         {/* <!-------------------------- MAIN HEADING------------------------------- --> */}

        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 about_hero" >

                        <img src={about_hero} alt=""  />
                        {/* Img */}
                    </div>
                    <div className="col-md-7">
                        <div className="about_head">
                      
                            <h1 className="about_heading">
                                About Us
                            </h1>
                        </div>
                    <div className="about_para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum nesciunt similique! Exercitationem cum temporibus consequatur optio neque officia asperiores vero et quisquam eveniet rerum debitis, sed tempora sit officiis autem, consectetur dicta, cumque delectus excepturi dolorem ratione quo praesentium numquam! Omnis cum nostrum error nulla dignissimos! Distinctio, quam fugit. lorem30
                    </div>
                        {/* Text */}
                    </div>
                </div>
            </div>
        </section>

 {/* <!-------------------------- MAIN HEADING END------------------------------- --> */}
    </Layout>
  )
}

export default About
