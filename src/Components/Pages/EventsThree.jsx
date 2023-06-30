import React from "react";
import EventsDetailsThree from "../EventsDetailsThree";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const EventsThree = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Fireside Chat With Developers Of CRED"} pageTitle={"Events"} />
      <EventsDetailsThree/>
      <Footer />
    </>
  );
};

export default EventsThree;
