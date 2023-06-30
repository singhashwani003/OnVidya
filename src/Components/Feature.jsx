import React from "react";

const Feature = () => {
  return (
    <div className="feature-area bg-[url('../images/all-img/section-bg-1.png')] bg-cover bg-no-repeat bg-center section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Core Features</div>
          <div className="column-title ">
          Why <span className="shape-bg">Choose</span> OnVidya
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
          <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-primary  transition duration-150 hover:-translate-y-1">
            <div
              className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-secondary bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
            >
              <iconify-icon icon="codicon:globe"></iconify-icon>
            </div>
            <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
            Learn More From Anywhere
            </h4>
            <div className="transition duration-150 group-hover:text-white">
            Learn from anywhere in world on desktop, mobile or tablet with an Internet connection.
            {"}"}
            </div>
          </div>

          <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-primary  transition duration-150 hover:-translate-y-1">
            <div
              className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-secondary bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
            >
              <iconify-icon icon="healthicons:i-training-class-outline"></iconify-icon>
            </div>
            <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
              Expert Instructor
            </h4>
            <div className="transition duration-150 group-hover:text-white">
            Experience unparalleled training excellence as we bring industry experts directly to you. Our carefully curated team of IT professionals will guide you through the latest technologies, providing the skills and knowledge needed to excel in today's competitive IT job market.{"}"}
            </div>
          </div>

          <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-primary  transition duration-150 hover:-translate-y-1">
            <div
              className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-secondary bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
            >
              <iconify-icon icon="fluent:handshake-32-regular"></iconify-icon>
            </div>
            <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
              24/7 Strong Support
            </h4>
            <div className="transition duration-150 group-hover:text-white">
            Experience unrivaled customer service like never before with our 24/7 on-call support. From answering your queries to resolving technical issues, our dedicated support team is always ready to assist you, ensuring a seamless and hassle-free learning experience.{"}"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
