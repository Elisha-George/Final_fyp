import "./login.css";
import google_icon from "../../images/google_icon.png";
import logo from "../../images/logo.png";
import { Layout } from "../../components/layout/Layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';


export const Login = ( ) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  

  const handleLogin = () => {
    // Send a request to the backend API to authenticate the user
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
    fetch("http://localhost/FYP/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "valid") {
          
          const { token } = data;
          // Store the token in local storage
          localStorage.setItem("token", token);
          if (token) {
            setIsLoggedIn(true);
          }
          // Redirect or navigate to the profile page
         window.location.href = "/profile";
         
         //navigate.push("/profile");
        } else {
          setError("Invalid login credentials");
        }
      })
      .catch((error) => {
        setError("An error occurred during login");
      });
  };

  return (
    <Layout>
      <section className="banner_content">
        <div className="container register_container">
          <div className="row">
            <div className="right_register_col col-md-7">
              <div className="right_logo">
                <img className="logo_register" src={logo} alt="" />
                <h2>Rental Hub</h2>
              </div>

              <div className="right_center">
                <h2>New Here ?</h2>
                <h5>Sign Up & Discover a Great</h5>
                <h5>Amount Of Rental Properties</h5>
              </div>

              <div className="right_button">
                <button className="login_btn">
                  <Link to="/Register">Register</Link>
                </button>
              </div>

              <div className="right_foot">
                <h1>Where We Dream of Luxurary House</h1>
                <h1>Becoming a Reality In Real Time</h1>
              </div>
            </div>

            <div className="left_register_col col-md-5">
              <h1 className="text-center">Sign In</h1>

              <div className="register_form">
                <form>
                  <div className="form_element" id="email">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form_element" id="password">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  
                  </div>

                  <div className="form_element" id="signup">
                    <button type="button" onClick={handleLogin}>
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <p className="text-center">____ OR ____</p>

              <div className="google_signup">
                <img src={google_icon} />
                <a href="#">
                  {" "}
                  <p>Signup with google</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
