import { Layout } from '../../components/layout/Layout'
import './AddPropertyBasic.css'
import React, { useState, useEffect } from "react";

const AddPropertAddress = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch("https://api.zippopotam.us/PK");
        const data = await response.json();
        const states = data.states.map((state) => ({ value: state.abbreviation, label: state.name }));
        setStates(states);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStates();
  }, []);

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setSelectedArea(null);
  };

  const handleAreaChange = (selectedOption) => {
    setSelectedArea(selectedOption);
  };

  return (
    <div>
      <div>
        <label htmlFor="state">State:</label>
        <select
          id="state"
          value={selectedState}
          onChange={(e) => handleStateChange(e.target.value)}
        >
          <option value="">Select a state</option>
          {states.map((state) => (
            <option key={state.value} value={state.value}>
              {state.label}
            </option>
          ))}
        </select>
      </div>
      {selectedState && (
        <div>
          <label htmlFor="area">Area:</label>
          <select
            id="area"
            value={selectedArea}
            onChange={(e) => handleAreaChange(e.target.value)}
            // disabled={!selectedState}
          >
            <option value="">Select an area</option>
            {/* Replace the API URL with the actual URL of the API that provides area data for the selected state */}
            {/* This assumes that the API returns an array of area objects, each with an `id` and `name` property */}
            {selectedState &&
              selectedState.areas.map((area) => (
                <option key={area.value} value={area.value}>
                  {area.label}
                </option>
              ))}
          </select>
        </div>
      )}
    </div>
  );
};
export default AddPropertAddress;
