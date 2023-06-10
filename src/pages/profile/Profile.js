import "./profile.css";
import { Layout } from "../../components/layout/Layout";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [loading, setLoading] = useState(true); // New state variable

  const [profileData, setProfileData] = useState(null);
  const [biddingData, setBiddingData] = useState(null);
  const [tenData, settenData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cnic: "",
  });
  const [selectedBidStatus, setSelectedBidStatus] = useState("");

  const handleEdit = () => {
    setEditMode(true);
    setFormData({
      name: profileData.name,
      cnic: profileData.cnic,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    // Prepare the updated profile data
    const updatedProfileData = {
      ...profileData,
      name: formData.name,
      cnic: formData.cnic,
    };
    const token = localStorage.getItem("token");
    // Send a request to the backend API to update the profile data
    fetch("http://localhost/FYP/update_profile.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedProfileData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setProfileData(updatedProfileData);
          setEditMode(false);
        } else {
          // Handle error response
        }
      })
      .catch((error) => {
        // Handle error
      });
      
  };

  useEffect(() => {
    // Fetch profile data using the stored token or handle authentication state appropriately
    const token = localStorage.getItem("token");

    // Send a request to the backend API to fetch user profile data using the token
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
    fetch("http://localhost/FYP/profile.php", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setProfileData(data.profile);
          setBiddingData(data.biddingData);
          settenData(data.tenData);
        } else {
          // Handle error response
        }
      })
      .catch((error) => {
        // Handle error
      })
      .finally(() => {
        setLoading(false); // Set loading state to false when the data is fetched
      });
  }, []);

  const handleBidAccept = (bidId) => {
    const token = localStorage.getItem("token");
    // Send a request to the backend API to update the bid status as accepted
    fetch(`http://localhost/FYP/profile.php?bid_id=${bidId}&status=accepted`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          // Update the bidding data in the frontend to reflect the accepted status
          const updatedBiddingData = biddingData.map((bid) => {
            if (bid.bid_id === bidId) {
              return {
                ...bid,
                status: "accepted",
              };
            }
            return bid;
          });
          setBiddingData(updatedBiddingData);
          setSelectedBidStatus("accepted"); 
        } else {
          // Handle error response
        }
      })
      .catch((error) => {
        // Handle error
      });
  };

  const handleBidReject = (bidId) => {
    const token = localStorage.getItem("token");
    // Send a request to the backend API to update the bid status as rejected
    fetch(`http://localhost/FYP/profile.php?bid_id=${bidId}&status=rejected`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          // Update the bidding data in the frontend to reflect the rejected status
          const updatedBiddingData = biddingData.map((bid) => {
            if (bid.bid_id === bidId) {
              return {
                ...bid,
                status: "rejected",
              };
            }
            return bid;
          });
          setBiddingData(updatedBiddingData);
          setSelectedBidStatus("rejected"); // Disable the "Accept" button for the selected bid
        } else {
          // Handle error response
        }
      })
      .catch((error) => {
        // Handle error
      });
  };

  const renderButton = (bid) => {
    
    if (bid.status === "accepted") {
      return <button type="button" className="btn btn-primary btn_pay_now">Pay Now</button>;
    } else if (bid.status === "rejected") {
      return (
        <button type="button" className="btn btn-outline-danger reject_button" disabled>
          Rejected
        </button>
      );
    } else {
      return (
        <>
        <button
          type="button"
          className={`btn btn-primary btn_pay_now ${selectedBidStatus === "accepted" ? "disabled-button" : ""}`}
          onClick={() => handleBidAccept(bid["bid_id "])}
          style={{ cursor: selectedBidStatus === "accepted" ? "not-allowed" : "pointer" }}
          disabled={selectedBidStatus === "accepted"}
        >
          {selectedBidStatus === "accepted" ? "Processing..." : "Accept"}
        </button>
        <button
        type="button"
        className={`btn btn-outline-danger reject_button ${selectedBidStatus === "rejected" ? "disabled-button" : ""}`}
        onClick={() => handleBidReject(bid["bid_id "])}
        style={{ cursor: selectedBidStatus === "rejected" ? "not-allowed" : "pointer" }}
        disabled={selectedBidStatus === "rejected"}
        >
        {selectedBidStatus === "rejected" ? "Processing..." : "reject"}
      </button>
      
      </>
      );
    }
  };
  const handleLogout = () => {
    // Remove the token from local storage and redirect to the login page
    localStorage.removeItem("token");
    window.location.href = "/Login"; // Replace with the appropriate route for your login page
  };

  return (
    <Layout>
      <section className="mb-5 mt-5">
        <div className="container">
          <div className="row">
            {profileData ? (
              <div className="col-md-9 personal_info">
                <h3 className="porfile_heading">
                  Hi, <span> {profileData.name}</span>
                </h3>
                <p className="Cnic">
                  <span>CNIC:</span> {profileData.cnic}
                </p>
                <p className="email">
                  <span>EMAIL:</span> {profileData.email}
                </p>
                <button type="button" onClick={handleLogout}>
                  Logout
                </button>

                <button type="button" className="ml-4" onClick={handleEdit}>
                  Edit
                </button>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        {editMode && (
          <div className="col-md-9 personal_info">
            <h3 className="porfile_heading">Edit Profile</h3>
            <form onSubmit={handleSave}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <label htmlFor="cnic">CNIC:</label>
              <input
                type="text"
                id="cnic"
                value={formData.cnic}
                onChange={(e) =>
                  setFormData({ ...formData, cnic: e.target.value })
                }
              />

              <div>
                <button type="submit">Save</button>
                <button type="button" onClick={() => setEditMode(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </section>

      <section className="sec_profile_body">
        <div className="container">
          <div className="row">
            <div className="col-md-2 left_body">
              <h5 className="left_heading">Ratings</h5>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <Link className="btn_left btn btn-primary" to="/AddPropertyBasic">
                Add Property
              </Link>
            </div>
            {/* center  */}
            {biddingData && !loading && (
              
              <div className="col-md-6 center_body left_body">
               <h6 className="pt-1">Bid Count: {biddingData.length}</h6> {/* Add this line */}
                <h5>Tenants Requests</h5>
                {biddingData.map((bid, index) => (
                  <div className="row_dues col-md-12" key={index}>
                    
                    
                    <h6 className="pt-1 ">{bid.name}</h6>
                    {/* <span> bid id </span> {bid["bid_id "]} */}
                    <p className="outstanding_dues">
                      <span> Price </span> {bid.amount}
                      
                    </p>
                    <p className="outstanding_dues">
                      <span> Property </span> {bid.title}
                    </p>
                    <div className="AcceptRejectBtn">
                    {renderButton(bid)}
                     
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* second table */}

            {tenData && !loading && (
              
              <div className="col-md-6 center_body left_body mt-5">
                <h5>Sending Requests</h5>
                {tenData.map((ten, index) => (
                  <div className="row_dues col-md-12" key={index}>
 <h6 className="pt-1 ">{ten.title}</h6>
        	  <p className="outstanding_dues">
                      <span> Price </span> {ten.amount}
                      
                    </p>
                    <p className="outstanding_dues">
                      <span> Property </span> {ten.title}
                    </p>
                    <div className="AcceptRejectBtn">
                    <span> {ten.status} </span>   
                    </div>
                  </div>
                ))}
              </div>
            )}






          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
