import React, { useState } from "react";
import style from "./About.module.css";
import Buttons from "../Assets/Buttons/Buttons";
import vector7 from "../images/Vector 7.png";
import vector8 from "../images/Vector 8.png";
import Modal from "../Modal/Modal";

const About = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={style.about} id="about">
      <div className={style.vector7}>
        <img src={vector7} alt="" />
      </div>
      <div className={style.vector8}>
        <img src={vector8} alt="" />
      </div>
      <div className={style.prog}></div>
      <div className={style.aboutUs}>
        <div className={style.hayTag}>
          <p className={style.historyAb}>Մեր մասին</p>
          <p>HayTag</p>
        </div>
        <p className={style.history}>
          HayTag ծրագրավորման ուսուցման ընկերությունը արդեն 3 տարի է
          կազմակերպում և իրականացնում է ծրագրավորման դասընթացներ, նպատակ
          ունենալով աշխատաշուկային հանձնել որակյալ մասնագետներ: Հետևելով
          համաշխարհային IT թրենդներին՝ թարմացվում և կատարելագործվում են
          դասավանդման ծրագրերը: Հատուկ մշակված ծրագրի, տնային առաջադրանքների և
          անվճար փորձաշրջանի արդյունքում մեր ուսանողները գրանցում են մեծ
          հաջողություններ: Հմուտ մասնագետների աշխատանքի արդյունքում մենք
          վայելում ենք մեր ուսանողների սերն ու վստահությունը: Համագործակցելով IT
          ընկերությունների հետ՝ մենք Երաշխավորում ենք լավագույն ուսանողների
          փորձաշրջանն ու աշխատանքը: Դու էլ միացի՛ր մեզ, դարձի՛ր մրցունակ
          ծրագրավորման ոլորտում և երաշխավորի՛ր աշխատանքդ HayTag-ի օգնությամբ:
        </p>
        <Buttons value={"Իմանալ ավելին"} onClick={handleOpenModal} />
        <Modal isOpen={modalOpen} onClose={handleCloseModal} />
      </div>


    </div>
  );
};

export default About;
