import React from "react";
import style from "../Modal/Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  const modalStyle = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  };

  const contentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "100px",
  };

  return (
    <div style={modalStyle} className={style.pix}>
      <div style={contentStyle} className={style.modal}>
        {children}
        <div className={style.div_p}>
          <p className={style.pp}>
            HayTag ծրագրավորման ուսուցման ընկերությունը արդեն 3 տարի է
            կազմակերպում և իրականացնում է ծրագրավորման դասընթացներ, նպատակ
            ունենալով աշխատաշուկային հանձնել որակյալ մասնագետներ: Հետևելով
            համաշխարհային IT թրենդներին՝ թարմացվում և կատարելագործվում են
            դասավանդման ծրագրերը: Հատուկ մշակված ծրագրի, տնային առաջադրանքների և
            անվճար փորձաշրջանի արդյունքում մեր ուսանողները գրանցում են մեծ
            հաջողություններ: Հմուտ մասնագետների աշխատանքի արդյունքում մենք
            վայելում ենք մեր ուսանողների սերն ու վստահությունը: Համագործակցելով
            IT ընկերությունների հետ՝ մենք Երաշխավորում ենք լավագույն ուսանողների
            փորձաշրջանն ու աշխատանքը: Դու էլ միացի՛ր մեզ, դարձի՛ր մրցունակ
            ծրագրավորման ոլորտում և երաշխավորի՛ր աշխատանքդ HayTag-ի օգնությամբ:
            
          </p>
        </div>
        <button onClick={onClose} className={style.mod_btn}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
