import '../Style.css';
import { Nav } from '../Nav';
export const Property = () => {
    return (
        <div>
            <Nav />

            <section className="property_head">
                <h1 className='text-center'>
                    Add Property
                </h1>

                <hr className='property_head_line' />
            </section>

            {/* Step Progress Bar */}

            <section className="sec_step_progress">

            </section>

            <section className="property_page2_info">
                <div className="container">
                    <div className="row row_property_title">
                        <h2>
                            Add the Title Size and Discription
                        </h2>
                    </div>


                    <div className="row property_page2_inputs">

                        <div className="container">

                            <div className="row row_labels_title_size">
                                <div className="col-md-6">
                                    <h4>Title</h4>
                                </div>
                                <div className="col-md-6">
                                    <h4>Size</h4>
                                </div>
                            </div>


                            <div className="row">

                                <div className="col-md-6">
                                    <div className="input_title">

                                        <div class="input-group input-group-lg">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="inputGroup-sizing-lg">Title</span>
                                            </div>
                                            <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                                        </div>



                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input_property_size">
                                        <div class="input-group input-group-lg">
                                            <label htmlFor=""></label>
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="inputGroup-sizing-lg">Marla</span>
                                            </div>
                                            <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>





                    </div>

                    <div className="row bed_bath_car">

                        <div className="col-md-4">
                            Bedrooms
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown button
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">
                            Bathrooms
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown button
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">

                            Car Park

                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown button
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>


            <section className="sec_description">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}