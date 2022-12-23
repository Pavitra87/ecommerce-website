import React from "react";
import css from "../name/Hero.module.css";
import HeroImg from "../../images/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className={css.container}>
      {/* -------left side-------- */}
      <div className={css.h_sides}>
        <span className={css.text1}>Skin Protection Cream</span>
        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            seedily say has suitable disposal and boy. Exercise joy man chill
            rejoiced
          </span>
        </div>
      </div>

      {/* ----------mid side-------- */}
      <div className={css.wrapper}>
        <div className={css.bluecircle}></div>
        <img src={HeroImg} alt="" width={400} />
        <div className={css.cart2}>
          <RiShoppingBagFill />

          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* --------------righ side--------- */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>

        <div className={css.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
