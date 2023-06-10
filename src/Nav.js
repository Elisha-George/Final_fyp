import React from "react";
import { ReactDOM } from "react";
import "./Style.css"
import logo from './images/logo.png'

export const Nav = () => {
  return (
    <div>
      
        <header>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="logo">
            <a href="#"> <img src="images/logo.png"/> </a> 
          </div>
        </div>
        <div className="col-md-7">
          <div className="navigation">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Find House</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-2">
          <div className="icons">
              <a href=""><img src="images/profile.png"/></a>
          </div>
        </div>
      </div>
    </div>
  </header>



    </div>
  )
}