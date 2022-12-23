import React from "react";
import css from "../nameheader/Header.module.css";
import Logo from "../../images/logo.png";
import { CgShoppingBag } from "react-icons/cg";

const header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>AMAZON</span>
      </div>

      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Collection</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        </div>

        <input type="text" className={css.search} placeholder="search" />
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
};

export default header;
