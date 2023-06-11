import { Layout } from '../../components/layout/Layout'
import './findHouse.css'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export const FindHouse = () => {
  const [houses, setHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [userId, setUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [cityFilter, setCityFilter] = useState('');
  const [bedroomsFilter, setBedroomsFilter] = useState('');
  const [bathroomsFilter, setBathroomsFilter] = useState('');

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
    const getHouses = async () => {
      const res = await fetch(`http://localhost/FYP/API/houses.php?page=${currentPage}`);
      const data = await res.json();
      if (data.status === 'success') {
        setHouses(data.houses);
        setTotalPages(data.totalPages);
      } else {
        console.error('Error fetching houses:', data.message);
      }
    };
    getHouses();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const getHouse = async () => {
      const res = await fetch('http://localhost/FYP/API/houses.php');
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

  useEffect(() => {
    const applyFilters = () => {
      let filteredData = houses;
      if (cityFilter !== '') {
        filteredData = filteredData.filter((house) => house.city === cityFilter);
      }
      if (bedroomsFilter !== '') {
        filteredData = filteredData.filter((house) => house.beds === bedroomsFilter);
      }
      if (bathroomsFilter !== '') {
        filteredData = filteredData.filter((house) => house.bathrooms === bathroomsFilter);
      }
      setFilteredHouses(filteredData);
    };
    applyFilters();
  }, [houses, cityFilter, bedroomsFilter, bathroomsFilter]);

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
  for (const house of filteredHouses) {
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
        <div className="container filter-bar">
          <select
            className="filter-select"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
          >
            <option value="">City</option>
            <option value="Karachi">Karachi</option>
          </select>

          <input
            type="text"
            className="filter-input"
            placeholder="Bedrooms"
            value={bedroomsFilter}
            onChange={(e) => setBedroomsFilter(e.target.value)}
          />
          <input
            type="text"
            className="filter-input"
            placeholder="Bathrooms"
            value={bathroomsFilter}
            onChange={(e) => setBathroomsFilter(e.target.value)}
          />
          <button className="filter-submit">Filter Review</button>
        </div>

        <div className="container">
          <h3 className="text-center">Properties For You</h3>

          <div className="row row_cards">
            {uniqueHouses.map((house) => (
              <div key={house.id} className="col-md-3 col-sm-6 col_cards">
                <div className="card">
                  <img
                    src={`http://localhost/FYP/API/uploads/${house.image}`}
                    alt={house.id}
                  />
                  <div className="card-body">
                    <h6 className="price">PKR. {house.price}</h6>
                    <hr className="card_line" />
                    <p className="card-text details">
                      {house.title}, {house.city}
                    </p>
                    <div className="homeIcons">
                      <span className="BedroomIcon">
                        <i className="fa fa-bed" aria-hidden="true"></i>
                        {house.beds}
                      </span>{' '}
                      <span className="ShowerIcon">
                        {' '}
                        <i className="fa fa-bath" aria-hidden="true"></i>
                        {house.bathrooms}
                      </span>
                    </div>
                    <p className="posted_time mb-4">
                      {getTimeAgo(house.datePosted)}
                    </p>
                    <Link
                      className="btn_card btn btn-primary"
                      to={`/HouseDetails/${house.property_id}`}
                    >
                      Details
                    </Link>
                    {userId &&
                      Number(house.user_id) === Number(userId) && (
                        <button
                          className="btn_del btn btn-danger "
                          onClick={() => deleteProperty(house.property_id)}
                        >
                          Delete
                        </button>
                      )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination_forCards">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li
                  className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
                >
                  <button
                    className="page-link pagination_links"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index + 1}
                    className={`page-item ${
                      currentPage === index + 1 ? 'active' : ''
                    }`}
                  >
                    <button
                      className="page-link pagination_items"
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? 'disabled' : ''
                  }`}
                >
                  <button
                    className="page-link pagination_links"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FindHouse;
