import React from "react";
import EventDetails from "../EventDetails";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const EventSingle = () => {
  return (
    <>
      <Header />
      <PageBanner title={"International Tech - Stack Review"} pageTitle={"Events"} />
      <EventDetails />
      <Footer />
    </>
  );
};

export default EventSingle;
