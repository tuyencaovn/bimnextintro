import React, { useState, useContext, useEffect } from 'react';

const ContentThree = () => {

    useEffect(() => {

    }, []);

    return(
        <div className="content-area-l-11-3 position-relative">
            <div className="container">
                <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-xl-6 col-lg-6 col-md-8 order-lg-1 order-0" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                        <div className="content-img">
                            <img src="assets/image/l2/tasks.jpg" alt="" className="w-100" />
                        </div>
                    </div>
                    <div className="offset-xl-1 col-xl-5 col-lg-6 col-md-9 order-lg-1 order-1" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                        <div className="content section-heading-5">
                            <h2>Nguồn thông tin tập trung của dự án.</h2>
                            <p>Môi trường sử dụng để thu thập, quản lý và phổ biến tài liệu, mô hình hình học và phi hình học của dự án. </p>
                            <ul className="list-unstyled pl-0">
                                <li className="d-flex align-items-center">
                                    <i className="fas fa-check"></i>Giảm lỗi và tránh trùng lặp
                                </li>
                                <li className="d-flex align-items-center">
                                    <i className="fas fa-check"></i>Nguồn thông tin đáng tin cậy
                                </li>
                                <li className="d-flex align-items-center">
                                    <i className="fas fa-check"></i>Tăng khả năng phối hợp giữa các bên
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentThree;