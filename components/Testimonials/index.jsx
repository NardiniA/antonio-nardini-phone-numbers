import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Review from "./Review";

import "swiper/css";
import "swiper/css/pagination";
import clsx from "clsx";

const testimonials_data = {
    title: "What Our Users Have To Say.",
    reviews: [
        {
            img: "/images/avatars/user-02.jpg",
            name: "Tim Cook",
            position: "CEO, Apple",
            text: "Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. Explicabo a quaerat sint autem dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga rem nihil nostrum. Laudantium quia consequatur molestias.",
        },
        {
            img: "/images/avatars/user-03.jpg",
            name: "Sundar Pichai",
            position: "CEO, Google",
            text: "Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi eaque consequatur. Voluptatem dignissimos ut ducimus accusantium perspiciatis. Quasi voluptas eius distinctio. Atque eos maxime.",
        },
        {
            img: "/images/avatars/user-01.jpg",
            name: "Satya Nadella",
            position: "CEO, Microsoft",
            text: "Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam. Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio. Voluptatem dignissimos ut.",
        },
        {
            img: "/images/avatars/user-06.jpg",
            name: "Jeff Bezos",
            position: "CEO, Amazon",
            text: "Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac augue. Fusce vel dui. In ac felis  quis tortor malesuada pretium. Curabitur vestibulum aliquam leo. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.",
        },
    ],
    div: false,
    lightBackground: true,
};

const Testimonials = () => {
    return (
        <section id="testimonials" className={clsx("s-testimonials", testimonials_data.div && "div", testimonials_data.lightBackground && "bg-light")}>
            {testimonials_data.title && (
                <div className="row narrow text-center s-testimonials__header">
                    <div className="column lg-12">
                        <h3 className="h2">What Our Users Have To Say.</h3>
                    </div>
                </div>
            )}

            {testimonials_data?.reviews && (
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
                            {testimonials_data?.reviews.map((review, index) => (
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
