import React from 'react'
import './addproperty.css'
import { Layout } from '../../components/layout/Layout'
import { getAuth } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';
import profile_picture from '../images/profile_Picture.png'



const AddProperty_1 = () => {
 
  return (
    <Layout>
      

      {/* <!-------------------------- Header------------------------------- --> */}
    <div class="container">
        <div class="row">
                <div class="MainHeading">
                    <h1>ADD PROPERTY</h1> 
                </div>
       </div>
    </div>   
    
    
    <div class="container ">
        <div class="row">
            <div class="progressbar-wrapper ">
                <ul class="progressbar">
                    <li class="active">Step 1</li>
                    <li>Step 2</li>
                    <li>Step 3</li>
                    <li>Step 4</li>
                    <li>Step 5</li>
                    <li>Step 6</li>
                </ul>
          </div>
        </div>
    </div>

    <div class="container PropertyType">
        <div class="row">
            <h4>Select the property type</h4>
        </div>

        <div class="row">
            <div class="wrapper mt-5">
                <div class="radio-buttons">
                  <label class="custom-radio">
                    <input type="radio" name="radio" checked />
                    <div class="radio-btn">
                      <div class="content">
                        <span class="check-icon">
                          <span class="icon"></span>
                        </span>
                      </div>
                      <h2>House</h2>
                    </div>
                  </label>
                  <label class="custom-radio">
                    <input type="radio" name="radio" />
                    <div class="radio-btn">
                      <div class="content">
                        <span class="check-icon">
                          <span class="icon"></span>
                        </span>
                      </div>
                      <h2>Flat</h2>
                    </div>
                  </label>
                </div>
              </div>
        </div>
    </div>
    <div class="container-fluid PrevNext">
        <div class="container">
            <div class="row">
                <div>
                    <a href="#" class="previous">&#8249; Previous</a>
                    <a href="#" class="next">Next &#8250;</a>
                  </div>
            </div>
        </div>
       </div>



    </Layout>
  )
}

export default AddProperty_1
