
// import './Style.css';

import { BrowserRouter, Route, Routes,useNavigate  } from 'react-router-dom'
import React, { useState } from 'react';
// Toastify






import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { Home } from './landingPage/Home';

import { Property } from './property/Property_2'
import { Layout } from './components/layout/Layout';
import Homepage from './pages/Homepage';
import About from './pages/About';

import Contact from './pages/Contact';
import { Login } from './pages/register_login/Login';
import { Register } from './pages/register_login/Register';
import Profile from './pages/profile/Profile';
import { FindHouse } from './pages/findHouse/FindHouse';
import { HouseDetails } from './pages/findHouse/HouseDetails';


import AddPropertAddress from './pages/addProperty/AddPropertAddress';
import AddPropertImage from './pages/addProperty/AddPropertImage';
import AddPropertyBasic from './pages/addProperty/AddPropertyBasic';
import UserProfile from './pages/profile/UserProfile';




// import {AddProperty_1} from './pages/addProperty/AddProperty_1';


function App() {

  return (
    


    <BrowserRouter>
    

      <ToastContainer />
     
      <Routes>
     
       <Route path="/Profile" element={<Profile/>} /> 
       <Route path='/Login' element={<Login />} />
       
        <Route path='/Register' element={<Register />} />
             
              
             
           
        <Route path='/' element={<Homepage />} />
        
        <Route path='/About' element={<About />} />
        <Route path='/FindHouse' element={<FindHouse />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/AddPropertyBasic' element={<AddPropertyBasic />} />

        
        {/* <Route path='/HouseDetails' element={<HouseDetails />} /> */}
        <Route path='/HouseDetails/:property_id' element={<HouseDetails />} />


        {/* <Route path='/Profile' element={<Profile />} /> */}


        {/* jo pages bnao gi un ka path yaha add karna ha 
        jahan ma nay AddProperty_1 /2/3 likha ha wahan apnay page ka name add kr dena aur upar import kr dena
         */}
       
        <Route path='/AddPropertImage' element={<AddPropertImage />} />
        <Route path='/AddPropertAddress' element={<AddPropertAddress />} />

        <Route path='/UserProfile' element={<UserProfile />} />

        

        {/* <Route path='/AddProperty_1' element={<AddProperty_1 />} /> */}


  




        {/* Correct the login */}

      </Routes>
     
    </BrowserRouter>




  );
}

export default App;
