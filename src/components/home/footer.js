import React, { useState, useContext, useEffect } from 'react';

const Navbar = () => {

    useEffect(() => {

    }, []);

    return(
        <footer className="footer-l-11 text-center text-md-start">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-logo-l-11">
                            <a href="#">
                                <img src="assets/image/logo/logo.png" alt="logo" width="40%"/>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="footer-widget-l-11">
                            <ul className="pl-0 list-unstyled d-flex flex-wrap justify-content-center align-items-end ">
                                <li className="d-flex"><a href="">Giới thiệu</a></li>
                                <li className="d-flex"><a href="">Hướng dẫn</a></li>
                                <li className="d-flex"><a href="">Định Hướng</a></li>
                                <li className="d-flex"><a href="">Điều Khoản</a></li>
                                <li className="d-flex"><a href="">Liên Hệ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="social-icons-l-11">
                            <ul className="pl-0 list-unstyled d-flex  justify-content-center justify-content-md-end align-items-end ">
                                <li className="d-flex flex-column justify-content-center">
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li className="d-flex flex-column justify-content-center">
                                    <a href="#">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li className="d-flex flex-column justify-content-center">
                                    <a href="#">
                                        <i className="fab fa-google" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>                
    );
}

export default Navbar;