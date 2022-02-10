import React, { useState, useContext, useEffect } from 'react';

const Feature = () => {

    useEffect(() => {

    }, []);

    return(
        <div className="feature-l-11">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9 px-lg-12 col-md-12">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 text-center">
                                <div className="section-heading-5">
                                    <h2>
                                        Một giải pháp, toàn bộ dữ liệu
                                    </h2>
                                    <p>Hầu hết các định dạng dữ liệu có thể khai thác trực tuyến, mà không cần thêm các cài đặt phần mềm kỹ thuật chuyên dụng.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row feature-l-11-items justify-content-center">
                            <div className="col-md-6" data-aos="fade-right" data-aos-duration="800" data-aos-once="true">
                                <div className="d-flex ">
                                    <div className="icon-box">
                                        <i className="icon icon-pen-01"></i>
                                    </div>
                                    <div className="content-body">
                                        <h5>Bản vẽ CAD</h5>
                                        <p>Truy xuất trực tiếp các tập tin bản vẽ CAD.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-left" data-aos-duration="800" data-aos-once="true">
                                <div className="d-flex ">
                                    <div className="icon-box">
                                        <i className="icon icon-layers-3"></i>
                                    </div>
                                    <div className="content-body">
                                        <h5>Định dạng PDF</h5>
                                        <p>Đảm bảo khai thác toàn bộ các tài liệu liên quan dự án.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                                <div className="d-flex ">
                                    <div className="icon-box">
                                        <i className="icon icon-office"></i>
                                    </div>
                                    <div className="content-body">
                                        <h5>Các dạng mô hình</h5>
                                        <p>Đảm bảo khai thác các dạng mô hình khác nhau. Bao gồm cả những mô hình tổng hợp.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                                <div className="d-flex ">
                                    <div className="icon-box">
                                        <i className="icon icon-book-open-2"></i>
                                    </div>
                                    <div className="content-body">
                                        <h5>Đám mây điểm Point Cloud</h5>
                                        <p>Lưu trữ và truy xuất dữ liệu đám mây điểm. Tổng hợp và so sánh đám mây điểm với các mô hình.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-right" data-aos-duration="1200" data-aos-once="true">
                                <div className="d-flex ">
                                    <div className="icon-box">
                                        <i className="icon icon-pen-01"></i>
                                    </div>
                                    <div className="content-body">
                                        <h5>Thông tin GIS</h5>
                                        <p>Có khả năng kết hợp thông tin GIS với Google Map API.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-left" data-aos-duration="1200" data-aos-once="true">
                                <div className="d-flex ">
                                    <div className="icon-box">
                                        <i className="icon icon-settings-gear-64-2"></i>
                                    </div>
                                    <div className="content-body">
                                        <h5>Ảnh 360</h5>
                                        <p>Lưu trữ và truy xuất các ảnh 360. Báo cáo công trường qua hệ thống ảnh 360.</p>
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

export default Feature;