import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import google_icon from "../../images/google_icon.png";
import logo from "../../images/logo.png";
import { Layout } from "../../components/layout/Layout";
import { useRef } from "react";

// For font awsome
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// REGEX = to have a proper input format
const USER_REGEX = /^[A-Za-z][A-Za-z0-9-_ ]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
const CNIC_REGIX = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/;

// password = must contain 1 upper, 1 lower, 1 digit and 1 special case

// const REGISTER_URL = '/register';

export const Register = () => {
  const navigate = useNavigate();


  const errRef = useRef();
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmaill] = useState(false);
  const [EamilFocus, setEmailFocus] = useState(false);

  const [pwd, setpwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [id, setid] = useState("");
  const [validID, setValidId] = useState(false);
  const [IdFocus, setIdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // this is to set focus when the component loads
  useEffect(() => {
    return () => {
      userRef.current.focus();
    };
  }, []);

  // this is to validate the name
  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  //   to vlaidate the password
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);

    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  //   To validate Email
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmaill(result);
  }, [email]);

  //   To validate CNIC
  useEffect(() => {
    const result = CNIC_REGIX.test(id);
    setValidId(result);
  }, [id]);

  //refresh form 
  const resetForm = () => {
    setUser("");
    setValidName(false);
    setUserFocus(false);
    setEmail("");
    setValidEmaill(false);
    setEmailFocus(false);
    setpwd("");
    setValidPwd(false);
    setPwdFocus(false);
    setid("");
    setValidId(false);
    setIdFocus(false);
    setMatchPwd("");
    setValidMatch(false);
    setMatchFocus(false);
    setErrMsg("");
    setSuccess(false);
  };
  

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      username: user,
      cnic: id,
      email: email,
      password: pwd,
    };
    // sra data yahan get kr lia
    // console.log(sendData);

    const backend_url = "http://localhost/FYP/register.php";

    // axios =HTTP Request send krti ha POST ya Get ma
    // data json format ma chala jaye ga/

    axios.post(backend_url, sendData).then((result) => {
      if (result.data.Status == "Invalid") {
        alert("Invalid Login");
      } else {
        toast.success("Sign up Successfully");
        resetForm(); // Reset the form fields
        // history("/Login");
        // navigate("/login");
      }
    });
  };

  return (
    <Layout>
      <section className="banner_content">
        <div className="container register_container">
          <div className="row">
            <div className="left_register_col col-md-5">
              <h1 className="text-center">Register</h1>

              <div className="register_form">
                <div className="errorMsg">
                  <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                </div>

                <form onSubmit={submitForm}>
                  <div className="form_element" id="cnic">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validID ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validID || !id ? "hide" : "invalid"}
                    />

                    <input
                      type="text"
                      name="id"
                      placeholder="CNIC"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setid(e.target.value)}
                      value={id}
                      required
                      aria-invalid={validID ? "false" : "true"}
                      aria-describedby="cnic_note"
                      onFocus={() => setIdFocus(true)}
                      onBlur={() => setIdFocus(false)}
                    />

                    <p
                      id="cnic_note"
                      className={
                        IdFocus && id && !validID ? "instructions" : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      4 to 24 characters.
                      <br />
                      Must begin with a letter.
                      <br />
                      Letters, numbers, underscores, hyphens allowed.
                    </p>
                  </div>

                  <div className="form_element" id="email">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validEmail && email ? "valid" : "hide"}
                    />

                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validEmail || !email ? "hide" : "invalid"}
                    />

                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                      aria-invalid={validEmail ? "false" : "true"}
                      aria-describedby="email_note"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    />

                    <p
                      id="email_note"
                      className={
                        EamilFocus && email && !validEmail
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Email must be in proper format.
                      <br />
                      and include '@' and '.xyz'
                      <br />
                    </p>
                  </div>

                  <div className="form_element" id="name">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validName ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validName || !user ? "hide" : "invalid"}
                    />

                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Username"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setUser(e.target.value)}
                      value={user}
                      required
                      aria-invalid={validName ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                    />
                    <p
                      id="uidnote"
                      className={
                        userFocus && user && !validName
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      4 to 24 characters.
                      <br />
                      Must begin with a letter.
                      <br />
                      Letters, numbers, underscores, hyphens allowed.
                    </p>
                  </div>

                  <div className="form_element" id="password">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validPwd ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validPwd || !pwd ? "hide" : "invalid"}
                    />

                    <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={(e) => setpwd(e.target.value)}
                      value={pwd}
                      aria-invalid={validPwd ? "false" : "true"}
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                      autoComplete="off"
                    />
                    <p
                      id="pwdnote"
                      className={
                        pwdFocus && !validPwd ? "instructions" : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      8 to 24 characters.
                      <br />
                      Must include uppercase and lowercase letters, a number and
                      a special character.
                      <br />
                      Allowed special characters:{" "}
                      <span aria-label="exclamation mark">!</span>{" "}
                      <span aria-label="at symbol">@</span>{" "}
                      <span aria-label="hashtag">#</span>{" "}
                      <span aria-label="dollar sign">$</span>{" "}
                      <span aria-label="percent">%</span>
                    </p>
                  </div>

                  {/*                             
                            <div className="form_element" id="email">

                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />    

                            <input  
                            type="password" 
                            name='confirmPassword' 
                            id='confirmPassword' 
                            placeholder='Confirm Password'
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                                />

                            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                            </p>
                            </div> */}

                  <div className="form_element" id="signup">
                    <button type="submit">Signup</button>

                    {/* <button type="submit" disabled={!validName || !validPwd || !validMatch ? true : false} >Signup</button> */}
                  </div>
                </form>
              </div>

              <p className="text-center">__________ OR __________</p>

              <div className="google_signup">
                <img src={google_icon} />
                <a href="#">
                  {" "}
                  <p>Signup with google</p>
                </a>
              </div>
            </div>

            <div className="right_register_col col-md-7">
              <div className="right_logo">
                <img className="logo_register" src={logo} alt="" />
                <h2>Rental Hub</h2>
              </div>

              <div className="right_center">
                <h2>Already Know Us ?</h2>
                <h5>login to have the best</h5>
                <h5>Renting experience</h5>
              </div>

              <div className="right_button">
                <button className="login_btn">
                  <Link to="/Login">SingIn</Link>
                </button>
                {/* <button className="login_btn" onClick={() => navigate("/Login")}>
                  SignIn
                </button> */}
              </div>

              <div className="right_foot">
                <h1>Where We Dream of Luxurary House</h1>
                <h1>Becoming a Reality In Real Time</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
