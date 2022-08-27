import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../../Shared/Footer/Footer";
import OurServices from "../OurServices/OurServices";
import ScrollToTop from "react-scroll-to-top";

import "./Home.css";
import UseAuth from "../../Hooks/useAuth";

const Home = () => {
  const { admin } = UseAuth();
  return (
    <>
      <ScrollToTop smooth color="#6f00ff" />

      <Banner />
      <About />
      <br />
      <OurServices />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
