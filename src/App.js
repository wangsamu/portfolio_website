import React from 'react';
import { AppContainer } from './AppStyled';
import About from './Components/about/About';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Nav from './Components/nav/Nav';
import Portfolio from './Components/portfolio/Portfolio';
import './index.css';

const App = () => {
  return (
    <AppContainer>
      <Nav />
      <Header />
      <About />
      {/* <Experience /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </AppContainer>
  );
};

export default App;
