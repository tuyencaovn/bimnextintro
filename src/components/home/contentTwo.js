import React, { useState, useContext, useEffect } from 'react';

const ContentTwo = () => {

    useEffect(() => {

    }, []);

    return(
        <div className="content-area-l-11-2">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between justify-content-center">
                    <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9 order-lg-1 order-1" data-aos="fade-right" data-aos-duration="800" data-aos-once="true">
                        <div className="content section-heading-5">
                            <h2>
                                Hệ thống lưu trữ đám mây
                            </h2>
                            <div className="d-flex content-l-11-3-card">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="27" viewBox="0 0 32 27">
                                    <g>
                                        <g>
                                        <g>
                                            <path className="mypath1" fill="none" stroke="#258aff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="20" strokeWidth="2" d="M25.528 25.615v0h5.47v0-5.911c0-.56-.341-1.062-.86-1.27l-5.118-2.05a1.367 1.367 0 0 1-.86-1.267v-1.2a5.445 5.445 0 0 0 2.735-4.711V6.471a5.47 5.47 0 0 0-8.205-4.738">
                                            </path>
                                        </g>
                                        <g>
                                            <path className="mypath1" fill="none" stroke="#258aff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="20" strokeWidth="2" d="M19.367 19.846l-5.14-2.036a1.358 1.358 0 0 1-.864-1.257v-1.192a5.394 5.394 0 0 0 2.747-4.676V7.97c0-2.999-2.46-5.43-5.495-5.43-3.034 0-5.494 2.431-5.494 5.43v2.715a5.394 5.394 0 0 0 2.747 4.676v1.192c0 .555-.342 1.054-.864 1.26l-5.14 2.036c-.52.206-.863.703-.864 1.257v4.51h19.23v0-4.51c0-.555-.342-1.054-.863-1.26z">
                                            </path>
                                        </g>
                                        </g>
                                    </g>
                                </svg>

                                <div className="content-body">
                                    <h5>Đảm bảo dữ liệu mới nhất</h5>
                                    <p>Mọi việc cập nhật dữ liệu đều được quản lý theo phiên bản.</p>
                                </div>
                            </div>
                            <div className="d-flex content-l-11-3-card">
                                <img src="assets/image/l2/settings.svg" alt="icon" />
                                <div className="content-body">
                                    <h5>Bám sát hướng dẫn theo Quyết định số 348/QĐ-BXD</h5>
                                    <p>Các chức năng, phương thức vận hành định hướng theo nội dung hướng dẫn ứng dụng BIM của Bộ Xây Dựng.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 offset-xxl-2 col-xl-6 col-lg-5 col-md-9 order-lg-1 order-0" data-aos="fade-left" data-aos-duration="800" data-aos-once="true">
                        <div className="content-img">
                            <img src="assets/image/l2/projectfile.jpg" alt="" className="w-lg-auto w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentTwo;