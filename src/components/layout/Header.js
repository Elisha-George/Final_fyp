import React, { useState, useEffect } from 'react';
import "./component.css";
import { Link} from "react-router-dom";
import logo from "../../images/main_logo.png";
import profile_nav from "../../images/profile_nav.jpg";


const Header = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  
  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Remove the token from local storage and redirect to the login page
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/Login"; // Replace with the appropriate route for your login page
  };
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  

  return (
    <>
      <div>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="col-md-7">
                <div className="navigation">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/About">About Us</Link>
                    </li>
                    <li>
                      <Link to="/FindHouse">Find House</Link>
                    </li>
                    <li>
                      <Link to="/Contact">Contact</Link>
                    </li>
                  
                   
                    {isLoggedIn && (
                      <li>
                        <Link to="/AddPropertyBasic">Add Property</Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <div className="icons">
                  <a href="#" onClick={toggleDropdown}>
                    <img
                      className="profile_icon"
                      src={profile_nav}
                      alt="Profile"
                    />
                  </a>
                  {isDropdownOpen && (
                       <div className="dropdown_nav">
                       {isLoggedIn ? (
                         <>
                           <Link to="/UserProfile">Profile</Link>
                           <a href="#" onClick={handleLogout}>
                             Logout
                           </a>
                         </>
                       ) : (
                         <>
                           <Link to="/Login">Login</Link>
                           <Link to="/Register">Register</Link>
                         </>
                       )}
                     </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>
        
      </div>
    </>
  );
};

export default Header;