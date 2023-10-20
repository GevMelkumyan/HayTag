import React from "react";
import style from "./Footer.module.css";
import img from "../images/logo1.png";
import nkr from "../img/Vector 20.png";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={style.footer} id="contacting">
      <div className={style.div_foot}>
        <div className={style.div_1}>
          <img src={img} alt="" className={style.logoimg} />
        </div>

        <img src={nkr} alt="" />

        <div className={style.div_2}>
          <p className={style.p_1}>ABOUT</p>
          <p className={style.p_1}>SERVICES</p>
          <p className={style.p_1}>TECHNOLOGIES</p>
          <p className={style.p_1}>HOW TO</p>
          <p className={style.p_1}>JOIN HYDRA</p>
        </div>

        <img src={nkr} alt="" />

        <div className={style.div_3}>
          <p className={style.p_2}>F.A.Q</p>
          <p className={style.p_2}>SITEMAP</p>
          <p className={style.p_2}>CONDITIONS</p>
          <p className={style.p_2}>LICENSES</p>
        </div>

        <img src={nkr} alt="" />

        <div className={style.div_4}>
          <h4 className={style.h4}>ԿԱՊ ՄԵԶ ՀԵՏ</h4>
          <div className={style.div_min}>
            <a href="https://www.facebook.com/profile.php?id=100086347838252">
              <FaFacebook className={style.lcon} />
            </a>

            <a href="https://www.instagram.com/hay__tag/">
              <FaInstagram className={style.lcon} />
            </a>

            <a href="">
              <FaLinkedin className={style.lcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
