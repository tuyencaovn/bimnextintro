import React, { useState, useContext, useEffect } from 'react';

const Testimonial = () => {

    useEffect(() => {

    }, []);

    return(
        <div className="testimonial-area-l-11">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-9" data-aos="fade-down" data-aos-duration="800" data-aos-once="true">
                        <div className="section-heading-5 text-center">
                            <h2>
                                30,000+ Customers Trust Us
                            </h2>
                            <p>We designed and tested prototypes that helped
                                identify pain points in the account creation process. Together, we shaped the new standard.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
                    <div className="col-xl-10 col-lg-12 col-md-10">
                        <div className="testimonial-slider-l-11 position-relative">
                            <div className="single-slide focus-reset">
                                <div className="testimonial-card">
                                    <p>
                                        <span className="d-inline-block quote-size-1">“</span> You made it so simple. My new site is
                                        so much faster
                                        and easier to work with than my old site. I just choose the page, make the change and
                                        click save. Thanks, guys!”
                                    </p>
                                    <div className="d-flex user-details align-items-center">
                                        <div className="customer-img">
                                            <img src="assets/image/l2/client-img-2.png" alt="" />
                                        </div>
                                        <div className="user-identity">
                                            <h5>Sallie Lawson</h5>
                                            <span>Founder of Crips</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-slide focus-reset">
                                <div className="testimonial-card">
                                    <p>
                                        <span className="d-inline-block quote-size-1">“</span> You made it so simple. My new site is
                                        so much faster
                                        and easier to work with than my old site. I just choose the page, make the change and
                                        click save. Thanks, guys!”
                                    </p>
                                    <div className="d-flex user-details  align-items-center">
                                        <div className="customer-img">
                                            <img src="assets/image/l2/client-img-1.png" alt="" />
                                        </div>
                                        <div className="user-identity">
                                            <h5>Ella Brooks</h5>
                                            <span>Founder of Crips</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-slide focus-reset">
                                <div className="testimonial-card rounded">
                                    <p>
                                        <span className="d-inline-block quote-size-1">“</span> You made it so simple. My new site is
                                        so much faster
                                        and easier to work with than my old site. I just choose the page, make the change and
                                        click save. Thanks, guys!”
                                    </p>
                                    <div className="d-flex user-details  align-items-center">
                                        <div className="customer-img">
                                            <img src="assets/image/l2/client-img-2.png" alt="" />
                                        </div>
                                        <div className="user-identity">
                                            <h5>Sallie Lawson</h5>
                                            <span>Founder of Crips</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;