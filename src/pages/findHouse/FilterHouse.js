import React from 'react'
import { Layout } from '../../components/layout/Layout'
import './findHouse.css'
import { Link, useNavigate } from 'react-router-dom';

import cardImg from '../../images/banner_img.jpg'

export const FilterHouse = () => {


    





    return (
        <Layout>

            <section className="filterDropdowns">
                <div className="container">


                    <div className="row row_dropdown">

                        <div className="col-md-3">
                            <div class="dropdown row_1_dropdown" id='row_1_drop_down_1' >
                                <a class="text-left btn btn-lg btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">

                                    select Location (City)
                                </a>

                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div class="dropdown row_1_dropdown" id='row_1_drop_down_2'>
                                <a class="text-left btn btn-lg btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Select Areas
                                </a>

                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div class="dropdown row_1_dropdown" id='row_1_drop_down_3'>
                                <a class="text-left btn btn-lg btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Area (Min -to- Max)
                                </a>

                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>

                    </div>




                    <div className="row">

                        <div className="col-md-3">
                            <div class="dropdown row_2_dropdown" id='row_2_drop_down_1' >
                                <a class="text-left btn btn-lg btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Price (Pkr)
                                </a>

                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div class="dropdown row_1_dropdown" id='row_2_drop_down_2'>
                                <a class="text-left btn btn-lg btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Property Type
                                </a>

                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div class="dropdown row_1_dropdown" id='row_2_drop_down_3'>
                                <a class="text-left btn btn-lg btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Bedrooms
                                </a>

                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>


                        </div>

                        <div className="col-md-3">
                            <div class="dropdown row_1_dropdown" id='row_2_drop_down_4'>
                                <a class="text-left btn btn-lg btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Bathrooms
                                </a>

                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


            <section className="house_Cards">

                <div className="container">
                    <div className="row row_cards">

                        <div className="col-md-3 col_cards">

                            <div class="card">
                                <img src={cardImg} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h6 class="price">PKR 2.5 lacs</h6>
                                    <hr className='card_line'/>
                                    <p class="card-text details">1200 sqft Flat For Rent in Nisther Town , Karachi</p>

                                    <p className='posted_time'>1 Week Ago</p>
                                    <a href="#" class="btn_card btn btn-primary">
                                    <Link to="/HouseDetails">Email</Link> 
                                    </a>


                                </div>
                            </div>

                        </div>



                        <div className="col-md-3 col_cards">

                            <div class="card">
                                <img src={cardImg} class="card-img-top" alt="..." />
                                <div class="card-body">
                                <h6 class="price">PKR 2.5 lacs</h6>

                                <hr className='card_line'/>
                                    <p class="card-text details">1200 sqft Flat For Rent in Nisther Town , Karachi</p>

                                    <p className='posted_time'>1 Week Ago</p>
                                    <a href="#" class="btn_card btn btn-primary">
                                    <Link to="/HouseDetails">Email</Link> 
                                    </a>


                                </div>
                            </div>


                        </div>

                        <div className="col-md-3 col_cards">

                            <div class="card">
                                <img src={cardImg} class="card-img-top" alt="..." />
                                <div class="card-body">
                                <h6 class="price">PKR 2.5 lacs</h6>
                                <hr className='card_line'/>
                                    <p class="card-text details">1200 sqft Flat For Rent in Nisther Town , Karachi</p>

                                    <p className='posted_time'>1 Week Ago</p>
                                    <a href="#" class="btn_card btn btn-primary">
                                    <Link to="/HouseDetails">Email</Link> 
                                    </a>


                                </div>
                            </div>

                        </div>

                        <div className="col-md-3 col_cards">

                            <div class="card">
                                <img src={cardImg} class="card-img-top" alt="..." />
                                <div class="card-body">
                                <h6 class="price">PKR 2.5 lacs</h6>
                                <hr className='card_line'/>
                                    <p class="card-text details">1200 sqft Flat For Rent in Nisther Town , Karachi</p>

                                    <p className='posted_time'>1 Week Ago</p>
                                    <a href="#" class="btn_card btn btn-primary">
                                    <Link to="/HouseDetails">Email</Link> 
                                    </a>

                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="row row_cards">

<div className="col-md-3 col_cards">

    <div class="card">
        <img src={cardImg} class="card-img-top" alt="..." />
        <div class="card-body">
            <h6 class="price">PKR 2.5 lacs</h6>
            <hr className='card_line'/>
            <p class="card-text details">1200 sqft Flat For Rent in Nisther Town , Karachi</p>

            <p className='posted_time'>1 Week Ago</p>
            <a href="" class="btn_card btn btn-primary">
            <Link to="/HouseDetails">Email</Link> 
            </a>


        </div>
    </div>

</div>



<div className="col-md-3 col_cards">

    <div class="card">
        <img src={cardImg} class="card-img-top" alt="..." />
        <div class="card-body">
        <h6 class="price">PKR 2.5 lacs</h6>

        <hr className='card_line'/>
            <p class="card-text details">1200 sqft Flat For Rent in Nisther Town , Karachi</p>

            <p className='posted_time'>1 Week Ago</p>
            <a href="#" class="btn_card btn btn-primary">
            <Link to="/HouseDetails">Email</Link> 
            </a>


        </div>
    </div>


</div>

<div className="col-md-3 col_cards">

    <div class="card">
        <img src={cardImg} class="card-img-top" alt="..." />
        <div class="card-body">
        <h6 class="price">PKR 2.5 lacs</h6>
        <hr className='card_line'/>
            <p class="card-text details">1200 sqft Flat For Rent in Nisther Town , Karachi</p>

            <p className='posted_time'>1 Week Ago</p>
            <a href="#" class="btn_card btn btn-primary">
            <Link to="/HouseDetails">Email</Link> 
            </a>


        </div>
    </div>

</div>

<div className="col-md-3 col_cards">

    <div class="card">
        <img src={cardImg} class="card-img-top" alt="..." />
        <div class="card-body">
        <h6 class="price">PKR 2.5 lacs</h6>
        <hr className='card_line'/>
            <p class="card-text details">1200 sqft Flat For Rent in Nisther Town , Karachi</p>

            <p className='posted_time'>1 Week Ago</p>
            <a href="#" class="btn_card btn btn-primary">
            <Link to="/HouseDetails">Email</Link> 
            </a>

        </div>
    </div>

</div>


</div>
                </div>


            </section>




        </Layout>
    )
}
