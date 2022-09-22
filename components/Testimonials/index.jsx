import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Review from "./Review";

import "swiper/css";
import "swiper/css/pagination";
import clsx from "clsx";

const Testimonials = ({ section }) => {
    return (
        <section id="testimonials" className={clsx("s-testimonials", section.lightBackground && "bg-light")}>
            {section.title && (
                <div className="row narrow text-center s-testimonials__header">
                    <div className="column lg-12">
                        <h3 className="h2">{section.title}</h3>
                    </div>
                </div>
            )}

            {section?.reviews && (
                <div className="row s-testimonials__content">
                    <div className="column lg-12">
                        <Swiper
                            modules={[Pagination]}
                            slidesPerView={1}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                401: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                801: {
                                    slidesPerView: 2,
                                    spaceBetween: 32,
                                },
                                1201: {
                                    slidesPerView: 2,
                                    spaceBetween: 80,
                                },
                            }}
                            className="s-testimonials__slider swiper-container"
                        >
                            {section?.reviews.map((review, index) => (
                                <SwiperSlide key={review.name + "testimonial_key" + index}>
                                    <Review review={review} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Testimonials;
