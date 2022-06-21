import React from "react";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">Here's To Your Health !</h1>
                            <h3 className="display-7 fw-bolder mb-4 text-center text-white">Revolutionizing Care</h3>
                            <p className="lead text-center fs-4 mb-5 text-white">Our Hospital has been consistently ranked as one of the world's best by <em>U.S News & World Report .</em></p>
                            <div className="buttons d-flex justify-content-center">
                                <NavLink to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">Queries</NavLink>
                                <NavLink to="/service" className="btn btn-outline-light rounded-pill px-4 py-2">Medical Services</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About/>
            <Services/>
            <Contact/>
        </div>
    );
}

export default Home;