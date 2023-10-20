import React from "react";
import style from "./Header.module.css";
import vector4 from ".././images/Vector 4.png";
import vector3 from ".././images/Vector 3.png";
import vector2 from ".././images/Vector 2.png";
import vector1 from ".././images/Vector 1.png";
import mask from ".././images/Mask group.png";
import Buttons from "../Assets/Buttons/Buttons";
import arrow from "../images/arrow-small-right.png";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.vector4}>
        <img src={vector4} alt="" />
      </div>
      <div className={style.head}>
        <div className={style.text}>
          <p>
            <span>Սովորե'ք </span>
            դարի ամենապահանջված մասնագիտությունը՝
            <span> ծրագրավորում, մեզ հետ</span>
          </p>
          <div className={style.arrow}>
            <Buttons value={"Իմանալ ավելին"} />
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className={style.imageBlock}>
          <img src={mask} alt="" />
          <div className={style.lineBlock}>
            <div className={style.vector3}>
              <img src={vector3} alt="" />
            </div>
            <div className={style.vector2}>
              <img src={vector2} alt="" />
            </div>
            <div className={style.vector1}>
              <img src={vector1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
