import React from "react";
import style from "./Curses.module.css";
import SimpleSlider from "../Carusel/Carusel";

const Curses = () => {
  return (
    <div className={style.curses} id="curses">
      <div className={style.curses1}>
        <button className={style.curses_btn}>Web - Front-End</button>
        <button className={style.curses_btn}>Back-End</button>
        <button className={style.curses_btn}>Mobile</button>
      </div>

      <div className={style.curses2}>
        <button className={style.curses_btn}>English</button>
        <button className={style.curses_btn}>SMM</button>
        <button className={style.curses_btn}>QA</button>
      </div>

      <div className={style.curses_text}>
        <div className={style.carusel}>
          <SimpleSlider />
        </div>
      </div>
    </div>
  );
};

export default Curses;
