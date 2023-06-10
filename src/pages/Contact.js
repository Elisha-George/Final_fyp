import React, { useState, useEffect } from 'react'
import { Layout } from '../components/layout/Layout'
import './contact.css'
import location_img from '../images/location.png'
import call from '../images/call.png'
import email from '../images/email.png'
import social_icon from '../images/socialIcons.png'

import { useRef } from 'react';



// Axios
import axios from 'axios';

// Toastify
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 



const Contact = () => {
	const[data, setData]=useState({
		user:"",
		email:"",
		subject:"",
		message: ""
	});

	const handleChange =(e)=>{
		setData({...data, [e.target.name]: e.target.value});

		console.log(data);

	}

	
	
	
	const submitForm=(e)=>{
		e.preventDefault();

		const sendData ={
			user: data.user,
			email: data.email,
			subject: data.subject,
			message: data.message
		}

		console.log(sendData);
		
		const backend_url="http://localhost/fyp_backend/contact.php";

		axios.post(backend_url, sendData)
		.then((result) =>{
			if(result.data.Status == 'Invalid')
			{
				alert('Invalid Input')
			}
			else{

				toast.success("Your Response Has been Send");
				

			}
		})
	}








  return (
    <Layout>
   
   {/* <!-------------------------- CONTACT------------------------------ --> */}
   
		<div className="container">
			<div className="row top-headings justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">Nice To Meet You</h2>
					<p className="subheading1 text-center">Contact us and Give your valuable feedback</p>
					<p className="subheading2 text-cdnter">Your feedback will help us to improve your user experince</p>

					<h1 className='verticle_heading_right1'>
						Rental 
					</h1>
					<h1 className='verticle_heading_right2'>
						Hub 
					</h1>

				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-12 whole_form_box">
					<div className="wrapper">
						<div className="row no-gutters mb-5">
							<div className="col-md-7">
								<div className="contact-wrap form-heading w-100 p-md-5 p-4">
									<h3 className="mb-4" style={{color: "white"}}>Contact Us</h3>
									<div id="form-message-warning" className="mb-4"></div> 
				      		<div id="form-message-success" className="mb-4">
				            Your message was sent, thank you!
				      		</div>
									<form  onSubmit={submitForm} id="contactForm" name="contactForm" class="contactForm">
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label className="label" >Full Name</label>
													<input
														 style={{backgroundColor: "white"}} 
													 type="text" 
													 className="form-control" 
													 name="user" 
													 id="name" 
													 placeholder="Name"
													onChange={handleChange}
													value={data.name}
													 />
												</div>
											</div>	
											<div className="col-md-6"> 
												<div className="form-group">
													<label className="label">Email Address</label>
													<input
													 type="email" 
													 style={{backgroundColor: "white"}} 
													 className="form-control" 
													 name="email" 
													 id="email"
													 placeholder="Email" 
													 onChange={handleChange}
													 value={data.email}
													 />
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" >Subject</label>
													<input 
													type="text" 
													style={{backgroundColor: "white"}} 
													className="form-control" 
													name="subject" 
													id="subject" 
													placeholder="Subject" 
													onChange={handleChange}
													value={data.subject}
													/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label">Message</label>
													<textarea
													 style={{backgroundColor: "white"}} 
													 name="message" 
													 className="form-control" 
													 id="message" 
													 cols="30" 
													 rows="4" 
													 placeholder="Message"
													 onChange={handleChange}
													 value={data.message}></textarea>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<input type="submit" value="Send Message" className="btn btn-primary" />
													<div className="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-md-5 d-flex align-items-stretch">
								<div id="gmap_canvas" className='map_div'>

								<iframe width="450" height="610" id="gmap_canvas" src="https://maps.google.com/maps?q=muhammad%20ali%20jinnah%20university&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
								
			          </div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
			        		<div className="icon d-flex align-items-center justify-content-center">
			        			<span className="fa fa-map-marker"></span>
			        		</div>
			        		<div className="text">
				            <p><span>Address:</span> Muhammad Ali Jinnah University, Lal-Kothi Block A,B,C</p>
				          </div>
			          </div>
							</div>
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
			        		<div className="icon d-flex align-items-center justify-content-center">
			        			<span className="fa fa-phone"></span>
			        		</div>
			        		<div className="text">
				            <p><span>Phone:</span> <a href="tel://1234567920">+ 92 33023213232</a></p>
				          </div>
			          </div>
							</div>
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
			        		<div className="icon d-flex align-items-center justify-content-center">
			        			<span className="fa fa-paper-plane"></span>
			        		</div>
			        		<div className="text">
				            <p><span>Email:</span> <a href="mailto:info@yoursite.com">rent_Hub@gmail.com</a></p>
				          </div>
			          </div>
							</div>
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
			        		<div className="icon d-flex align-items-center justify-content-center">
			        			<span className="fa fa-globe"></span>
			        		</div>
			        		<div className="text">
				            <p><span>Website</span> <a href="#">RentalHub.com</a></p>
				          </div>
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

    </Layout>
  )
}

export default Contact
