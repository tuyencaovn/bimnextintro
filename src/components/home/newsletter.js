import React, { useState, useContext, useEffect } from 'react';

const NewsLetter = () => {

    useEffect(() => {

    }, []);

    return(
        <div className="newsletter-l-11 fix-newsletter">
            <div className="container">
                <div className="row justify-content-center news-l-11-main-bg position-relative">
                    <div className="news-l-11-second-bg w-100 h-100">

                    </div>
                    <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-11" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
                        <div className="content text-center">
                            <h5>Dùng thử giải pháp!</h5>
                            <h2>TRẢI NGHIỆM NGAY</h2>
                            <p>Chúng tôi phát triển giải pháp dựa trên nhu cầu thực tế của doanh nghiệp hoặc tổ chức. Phù hợp thị trường tại Việt Nam.</p>
                            <div className="btn-area">
                                <a href="http://app.bimnext.vn/dangky" className="btn">ĐĂNG KÝ TÀI KHOẢN</a>
                            </div>
                            <span>Đăng ký miễn phí hoàn toàn.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsLetter;