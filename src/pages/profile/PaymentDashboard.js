import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layout/Layout";
import "./PaymentDashboard.css";

//import profile from "../../images/paymentProfile.png";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export const PaymentDashboard = () => {
  const [userId, setUserId] = useState(null);
  const [payData, setPayData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    beneficiary: "",
    Amount: "",
    property: "",
    Pin: "",
  });

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

  useEffect(() => {
    // Fetch profile data using the stored token or handle authentication state appropriately
    const token = localStorage.getItem("token");
  
    // Send a request to the backend API to fetch user profile data using the token
    fetch("http://localhost/FYP/profile.php", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success" && data.payData) {
            setPayData(data.payData);


        } else {
          // Handle error response or empty payData
        }
      })
      .catch((error) => {
        // Handle error
      })
      .finally(() => {
        setLoading(false); // Set loading state to false when the data is fetched
      });
  }, []);
  
  const payment = () => {
    // Fetch the user ID from the state
    const user_id = userId;

    // Destructure the form data
    const { email, name, beneficiary, property, Amount, Pin } = formData;

    // Create the payload for the API request
    const payload = {
      userId: user_id,
      email,
      name,
      beneficiary,
      property,
      Amount,
      Pin,
    };
    // Make the API request to insert the data into the bidding table
    fetch("http://localhost/FYP/payment.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("payment data:", data);
        // Handle the response or perform any necessary actions

        // Reset the form data
      setFormData({
        name: "",
        email: "",
        beneficiary: "",
        Amount: "",
        property: "",
        Pin: "",
      });
      })
      .catch((error) => {
        console.error("Error inserting payment data:", error);
        // Handle the error or display an error message
      });
  };

  return (
    <Layout>
      <div className="paymentBoard">
        <div className="container paymnet_header">
          <div className="row row-headtitle">
            <div className="paymentHead">
              {/* <img src={profile} className="prfileImage" alt="" /> */}
              <h4 className="title">Payments</h4>
              <a href="#" class="badge badge-success">
                Online
              </a>
            </div>
          </div>

          <div className="row rowHead_info">
            <div className="div row_info">
              <h6 className="info_head">Payment</h6>{" "}
              <span className="info_info">Active</span>
            </div>

            <div className="div row_info">
              <h6 className="info_head">Payout</h6>{" "}
              <span className="info_info">Monthly</span>
            </div>

            <div className="div row_info">
              <h6 className="info_head">Balance</h6>{" "}
              <span className="info_info">Rs.50,000</span>
            </div>
          </div>
        </div>

        <div className="container balanceSection">
          <div className="row balanceHead">
            <h4 className="balanceheading">Balance</h4>

            <button
              class="btn btn-primary"
              id="paynow"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              type="submit"
            >
              Pay +{" "}
            </button>
          </div>

          <div className="row balanceCards">
            <div className="col-md-2 col-sm-2 cards_div">
              <h6 className="cardshead"> Total Transactions </h6>{" "}
              <span className="cardInfo"> Rs. 30,33000 </span>
            </div>

            <div className="col-md-2 col-sm-3 cards_div">
              <h6 className="cardshead"> Total bidding </h6>{" "}
              <span className="cardInfo"> Rs. 30,33000 </span>
            </div>

            <div className="col-md-2 col-sm-3 cards_div">
              <h6 className="cardshead"> Total dues </h6>{" "}
              <span className="cardInfo"> Rs. 30,33000 </span>
            </div>

            <div className="col-md-2 col-sm-3 cards_div">
              <h6 className="cardshead"> Total dues </h6>{" "}
              <span className="cardInfo"> Rs. 30,33000 </span>
            </div>
          </div>

          {/* Modal Popup Screen For Approval */}
          <div
            class="modal fade model_payment"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title " id="exampleModalCenterTitle">
                    Rent Payment
                  </h4>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-6 form_payment">
                        <label for="inputEmail4">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="inputEmail4"
                          placeholder="Email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPassword4">Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputPassword4"
                          placeholder="Name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputAddress">Benificiary </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                        value={formData.beneficiary}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            beneficiary: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div class="form-group">
                      <label for="inputAddress2">Property</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputAddress2"
                        placeholder="Apartment, studio, or floor"
                        value={formData.property}
                        onChange={(e) =>
                          setFormData({ ...formData, property: e.target.value })
                        }
                      />
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputCity">Amount</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputCity"
                          value={formData.Amount}
                          onChange={(e) =>
                            setFormData({ ...formData, Amount: e.target.value })
                          }
                        />
                      </div>

                      <div class="form-group col-md-6">
                        <label for="inputZip">Pin</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputZip"
                          value={formData.Pin}
                          onChange={(e) =>
                            setFormData({ ...formData, Pin: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary btn-lg btn-block btn_pay"
                      onClick={payment}
                    >
                      Pay Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="container paymentDashboard">
            <ul class="nav nav-tabs ">
              <li class="nav-item">
                <a
                  class="nav-link"
                  role="tab"
                  data-toggle="tab"
                  href="#paymentRecord"
                >
                  Payment Record
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  role="tab"
                  data-toggle="tab"
                  href="#Calander"
                >
                  Calander
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div
                className="row tab-pane rorow_dash"
                id="paymentRecord"
                role="tabpanel"
              >
               {payData && !loading && (
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">S.no</th>
                      <th scope="col">Against</th>
                      <th scope="col">Property</th>
                      <th scope="col">Day</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  {payData.map((pay, index) => (
                  <tbody key={index}>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{pay.beneficiary}</td>
                      <td>{pay.property}</td>
                      <td>{pay.pay_date}</td>
                      <td>
                        <span class="badge badge-primary">Paid</span>
                      </td>
                    </tr>
                  </tbody>
                   ))}
                </table>
                 )}
              </div>

              <div
                className="row tab-pane row_dash"
                id="Calander"
                role="tabpanel"
              >
                <Fullcalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  initialView={"dayGridMonth"}
                  headerToolbar={{
                    start: "today prev,next", // will normally be on the left. if RTL, will be on the right
                    center: "title",
                    end: "dayGridMonth", // will normally be on the right. if RTL, will be on the left
                  }}
                  height={"90vh"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentDashboard;