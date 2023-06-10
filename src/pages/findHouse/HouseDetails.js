import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import "./houseDetails.css";
import {FaStar} from "react-icons/fa";

export const HouseDetails = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);


  const { property_id } = useParams();
  console.log("property_id:", property_id);
  const [houses, setHouses] = useState(null);
  const [images, setImages] = useState([]);
  const [popupImageIndex, setPopupImageIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    time: "",
  });

  useEffect(() => {
    async function getHouse() {
      const res = await fetch(
        `http://localhost/FYP/API/details.php?property_id=${property_id}`
      );
      const data = await res.json();
      setHouses(data.property);
      setImages(data.images);
      setLoading(false);
    }

    getHouse();
  }, [property_id]);
  const openPopup = (index) => {
    setPopupImageIndex(index);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost/FYP/profile.php", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          const retrievedUserId = data.profile.id;
          setUserId(retrievedUserId);
        }
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);

  const handleNegotiationRequest = () => {
    // Fetch the user ID from the state
    const user_id = userId;

    // Fetch the property ID from the URL parameter
    const propertyId = property_id;

    // Destructure the form data
    const { name, email, phone, amount, time } = formData;

    // Create the payload for the API request
    const payload = {
      userId: user_id,
      property_id: propertyId,
      name,
      email,
      amount,
      phone,
      time,
    };

    // Make the API request to insert the data into the bidding table
    fetch("http://localhost/FYP/bidding.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Bidding data:", data);
        // Handle the response or perform any necessary actions
      })
      .catch((error) => {
        console.error("Error inserting bidding data:", error);
        // Handle the error or display an error message
      });

    setShowModal(true);
  };

  const closePopup = () => {
    setPopupImageIndex(null);
  };

  const navigateLeft = () => {
    setPopupImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const navigateRight = () => {
    setPopupImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (!showModal) {
      // Reset the form data when the modal is closed
      setFormData({
        name: "",
        email: "",
        phone: "",
        amount: "",
        time: "",
      });
    }
  }, [showModal]);

  if (loading) {
    return <h2>Loading...</h2>;
  }


  return (
    <Layout>
    <div className="propertyDisplayBack">

    
           <section class="pt-3 propertydisplay">
        <div class="container">
          <div class="row">
            <div class="col-md-10 PropertyDetail">
              <p>
                Rental Hub &#8250; <span></span>
                {houses.city} Property &#8250; <span></span> {houses.area}{" "}
                &#8250;<span></span>{" "}
                <span class="sizeft">{houses.size} sqft Flat</span>
              </p>
            </div>
            <div class="col-md-2">
              <button class="Searchbtn" type="search">
                Back to Search <i class="fa fa-search"></i>
              </button>
            </div>
            <div class="col-md-9 PropertyDetail PropertyDetailName mt-2">
              <h4>
                {houses.title} I PKR{" "}
                <span class="PropertyPrice">{houses.price}</span>
              </h4>
            </div>
            <div class="col-md-3 mt-3 PropertyLocationDate">
              <p className="p_postedOn">
                Posted on - <span className="span_postedOn"> {houses.datePosted} </span>{" "}
              </p>
            </div>
            <div class="PropertyLocation">
              <p>
                {" "}
                <i class="fas fa-map-marker-alt LocationIcon"></i>
                {houses.area} , {houses.city}
              </p>
            </div>
          </div>
        </div>


        
      </section>
      {/* ------------------------------IMAGES-------------------------- */}
      <section className="gallery">
        <div className="container image-container">
          <div className="row img_row">
            {images.map((image, index) => (
              <a
                href="#"
                className="image property"
                key={index}
                onClick={() => openPopup(index)}
              >
                <img
                  src={`http://localhost/FYP/API/uploads/${image.image}`}
                  alt={`Property ${index}`}
                />
              </a>
            ))}
            {popupImageIndex !== null && (
              <>
                <div className="popup-overlay"></div>
                <div className="popup">
                  <img
                    src={`http://localhost/FYP/API/uploads/${images[popupImageIndex].image}`}
                    alt={`Image ${popupImageIndex}`}
                  />
                  <div className="popup-arrow left" onClick={navigateLeft}>
                    <i className="fa fa-angle-left"></i>
                  </div>
                  <div className="popup-arrow right" onClick={navigateRight}>
                    <i className="fa fa-angle-right"></i>
                  </div>
                  <div className="popup-close" onClick={closePopup}>
                    <i className="fa fa-times"></i>
                  </div>
                </div>
                <div className="blur-background"></div>
              </>
            )}
          </div>
        </div>
      </section>


      {/* ----------------------------------DESCRIPTION------------------------------------ */}
      <section class="mt-4 PropertyDesc">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <h6>
                {houses.title}, {houses.city}
              </h6>
              <span class="BedroomIcon">
                <i class="fa fa-bed" aria-hidden="true"></i>
                {houses.beds}
              </span>
              <span class="ShowerIcon">
                {" "}
                <i class="fa fa-bath" aria-hidden="true"></i>
                {houses.bathrooms}
              </span>
              <p class="mt-4">{houses.description}</p>
              <h6>Key features:</h6>
              
                {houses.features}
              
              <div className="basic_features">
              <p><h6>Electicity </h6>Availability - {houses.electricity} hrs</p>
              <p><h6>Gas </h6>Availability - {houses.gas} hrs</p>
              <p><h6>Water </h6>Availability - {houses.water} hrs</p>
              </div>
              <p class="PropertyRecom">
                We highly recommend viewing this property.
              </p>
            </div>
            <div class="col-md-4 mb-5 SideProfileInfo">
              {userId && Number(houses.user_id) === Number(userId) ? (
                <p className="text-center caution">You are the owner of this property. You Can't bid here !!!</p>
              ) : (
                <form >
                  <h4 class="mt-3">
                    PKR <span>{houses.price}</span>
                  </h4>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control mb-4"
                      id="exampleInputName1"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    <input
                      type="email"
                      class="form-control mb-4"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />

                    <input
                      type="text"
                      class="form-control mb-4"
                      id="exampleInputphone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                    <input
                      type="tel"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      class="form-control mb-4"
                      id="exampleInputAmount"
                      placeholder="Amount"
                      value={formData.amount}
                      onChange={(e) =>
                        setFormData({ ...formData, amount: e.target.value })
                      }
                    />
                    <input
                      type="time"
                      class="form-control"
                      id="exampleInputvh"
                      placeholder="Visiting hrs"
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                    />
                   
                    {/* <button type="submit" class="formbtn mt-4">Send Request For Negotiation</button> */}
                    <button
                    type="button"
                    class=" mt-4 btn btn-lg btn-block btn_negociation"
                    onClick={handleNegotiationRequest}
                  >
                    Send Request For Negotiation
                  </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================RATING SECTION ============================================ */}

      <div className="ratingComponent">

{/* Rating ki CSS RATING COMPONET NAME say save ha */}
{/* along with the USE CASE bhi use kiyae hn Hove and Rating */}
          {[...Array(5)].map((star, i)=>{

          const ratingValue = i+1;

           return(
            <label>
              <input 
              type="radio"
              className="ratingRadio" 
              value={ratingValue}
              name="rating"
              onClick={() => setRating(ratingValue)} 
             
              />
              
              <FaStar 
              className="star" 
              color={ratingValue <= (hover || rating)  ? "#ffc107" : "#e4e5e9"}
              size={22}
              onMouseEnter={() => setRating(ratingValue)}
              onMouseLeave={() => setHover(null)}
              />
            </label>
           ) 
          })}
          <h4 className="raitingHead">{rating}</h4>

          

      </div>
{/* ================================================RATING SECTION ============================================ */}

      {showModal && (
        <div className="popup-container">
          <div className="popup-content">
            <h2>Thank You!</h2>
            <p>Your negotiation request has been submitted.</p>
            {/* ...additional input fields, buttons, etc. for negotiation form... */}
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
      </div>
    </Layout>
  );
};

export default HouseDetails;
