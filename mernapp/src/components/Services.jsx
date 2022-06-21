import React from "react";

const Services = () => {
  return (
    <div>
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Our Services</h3>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                    <i className="fa fa-user-md fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Look For A Doctor Online</h5>
                  <p className="card-text lead">
                     Connect securely from anytime and anywhere for instant doctor consultation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                    <i className="fa fa-mobile fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Book An Appointment</h5>
                  <p className="card-text lead">
                     Get Confirmed Appointment with Top Doctors and Surgeons.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                    <i className="fa fa-heart fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Make A Donation</h5>
                  <p className="card-text lead">
                  Your support can help make a difference in the lives of the people in our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                    <i className="fa fa-users fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Join Our Team</h5>
                  <p className="card-text lead">
                  Search our openings and apply for jobs that'll surround you with great teammates to support your ideas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                    <i className="fa fa-map-pin fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Find Our Locations</h5>
                  <p className="card-text lead">
                    Check out our other locations for your easy assistance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 ">
                <div className="card-body text-center">
                    <i className="fa fa-reorder fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Patient Resources</h5>
                  <p className="card-text lead">
                  Toolkits, recommendations, and other resources for hospitals and hospital administrators to improve quality and increase patient safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;