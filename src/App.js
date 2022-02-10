import React, { useState, useContext, useEffect } from 'react';
import loadjs from 'loadjs';
import Home from './components/home';

const App = () => {

  useEffect(() => {
    loadjs('/assets/js/vendor.min.js', () => {});
    loadjs('/assets/plugins/aos/aos.min.js', () => {});
    loadjs('/assets/plugins/slick/slick.min.js', () => {});
    loadjs('/assets/plugins/menu/menu.js', () => {});
    loadjs('/assets/js/custom.js', () => {});
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );

}

export default App;