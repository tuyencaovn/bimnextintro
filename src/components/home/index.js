import React, { useState, useContext, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import loadjs from 'loadjs';

import Header from './header';
import Hero from './hero';
import Brand from './brand';
import ContentOne from './contentOne';
import ContentTwo from './contentTwo';
import ContentThree from './contentThree';
import Feature from './feature';
import Testimonial from "./testimonial";
import NewsLetter from "./newsletter";
import Footer from './footer';
import Copyright from './copyright';



const Home = () => {

    useEffect(() => {
        // loadjs('/assets/js/vendor.min.js', () => {});
        // loadjs('/assets/plugins/aos/aos.min.js', () => {});
        // loadjs('/assets/plugins/slick/slick.min.js', () => {});
        // loadjs('/assets/plugins/menu/menu.js', () => {});
        // loadjs('/assets/js/custom.js', () => {});
    }, []);

    return(
        <Router>
            <div className="site-wrapper overflow-hidden position-relative">
                <div id="loading">
                    <div className="preloader">
                        <img src="assets/image/preloader.gif" alt="preloader" />
                    </div>
                </div>

                <Header />
                <Hero />
                {/* <Brand /> */}
                <ContentOne />
                <ContentTwo />
                <ContentThree />
                <Feature />
                {/* <Testimonial /> */}
                <NewsLetter />
                <Footer />
                <Copyright />
            </div>                
        </Router>
    );
}

export default Home;