import React, { useState, useContext, useEffect } from 'react';

const Hero = () => {

    useEffect(() => {

    }, []);

    return(
        <div className="hero-area-l11 position-relative z-index-1 overflow-hidden">
            <div className="container position-relative">
                <div className="row position-relative justify-content-center">
                    <div className="col-xl-8 col-lg-9 col-md-12 order-lg-1 order-1" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                        <div className="content">
                            <h1>HỆ THỐNG CDE<br className="d-none d-md-block" /> Môi trường dữ liệu chung.</h1>
                            <div className="row banner-l-11-bottom-content">
                                <div className="col-lg-8 col-md-8 col-sm-10">
                                <p className="position-relative banner-main-content-l-11">
                                    Quản trị thông tin dự án xây dựng
                                    với định hướng BIM. Đảm bảo thông tin
                                    tập trung tại một đầu mối.
                                    <span className="line-left-content"></span>
                                </p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 flex-y-center ">
                                    <a className="btn l-11-hero-btn" href="http://app.bimnext.vn">Dùng thử miễn phí</a>
                                </div>
                                <div className="col-xl-3 col-lg-4">
                                    <div className="compitable-text border-top d-inline-block">
                                        <p>Đa nền tảng:</p>
                                        <div className="compatible-icon flex-y-center img-grayscale">
                                            <img src="./assets/image/l2/desktop.svg" alt="" width="25%" className="mr-20"/>
                                            <img src="./assets/image/l2/laptop.svg" alt="" width="25%" className="mr-20"/>
                                            <img src="./assets/image/l2/mobile.svg" alt="" width="25%"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 order-lg-1 order-0" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
                        <img src="assets/image/l2/laptop-screen.png" alt="" className="w-100 hero-l11-main-image" />
                    </div>
                </div>
            </div>
            <div className="hero-shape-l11-1 d-none d-md-block">
                <img src="./assets/image/l2/hero-shape-1.svg" alt="" />
            </div>
            <div className="hero-shape-l11-2 d-none d-md-block">
                <img src="./assets/image/l2/hero-shape-2.png" alt="" />
            </div>
        </div>               
    );
}

export default Hero;