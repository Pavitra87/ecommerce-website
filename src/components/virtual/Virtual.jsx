import React from "react";
import css from "../virtual/Virtual.module.css";
import Shade from "../../images/shade.png";
import ReactCompareImage from 'react-compare-image';
import Before from '../../images/before.png'
import After from '../../images/after.png'


const Virtual = () => {
  return (
    <div className={css.Virtual}>
      <div className={css.left}>
        <span>Virtual Try-On</span>
        <span>Never Buy the wrong Shade Again!</span>
        <span>Try Now!</span>
        <img src={Shade} alt="" />
      </div>
      <div className={css.right}>
        <div className={css.wrapper}>
        <ReactCompareImage leftImage={Before} rightImage={After} />;
        </div>
      </div>
    </div>
  );
};

export default Virtual;