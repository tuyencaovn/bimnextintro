import React, { useState, useContext, useEffect } from 'react';

const Brand = () => {

    useEffect(() => {

    }, []);

    return(
        <div className="brand-area-l11">
            <div className="container">
                <div className="row img-grayscale">
                    <div className="col-lg-12" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
                        <div className="brand-logos d-flex justify-content-center justify-content-xl-between align-items-center flex-wrap ">
                            <div className="single-brand">
                                <img src="assets/image/l2/brand-logo.svg" alt=""/>
                            </div>
                            <div className="single-brand">
                                <img src="assets/image/l2/brand-logo-1.svg" alt=""/>
                            </div>
                            <div className="single-brand">
                                <img src="assets/image/l2/brand-logo-2.svg" alt=""/>
                            </div>
                            <div className="single-brand">
                                <img src="assets/image/l2/brand-logo-3.svg" alt=""/>
                            </div>
                            <div className="single-brand">
                                <img src="assets/image/l2/brand-logo-4.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brand;