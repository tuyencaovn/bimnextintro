import React, { useState, useContext, useEffect } from 'react';

const ContentOne = () => {

    useEffect(() => {

    }, []);

    return(
        <div className="content-area-l-11-1">
            <div className="container">
                <div className="row align-items-center justify-content-lg-start justify-content-center">
                    <div className="col-xl-6 col-md-5 col-md-10" data-aos="fade-right" data-aos-duration="800" data-aos-once="true">
                        <div className="content-img position-relative z-index-1">
                            <img src="assets/image/l2/collab.jpg" alt="" className="w-100" />
                        </div>
                    </div>
                    <div className="offset-xxl-1 col-xxl-5 col-xl-6 col-lg-7 col-md-9" data-aos="fade-left" data-aos-duration="800" data-aos-once="true">
                        <div className="content section-heading-5">
                            <h2>
                                Môi trường cộng tác trực tuyến.
                            </h2>
                            <p>Môi trường hợp tác giữa các bên tham gia dự án.
                                Là môi trường để giao tiếp và phối hợp giữa tất cả các thành viên dự án.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentOne;