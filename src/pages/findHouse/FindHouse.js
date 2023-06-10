import { Layout } from '../../components/layout/Layout'
import './findHouse.css'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


export const FindHouse = () => {
  const [houses, setHouses] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost/FYP/profile.php', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          const retrievedUserId = data.profile.id;
          setUserId(retrievedUserId);
        }
      })
      .catch((error) => {
        console.error('Error fetching profile id:', error);
      });
  }, []);


  useEffect(() => {
    const getHouse = async ()=>{
        const res= await fetch ('http://localhost/FYP/API/houses.php');
        const data = await res.text();
        const cleanedData = data.replace('Connected successfully', '').trim();
        try {
          const jsonData = JSON.parse(cleanedData);
          
          setHouses(jsonData);
        } catch (error) {
          console.error('Error parsing JSON data:', error);
        }
      };
        getHouse();
      }, []);

        // Function to delete a property
        const deleteProperty = async (id) => {
          try {
            const response = await fetch(`http://localhost/FYP/API/houses.php?id=${id}`, {
              method: 'DELETE',
            });
            const data = await response.json();
            if (data.status === 'success') {
              // Property deleted successfully, update the UI by removing the property from the list
              setHouses((prevHouses) => prevHouses.filter((house) => house.property_id !== id));
            } else {
              console.error('Error deleting property:', data.message);
            }
          } catch (error) {
            console.error('Error deleting property:', error);
          }
        };
         
      

      // Create a new array with only one image per property
      const uniqueHouses = [];
      const propertyIds = new Set();
      for (const house of houses) {
        if (!propertyIds.has(house.property_id)) {
          uniqueHouses.push(house);
          propertyIds.add(house.property_id);
        }
      }

       // Function to calculate time ago difference between dates
          const getTimeAgo = (date) => {
            const currentDate = new Date();
            const fetchedDate = new Date(date);
            const timeDifference = currentDate - fetchedDate;
            const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

            if (daysDifference === 0) {
              return 'Today';
            } else if (daysDifference === 1) {
              return 'Yesterday';
            } else if (daysDifference < 7) {
              return `${daysDifference} days ago`;
            } else {
              const weeksDifference = Math.floor(daysDifference / 7);
              return `${weeksDifference} weeks ago`;
            }
          };

  return (
    <Layout>
      <section className="house_Cards">
        <div className="container">
       
           
         
          <div className="row row_cards">
             {/* Render fetched data in your cards */}
             {uniqueHouses.map(house => (
              
              <div key={house.id} className="col-md-3 col_cards">
                <div className="card">
                <img src={`http://localhost/FYP/API/uploads/${house.image}`} alt={house.id} />
                  <div className="card-body">
                    <h6 className="price">PKR. {house.price}</h6>
                    <hr className='card_line'/>
                    <p className="card-text details">{house.title},{house.city}</p>
                    
                    <span class="BedroomIcon"><i class="fa fa-bed" aria-hidden="true"></i>{house.beds}</span> <span class="ShowerIcon"> <i class="fa fa-bath" aria-hidden="true"></i>{house.bathrooms}</span>
                    <p className="posted_time mb-4">{getTimeAgo(house.datePosted)}</p> {/* Display time ago information */}
                    <Link className="btn_card btn btn-primary" to={`/HouseDetails/${house.property_id}`}>
                    Details
                  </Link>
                {userId && Number(house.user_id) === Number(userId) && (
                    <button className="btn_del btn btn-danger"  onClick={() => deleteProperty(house.property_id)}>
                      Delete
                    </button>
                  )}
              
                  </div>
                  
                </div>
              </div>
              ))} 
          </div> 

        

          </div>

        
      </section>
    </Layout>
  )
}
