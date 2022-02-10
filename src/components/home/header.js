import React, { useState, useContext, useEffect } from 'react';

const Header = () => {

    useEffect(() => {

    }, []);

    return(
        <header className="site-header site-header--menu-left landing-11-menu site-header--absolute site-header--sticky">
            <div className="container">
                <nav className="navbar site-navbar">

                    <div className="brand-logo">
                        <a href="#">
                            <img src="assets/image/logo/logo.png" alt="" className="light-version-logo" width="50%"/>
                            <img src="assets/image/logo/logo-white.png" alt="" className="dark-version-logo" />
                        </a>
                    </div>

                    <div className="menu-block-wrapper">
                        <div className="menu-overlay">

                        </div>
                        <nav className="menu-block" id="append-menu-header">
                            
                            <div className="mobile-menu-head">
                                <div className="go-back">
                                    <i className="fa fa-angle-left"></i>
                                </div>
                                <div className="current-menu-title">

                                </div>
                                <div className="mobile-menu-close">
                                    &times;
                                </div>
                            </div>
                            <ul className="site-menu-main">
                                <li className="nav-item">
                                    <a href="/" className="nav-link-item">Trang chủ</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/blog" className="nav-link-item">Blog</a>
                                </li>
                                <li className="nav-item nav-item-has-children">
                                    <a href="#" className="nav-link-item drop-trigger">
                                        Dịch vụ
                                        <i className="fas fa-angle-down"></i>
                                    </a>
                                    <ul className="sub-menu" id="submenu-9">
                                        <li className="sub-menu--item">
                                            <a href="#">Điều phối dự án BIM</a>
                                        </li>
                                        <li className="sub-menu--item">
                                            <a href="#">3D Laser scan</a>
                                        </li>
                                        <li className="sub-menu--item">
                                            <a href="#">Báo cáo 360</a>
                                        </li>
                                        <li className="sub-menu--item">
                                            <a href="#">Dịch vụ Drone</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item nav-item-has-children">
                                    <a href="#" className="nav-link-item drop-trigger">
                                        Hổ trợ
                                        <i className="fas fa-angle-down"></i>
                                    </a>
                                    <ul className="sub-menu" id="submenu-9">
                                        <li className="sub-menu--item">
                                            <a href="#">Hướng dẫn</a>
                                        </li>
                                        <li className="sub-menu--item">
                                            <a href="#">Liên hệ</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                
                    <div className="header-btns  header-btn-l11 ms-auto d-none d-xs-inline-flex align-items-center">
                        <a className="btn log-in-btn focus-reset" href="http://app.bimnext.vn/dangky">
                            Đăng ký
                        </a>
                        <a className="download-trail-btn btn focus-reset" href="http://app.bimnext.vn/">
                            Ứng dụng
                        </a>
                    </div>

                    <div className="mobile-menu-trigger">
                        <span></span>
                    </div>

                </nav>
            </div>
        </header>               
    );
}

export default Header;