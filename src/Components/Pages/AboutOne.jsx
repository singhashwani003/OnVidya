import React from "react";
import Feature from "../Feature";
import Footer from "../Footer";
import Header from "../Header";
// import Accordion from "../HomeThreeComponents/Accordion";
import Team from "../Team";
import About from "../HomeTwoComponents/About";
import Counter from "../HomeTwoComponents/Counter";
import PageBanner from "../PageBanner";
import Testimonials from "../HomeThreeComponents/Testimonial";

const AboutOne = () => {
  return (
    <>
      <Header />
      <PageBanner title={"About Us"}/>
      <About />
      <Feature />
      <Counter />
      <Testimonials />
      <Team />
      <Footer />
    </>
  );
};

export default AboutOne;
