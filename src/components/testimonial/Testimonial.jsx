import React from "react";
import css from "../testimonial/Testimonial.module.css";
import Hero from "../../images/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <div className={css.testimonial}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            Seedily Say has suitable disposal and boy. Exercise joy man childern
            rejoiced
          </span>
        </div>

        <img src={Hero} alt="" />
        <div className={css.container}>
          <span>100k</span>
          <span>Happy Customers with us</span>
        </div>
      </div>
      
      
      
      
      <div className={css.review}>Review</div>
      <div className={css.carousel}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.tCarousel}
          breakpoints={{
            856: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide>
              <div className={css.testimonials}>
                <img src={testimonial.image} alt="" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
