import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation } from "swiper";

function Slider({data}) {
  
  
  
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setSlidesPerView(1);
      } else if (screenWidth <= 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    
       <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        
        modules={[Pagination]}
        className="mySwiper"
        centeredSlides={false}
      >
        {data.map((member, index) => (
        <SwiperSlide key={index}>
          <div className="h-full max-w-sm">
            <a>
              <img
                className="rounded-t-lg"
                src={member.image}
                alt=""
                style={{ width: '536px', height: '354px' }}
              />
            </a>
            <div className="text-center p-5">
              <a>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {member.name}
                </h5>
              </a>
              <p className="mt-3 font-normal text-gray-700 dark:text-gray-400">
                {member.role}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {member.email}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {member.number}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
      
    
  );
}

export default Slider;
