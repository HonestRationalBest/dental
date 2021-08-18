import React from "react";
import style from "./style/Footer.module.css";
import logo from "../../img/Home/whiteLogo.svg";

import whiteFacebook from "../../img/Home/whiteFacebook.svg";

import whiteYoutube from "../../img/Home/whiteYoutube.svg";
import whiteTwitter from "../../img/Home/whiteTwitter.svg";
import whiteInst from "../../img/Home/whiteInst.svg";
import whiteGoogle from "../../img/Home/whiteGoogle.svg";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.footer__body}>
          <div className={style.footer__about}>
            <img src={logo} alt="logo" />
            <h3>About Us</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{" "}
            </p>
          </div>
          <div className={style.footer__inf}>
            <div className={style.footer__infData}>
              <h4>Business hours:</h4>
              <p>Monday to Saturday 9:30 am - 4:30 pm</p>
            </div>
            <div className={style.footer__infData}>
              <h4>Address:</h4>
              <p>A-67 south Ex Delhi-11002</p>
            </div>
            <div className={style.footer__infData}>
              <h4>Email:</h4>
              <p>abc@abc.com</p>
            </div>
            <div className={style.footer__infData}>
              <h4>Phone:</h4>
              <p>1800 - 458495-4455</p>
            </div>
          </div>
          <div className={style.footer__contacts}>
            <h3>Stay Connected</h3>
            <div className={style.footer__contact}>
              <img src={whiteFacebook} alt="" />
              <p>Facebook</p>
            </div>
            <div className={style.footer__contact}>
              <img src={whiteTwitter} alt="" />
              <p>Twitter</p>
            </div>
            <div className={style.footer__contact}>
              <img src={whiteGoogle} alt="" />
              <p>Google</p>
            </div>
            <div className={style.footer__contact}>
              <img src={whiteInst} alt="" />
              <p>Instagram</p>
            </div>
            <div className={style.footer__contact}>
              <img src={whiteYoutube} alt="" />
              <p>Youtube</p>
            </div>
          </div>
          <div className={style.footer__news}>
            <h3>Newsletter</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className={style.footer_subscribe}>
              <input type="text" placeholder="Enter Email ID"/>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
