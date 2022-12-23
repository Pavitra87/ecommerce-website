import React from "react";
import css from "../footer/Footer.module.css";
import Logo from '../../images/logo.png'
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineInbox,
  HiOutlineLogin,
  HiOutlineUsers,
  HiOutlineLink,
} from "react-icons/hi";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />

      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>amazon</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <HiOutlineLocationMarker className={css.icon} />
              <span>111 north avenue Orlando, FL 32801</span>
            </span>

            <span className={css.pngLine}>
              {" "}
              <HiOutlinePhone className={css.icon} />
              <a href="tel:352-306-4415">352-306-4415</a>
            </span>

            <span className={css.pngLine}>
              <HiOutlineInbox className={css.icon} />
              <a href="mailto:support@amazon.com ">support@amazon.com</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <HiOutlineLogin className={css.icon} />
              <p>Sign In</p>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <HiOutlineUsers className={css.icon} />
              <a href="/about">
                <p>About us</p>
              </a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <HiOutlineLink className={css.icon} />
              <p>Safety Privacy & Terms</p>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copyRight}>
        <span>Copyright ©2022 by Amazon, Inc.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
