import React from "react";
import style from "./Buttons.module.css";

const Buttons = ({ value, onClick }) => {
  return <button onClick={onClick} className={style.btn}>{value}</button>;
};

export default Buttons;
