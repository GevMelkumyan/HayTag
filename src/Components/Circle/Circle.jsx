import React from "react";
import style from "./Circle.module.css";
import slak from "../img/Component 3.png";
import img from "../img/2023-10-19 15.54.31.jpg";
import img3 from "../img/2023-10-19 15.55.19.jpg";
import img2 from "../img/2023-10-19 15.55.15.jpg";
import img1 from "../img/2023-10-19 15.55.05.jpg";

const Circle = () => {
  return (
    <div className={style.circle_div}>
      <div className={style.circle_1}>
        <div className={style.circle_man}>
          <img src={img} alt="" className={style.img} />
        </div>
        <div className={style.circle_man}>
          <img src={img1} alt="" className={style.img} />
        </div>
        <div className={style.circle_man}>
          <img src={img2} alt="" className={style.img} />
        </div>
        <div className={style.circle_man}>
          <img src={img3} alt="" className={style.img} />
        </div>
      </div>

      <div className={style.circle_text}>
        <div className={style.man_text}>
          <img src={slak} alt="" className={style.man_slak} />
          <h5 className={style.h5}>English Curses</h5>
        </div>

        <div className={style.man_text}>
          <img src={slak} alt="" className={style.man_slak} />
          <h5 className={style.h5}>Front-end Curses</h5>
        </div>

        <div className={style.man_text}>
          <img src={slak} alt="" className={style.man_slak} />
          <h5 className={style.h5}>Backend</h5>
        </div>

        <div className={style.man_text}>
          <img src={slak} alt="" className={style.man_slak} />
          <h5 className={style.h5}>UI/UX Design</h5>
        </div>
      </div>
    </div>
  );
};

export default Circle;
