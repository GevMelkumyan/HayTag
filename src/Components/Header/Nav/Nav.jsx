import React, { useEffect, useState } from "react";
import style from "./Nav.module.css";
import logo from "../../images/logo1.png";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = 100;
    if (window.scrollY > offset) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${style.navv} ${scrolled ? style["nav-scrolled"] : ""}`}>
      <div className={`${style.nav} container`}>
        <div className={style.img}>
          <a href="">
            <img src={logo} alt="logo" href={"#global"} />
          </a>
        </div>
        <div className={style.menu}>
          <ul>
            <a href="#glob">Գլխավոր</a>
            <a href="#about">Մեր մասին</a>
            <a href="#curses">Դասընթացներ</a>
            <a href="#contacting">Կապ Մեզ հետ</a>
          </ul>
        </div>
        <div>
          <a href="#registration" className={`btn ${style.regBtn}`}>
            Գրանցվել Դասընթացի
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
