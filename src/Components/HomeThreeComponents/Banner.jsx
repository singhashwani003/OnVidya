/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { man3 } from "../../constant/images";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className=" xl:min-h-screen bg-[url('../images/banner/3.png')]  bg-no-repeat bg-center overflow-hidden topper">
      <div className="container relative">
        <div className="xl:max-w-[570px] lg:max-w-[770px] xl:py-[174px] lg:py-28 md:py-20 py-14">
          <h1>Live<br></br> 
          <span className=" text-secondary inline-block bg-[url('../images/banner/shape.svg')]  bg-no-repeat bg-bottom">
            Lectures
            </span>{" "}
            for Best Learning.
          </h1>
          <div className=" plain-text text-gray leading-[30px] mt-8 mb-14">
          "Empowering IT Professionals for Success in the Digital Age."
          </div>
          <div className="md:flex  md:space-x-4 space-y-3 md:space-y-0">
            <Link to={"/react-templates/edumim/contacts"} className="btn btn-primary">
              Learn From Today
            </Link>
          </div>
        </div>
        <div className="imge-box absolute right-[-60px] top-1/2  -translate-y-1/2 hidden xl:block   ">
          <img src={man3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
