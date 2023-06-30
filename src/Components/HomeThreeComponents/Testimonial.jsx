import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation } from "swiper";
import { t1 } from "../../constant/images";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";

const Testimonial = () => {
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);
  return (
    <div className=" section-padding bg-[url('../images/all-img/section-bg-12.png')]  bg-no-repeat bg-cover">
      <Swiper
        navigation={{
          prevEl: ".slickprev",
          nextEl: ".slicknext",
        }}
        spaceBetween={30}
        loop
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
            opacity: [0],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Navigation, EffectCreative]}
        className="container"
      >
        <SwiperSlide className="grid  lg:grid-cols-2 grid-cols-1  xl:gap-[60px] gap-6">
          <div>
            <div className="slider-nav">
              <div className="single-item">
                <div className="xl:h-[593px] lg:h-[400px] h-[150px] lg:w-full w-[150px] rounded-md">
                  <img
                    src={t1}
                    alt=""
                    className=" object-cover w-full h-full rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mini-title">Testimonial</div>
            <h4 className="column-title ">
              Our Tallented Students Valuable
              <span className="shape-bg text-black">Feedback</span>
            </h4>
            <div className="slider-for mt-10">
              <div className="single-item">
                <div>
                  <h3 className=" text-2xl font-bold text-black mb-8">
                    “Revolutionary React Mastery: A Game-Changer in Online Coding Education!”
                  </h3>
                  <div className="mb-8">
                  The course structure is well-organized, starting from the fundamentals and gradually building up to more advanced topics. The lectures are delivered in a live format, allowing for real-time interaction and engagement with the instructors and fellow learners. This interactive approach not only kept me motivated but also helped solidify my understanding of React concepts.

                  </div>
                  <div>
                    <span className=" block  font-semibold text-black mb-1">
                    Neha Singh
                    </span>
                    <span className=" block  font-semibold text-primary">
                    Executive Program Manager
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
