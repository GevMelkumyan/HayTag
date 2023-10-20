import React from "react";
import style from "./Register.module.css";
import lin from "../img/Vector 16.png";

const Register = () => {
  return (
    <div className={style.register} id="registration">
      <div className={style.reg_div}>
        <div className={style.div_name}>
          <h2 className={style.h2}>Միանալ Դասընթացին</h2>
          <img src={lin} alt="" />
        </div>

        <div className={style.div_inp1}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Անուն"
            className={style.inp_1}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Ազգանուն"
            className={style.inp_1}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Էլեկտրոնային Հասցե"
            className={style.inp_1}
          />
          <input 
          type="text" 
          placeholder="հեռախոսահամար"
          className={style.inp_1}
          />
          <select className={style.inp_1}>
            <option className={style.option}>Web - Front-End</option>
            <option className={style.option}>Back-End</option>
            <option className={style.option}>Mobile</option>
            <option className={style.option}>Englishe</option>
            <option className={style.option}>SMM</option>
            <option className={style.option}>QA</option>
          </select>

          <select className={style.inp_1}>
          <option className={style.option}>Անհատական - Առկա</option>
          <option className={style.option}>Խմբակային - Առկա</option>
          <option className={style.option}>Անհատական - Հեռավար</option>

            

          </select>
          <button className={style.btn}>Գրանցվել</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
