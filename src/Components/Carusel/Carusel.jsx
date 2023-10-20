import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Carusel.module.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings} className={style.div_slider}>
      <div className={style.curses}>
        <div className={style.curses_div}>
          <h3>1</h3>
        </div>
      </div>
      <div className={style.curses}>
        <div className={style.curses_div}>
          <h3>2</h3>
        </div>
      </div>
      <div className={style.curses}>
        <div className={style.curses_div}>
          <h3>3</h3>
        </div>
      </div>
      <div className={style.curses}>
        <div className={style.curses_div}>
          <h3>4</h3>
        </div>
      </div>
      <div className={style.curses}>
        <div className={style.curses_div}>
          <h3>5</h3>
        </div>
      </div>
      <div className={style.curses}>
        <div className={style.curses_div}>
          <h3>6</h3>
        </div>
      </div>
    </Slider>
  );
}
