import React from "react";
import style from "./style/Card.module.css";

interface CardProps {
  icon: string;
  title: string;
  text: string;
}

export const Card: React.FC<CardProps> = ({ icon, title, text }) => {
  return (
    <div className={style.card}>
      <div className={style.card__icon}>
        <img src={icon} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
