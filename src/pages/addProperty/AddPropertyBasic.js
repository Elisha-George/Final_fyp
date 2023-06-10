import React, {useState, useEffect, useRef, useContext} from 'react';
import { Layout } from '../../components/layout/Layout'
import './AddPropertyBasic.css'
import axios from 'axios';




const AddPropertyBasic = () => {
 
  const [profileData, setProfileData] = useState(null);
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
          setProfileData(data.profile);
          const retrievedUserId = data.profile.id;
          setUserId(retrievedUserId);
        }
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  
  
  const initialState = {
    title: '',
    size: '',
    date: '',
    type: '',
    price: '',
    floors: '',
    floorNumber: '',
    image: '',
    address: '',
    city: '',
    area: '',
    electricity:'',
    gas:'',
    water:'',
    features:'',
  };
  const [step2Data, setStep2Data] = useState([]);
  const [step, setStep] = useState(1);
  const [step1Data, setStep1Data] = useState({});
  const [step3Data, setStep3Data] = useState({});
  const [isToggleOn1, setToggleOn1] = useState(false);
  const [isToggleOn2, setToggleOn2] = useState(false);
  const [isToggleOn3, setToggleOn3] = useState(false);
 

  

  const handleToggle1 = () => {
    setToggleOn1(!isToggleOn1);
    // Reset input value when hiding the text field
    if (!isToggleOn1) handleStep3Change("");
  };

  const handleToggle2 = () => {
    setToggleOn2(!isToggleOn2);
    // Reset input value when hiding the text field
    if (!isToggleOn2) handleStep3Change("");
  };
  const handleToggle3 = () => {
    setToggleOn3(!isToggleOn3);
    // Reset input value when hiding the text field
    if (!isToggleOn3) handleStep3Change("");
  };
  

  function handleStep2Change(event) {
    const files = Array.from(event.target.files);
    const images = [];
  files.forEach((file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Image = reader.result;
      images.push({ name: file.name, src: base64Image });
      if (images.length === files.length) {
        setStep2Data((prevImages) => [...prevImages, ...images]);
      }
    };
  });
}

  function handleImagePreviewRemove(imageName) {
    const newPreviewImages = step2Data.filter(
      (image) => image.name !== imageName
    );
    setStep2Data(newPreviewImages);
  }


  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleStep1Change = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStep1Data((data) => ({ ...data, [name]: value }));
  };

  const handleStep3Change = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStep3Data((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (window.confirm('Are you sure you want to submit this form?')) {
      const formData = new FormData();
      formData.append('userId', userId);
      formData.append('type', step1Data.type);
      formData.append('title', step1Data.title);
      formData.append('date', step1Data.date);
      formData.append('beds', step1Data.beds);
      formData.append('bathrooms', step1Data.bathrooms);
      formData.append('parking', step1Data.parking);
      formData.append('floors', step1Data.floors);
      formData.append('floorNumber', step1Data.floorNumber);
      formData.append('size', step1Data.size);
      formData.append('price', step1Data.price);
      formData.append('description', step1Data.description);
      formData.append('features', step1Data.features);
      formData.append('address', step3Data.address);
      formData.append('city', step3Data.city);
      formData.append('area', step3Data.area);
      formData.append('electricity', step3Data.electricity);
      formData.append('gas', step3Data.gas);
      formData.append('water', step3Data.water);
      
  
      step2Data.forEach((image) => {
        formData.append('image[]', image.src);
      });
  
      try {
        const response = await axios.post(
          'http://localhost/FYP/API/insert.php',
          formData,
          {
            headers: {
              'Content-Type': 'application/json.',
            },
          }
        );
        console.log(response.data);
        //reload form
        setStep1Data(initialState);
        setStep2Data([]);
        setStep3Data({});
        setStep(1);
      } catch (error) {
        console.error('An error occurred while making the POST request:');
        console.error(error);
      }
    }
  };
  

 

  
  
  
  let formContent;
  
  if (step === 1) {
    formContent = (
      <form onSubmit={handleNext}>
        {/* //Sub-heading */}
         <div className="container PropertyType ">
            <div className="row">
                <h4>Select the Property Type</h4>
            </div>
        </div>
        <div className="container">
        <div className="row buttonrow">
            <div className="wrapper">
                <div className="radio-buttons">
                  <label className="custom-radio">
                        <input type="radio" name="type" 
                        onChange={handleStep1Change}
                        value={'House'}
                        checked={step1Data.type === 'House'}/>
                        <div className="radio-btn">
                            <div className="content">
                              <span className="check-icon">
                                <span className="icon"></span>
                              </span>
                            </div>
                            <h2>House</h2>
                        </div>
                  </label>
                  <label className="custom-radio">
                        <input type="radio" name="type"
                          onChange={handleStep1Change}
                          value={'Flat'}
                          checked={step1Data.type === 'Flat'}/>
                        <div className="radio-btn">
                            <div className="content">
                              <span className="check-icon">
                                <span className="icon"></span>
                              </span>
                            </div>
                            <h2>Flat</h2>
                        </div>
                  </label>
                </div>
              </div>
        </div>
        </div>
        <div className="container PropertyType  ">
        <div className="row">
            <h4>Add the Title, Size, Price & More</h4>
        </div>
        </div>
        <div className="container PropertySubfeatures mt-5">
            <div className="row">
                      <div className="col-md-12 mb-5">
                          <div className="">
                              <label >Title <span>*</span></label>
                              <textarea type="text" name='title'  className="form-control" id="inputEmail4" 
                              placeholder='Your property title here'
                              onChange={handleStep1Change}
                              value={step1Data.title || ''} 
                             />
                          </div>
                      </div>
                      
                      <div className="col-md-3">
                          <label >Select date for rent:<span>*</span></label>
                          <input type="date" className="form-control"  id="inputEmail4"  name="date"  
                          onChange={handleStep1Change}
                          value={step1Data.date || ''} />
                      </div>
                      <div className="col-md-3">
                          <label >Bedrooms:<span>*</span></label>
                          <input type="number" className="form-control"  id="inputEmail4"  name="beds"  min="1"
                          onChange={handleStep1Change}
                          value={step1Data.beds || ''} />
                      </div>
                      <div className="col-md-3">
                          <label >Bathrooms:<span>*</span></label>
                          <input type="number" className="form-control"  id="inputEmail4"  name="bathrooms" min="1" 
                          onChange={handleStep1Change}
                          value={step1Data.bathrooms || ''} />
                      </div>
                      <div className="col-md-3">
                          <label >Parking:<span>*</span></label>
                          <input type="number" className="form-control"  id="inputEmail4"  name="parking"  min={0}
                          onChange={handleStep1Change}
                          value={step1Data.parking || ''} />
                      </div>
                </div>
        </div>

    
        
          <div className="container PropertySubfeatures propertyGap mt-5">
              <div className="row">
                  <div className="col-md-3">
                      <div className="">
                          <label >Number of floors <span>*</span></label>
                          <input type="number"  name='floors' className="form-control" id="inputEmail4" placeholder="Enter the number of floors" min="0" 
                          onChange={handleStep1Change}
                          value={step1Data.floors || ''}  />
                      </div>
                  </div>
                      <div className="col-md-3">
                          <label >Which floor is your unit on<span>*</span></label>
                          <input type="number"  name='floorNumber' className="form-control" id="inputEmail4" placeholder="Enter the floor" min="0"
                          onChange={handleStep1Change}
                          value={step1Data.floorNumber || ''} />
                      </div>
                      <div className="col-md-3">
                          <label >Property Size <span>*</span></label>
                          <input type="number" min="0" name='size' className="form-control" id="inputEmail4" placeholder="Size in square yards"
                          onChange={handleStep1Change}
                          value={step1Data.size || ''} />
                      </div>
                      <div className="col-md-3">
                          <label >Price<span>*</span></label>
                          <input type="number"  name='price' inputMode='numeric' className="form-control" id="inputEmail4" placeholder="Enter the Property Price" min="0"
                          onChange={handleStep1Change}
                          value={step1Data.price || ''} />
                      </div>

                      <div className="col-md-12 mt-5">
                          <div className="">
                              <label >Description <span>*</span></label>
                              <textarea type="text" name='description'  className="form-control" id="inputEmail4" 
                              placeholder='Write your property description here ...'
                              onChange={handleStep1Change}
                              value={step1Data.description || ''}
                              rows={8} 
                             />
                          </div>
                      </div>

                      <div className="col-md-12 mt-3">
                          <div className="">
                              <label >Key Features</label>
                              <textarea type="text" name='features'  className="form-control" id="inputEmail4" 
                              placeholder='Write your key features of your property here ...'
                              onChange={handleStep1Change}
                              value={step1Data.features || ''}
                              rows={3} 
                             />
                             
                          </div>
                      </div>
                
                  </div>
          </div>
            <div className="bottom-bar">
                <div className="container-fluid propertyBasisContainer">
                  <button className="previous" disabled aria-disabled="true">&#8249; Previous</button>
                  <button type="submit" className="next">Next &#8250; </button>
                </div>
            </div>
      </form>
    );
  } 
  else if (step === 2) {
    formContent = (
      <form onSubmit={handleNext}>
        <div className="container PropertyType">
          <div className="row">
            <h4>Upload images of your property</h4>
          </div>

          <div className="upload-container propertyGap">
            <h2>Upload Images</h2>
            <p>Click the button below to upload multiple images</p>
            <label htmlFor="file-input" className="upload-btn">
              Choose Images
            </label>
            <input
              id="file-input"
              name='image'
              type="file"
              accept="image/*"
              multiple
              onChange={handleStep2Change}
            />
              <div className="image-preview-container">
                {step2Data.map((image) => (
                  <div className="image-preview-card" key={image.name}>
                      <div className="image-preview-img">
                        <img src={image.src} alt={image.name} />
                          <button
                            className="image-preview-remove-btn"
                            onClick={() => handleImagePreviewRemove(image.name)}
                          >
                            &#10006;
                          </button>
                      </div>
                      <p>{image.name}</p>
                  </div>
                ))}
              </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container-fluid propertyBasisContainer">
          <button className="previous" onClick={handlePrev}>&#8249; Previous</button>
          <button type="submit" className="next">Next &#8250; </button>
        </div>
      </div>
      
      
     
      </form>
    );

  }
  
  else if (step === 3) {
    formContent = (
      <form onSubmit={handleSubmit}>
        
        <div className="container PropertyType  ">
        <div className="row">
            <h4>Add the Location of your property</h4>
        </div>
        </div>
        <div className="container propertyGap PropertySubfeatures">
              <div className="row">
              <div className="col-md-6">
                <label >City<span>*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    id="pCity"
                    name='city'
                    onChange={handleStep3Change}
                    value={step3Data.city || ''}
                  />
                </div>
                <div className=" col-md-6">
                <label >Area<span>*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    id="pArea"
                    name='area'
                    onChange={handleStep3Change}
                    value={step3Data.area || ''}
                    
                  />
                </div>
                <div className="col-md-12 mb-3 mt-4">
                  <label >Property Address<span>*</span></label>
                  <textarea
                  name='address'
                    type="text"
                    className="form-control addresstext"
                    id="pAddress"
                    onChange={handleStep3Change}
                        value={step3Data.address || ''}
                        rows="4"
                  />
               </div>
               <div className="container PropertyType  ">
                  <div className="row">
                      <h4>Select Basic Necessities that are available</h4>
                  </div>
               </div>
               <div className=" col-md-4">
               <label>
               <input className='radiospan' type="checkbox" checked={isToggleOn1} onChange={handleToggle1} />
                Electricity 
                </label>
                {isToggleOn1 && (
                  <input
                    type="number"
                    className="form-control"
                    name='electricity'
                    placeholder='max hrs' min='1'
                    onChange={handleStep3Change}
                    value={step3Data.electricity || ''}  
                  />
                  )}
                </div>
                <div className=" col-md-4">
               <label>
               <input className='radiospan' type="checkbox" checked={isToggleOn2} onChange={handleToggle2} />
                Gas 
                </label>
                {isToggleOn2 && (
                  <input
                    type="number"
                    className="form-control"
                    name='gas'
                    placeholder='max hrs' min='1'
                    onChange={handleStep3Change}
                    value={step3Data.gas || ''}  
                  />
                  )}
                </div>
                <div className=" col-md-4">
               <label>
               <input className='radiospan' type="checkbox" checked={isToggleOn3} onChange={handleToggle3} />
                Water 
                </label>
                {isToggleOn3 && (
                  <input
                    type="number"
                    className="form-control"
                    name='water'
                    placeholder='max hrs' min='1'
                    onChange={handleStep3Change}
                    value={step3Data.water || ''}  
                  />
                  )}
                </div>
               
            </div>
        </div>
       
        <div className="bottom-bar">
            <div className="container-fluid propertyBasisContainer">
              <button className="previous" onClick={handlePrev}>&#8249; Previous</button>
              <button type="submit" className="next">Submit</button>
            </div>
        </div>
          
      </form>
    )}

   
  return (
  
    <Layout>
   


      <section>
        <div className="container">
          <div className="row">
            <div className="MainHeading">
              <h1>ADD PROPERTY</h1><p></p>
            </div>
          </div>
        </div>
            
    <div className="container ">
        <div className="row">
            <div className="progressbar-wrapper ">
                <ul className="progressbar">
                <li className={step === 1 ? 'active' : ''}>Step 1</li>
                    <li className={step === 2 ? 'active' : ''}>Step 2</li>
                    <li className={step === 3 ? 'active' : ''}>Step 3</li>
                    
                </ul>
          </div>
        </div>
    </div>
        {formContent}
      </section>
    </Layout>
  );
};

export default AddPropertyBasic;
