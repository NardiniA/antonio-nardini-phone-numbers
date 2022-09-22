import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import SliderItem from "./SliderItem";

import "swiper/css";
import "swiper/css/pagination"

const Slider = ({ slider }) => {
  return (
      <div className="row s-about__info-slider-block">
          <div className="column lg-12">
              <Swiper
                  modules={[Pagination]}
                  className="s-about__info-slider swiper-container"
                  slidesPerView={1}
                  pagination={{
                      clickable: true,
                  }}
                  breakpoints={{
                      401: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                      },
                      701: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                      },
                      1101: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                      },
                  }}
              >
                  {slider &&
                      slider.map((slide, index) => (
                          <SwiperSlide key={slide.title + index}>
                              <SliderItem slide={slide} />
                          </SwiperSlide>
                      ))}
              </Swiper>
          </div>
      </div>
  );
}

export default Slider;