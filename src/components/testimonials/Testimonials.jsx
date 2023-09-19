import React from "react";
import "./testimonials.css";
import AVTR1 from '../../assets/client-logo/himmelber.jpg'

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Himmelberg Inc - https://himmelberg.co.uk/ ",
    review:
      "Can has provided an excellent work and accommodated our ongoing requests very smoothly. He has never pushed us to make payment, instead we've paid in installments until we were sure everything was done, and we were satisfied with his work. He has not only built our UI/UX request on React but also provided additional solutions and advice for upcoming features as well. He was able to not only build the website from scratch, but also host the website on Google Firebase. We are happy to count him as one of our own teammates rather than a simple freelance job.",
  },

 
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonials">
                <div className="client__avatar">
                  <img className="logo-client-img" src={avatar} alt="client avatars" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
