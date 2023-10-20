import React from "react";
import style from "./Rectangle.module.css";
import vector5 from "../images/Vector 5.png";
import location from "../images/Location-Icon.png";
import phone from "../images/phone-call.png";
import mail from "../images/mail.png";

const Rectangle = () => {
  return (
    <div className={style.rectangle}>
      <div className={style.imgInfo}>
        <img src={location} alt="" />
        <div className={style.info}>
          <p>Հասցե</p>
          <a href="#location">Մամիկոնյանց 23</a>
        </div>
      </div>
      <img src={vector5} alt="" />
      <div className={style.imgInfo}>
        <img src={phone} alt="" />
        <div className={style.info}>
          <p>Հեռախոսահամար</p>
          <a href="">+374-77-800-227</a>
        </div>
      </div>
      <img src={vector5} alt="" />
      <div className={style.imgInfo}>
        <img src={mail} alt="" />
        <div className={style.info}>
          <p>Էլ․ հասցե</p>
          <a href="">haytag22@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Rectangle;
