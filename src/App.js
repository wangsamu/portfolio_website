import React from 'react';
import About from './Components/about/About';
import Contact from './Components/contact/Contact';
import Experience from './Components/experience/Experience';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Nav from './Components/nav/Nav';
import Portfolio from './Components/portfolio/Portfolio';
import './index.css';

const App = () => {
  return (
    <div id='app'>
      <Nav />
      <Header />
      <About />
      {/* <Experience /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
